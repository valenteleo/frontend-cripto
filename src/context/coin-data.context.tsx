import React, { useCallback, useEffect, useState } from 'react'
import { type Coin } from '../services/coingecko/interfaces/coins'
import { useIoc } from '../ioc'
import { IoCSymbols } from '../ioc/symbols'

interface CoinContextData {
  coins: Coin[]
  searchTerm: string
  setSearchTerm: (query: string) => void
}

const CoinContext = React.createContext<CoinContextData>({ coins: [], searchTerm: '', setSearchTerm: () => {} })

export const CoinProvider = ({ children }: React.PropsWithChildren) => {
  const coinGeckoService = useIoc(IoCSymbols.ICoinGeckoService)
  const [coins, setCoins] = useState<Coin[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const fetchTop10Coins = useCallback(() => {
    async function fetch () {
      const top10Coins = await coinGeckoService.getTop10Coins()
      setCoins(top10Coins)
    }
    void fetch()
  }, [coinGeckoService])

  const fetchSearchTerm = useCallback(() => {
    async function fetch () {
      if (searchTerm.length < 1) {
        fetchTop10Coins()
      } else {
        const foundCoins = await coinGeckoService.searchCoin(searchTerm)
        setCoins(foundCoins)
      }
    }
    void fetch()
  }, [coinGeckoService, fetchTop10Coins, searchTerm])

  useEffect(() => {
    fetchTop10Coins()
  }, [coinGeckoService, fetchTop10Coins])

  useEffect(() => {
    fetchSearchTerm()
  }, [fetchSearchTerm, searchTerm])

  return <CoinContext.Provider value={{ coins, setSearchTerm, searchTerm }}>
        {children}
    </CoinContext.Provider>
}

export const useCoinDataContext = () => {
  return React.useContext(CoinContext)
}
