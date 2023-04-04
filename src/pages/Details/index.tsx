import { useSearchParams } from 'react-router-dom'
import { useIoc } from '../../ioc'
import { IoCSymbols } from '../../ioc/symbols'
import { useEffect, useState } from 'react'
import { type Coin } from '../../services/coingecko/interfaces/coins'
import {
  Container,
  CoinName,
  CoinInfo,
  Name,
  Symbol,
  Classification,
  FinalContainer,
  Followers,
  Stars,
  Forks,
  NameSymbol,
  Price,
  Percentage,
  Estatistic,
  EstatisticPer,
  Top,
  GitFol,
  FolSp,
  GitStar,
  StarSp,
  GitFork,
  ForkSp
} from './details'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { Breadcrumbs, Link, Typography } from '@mui/material'

export const Details = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  const coinGeckoService = useIoc(IoCSymbols.ICoinGeckoService)
  const [coinData, setCoinData] = useState<Coin | null>(null)

  useEffect(() => {
    async function fetchCoin () {
      if (id != null) {
        setCoinData(await coinGeckoService.detailCoin(id))
      }
    }
    void fetchCoin()
  }, [coinGeckoService, id])

  return (
    <>
    <Top>
      <Breadcrumbs separator='>' aria-label="breadcrumb">
        <Link
          underline="hover"
          href="/"
          style={{ color: '#A7B1C2' }}
        >
          Dashboard
        </Link>
        {coinData != null && <>
          <Typography style={{ fontWeight: 600, color: '#000000' }} >{coinData.name}</Typography>
        </>}
      </Breadcrumbs>
    </Top>
      <Container>
        <CoinName>
          {coinData != null && <>
            <Name>
            {coinData.name}
            </Name>
            <Symbol>{coinData.symbol.toUpperCase()} <StarBorderIcon style={{ border: '1px solid #A7B1C2', borderRadius: '8px' }}/></Symbol>
            <Classification>
            {`Classificação #${coinData.market_cap_rank}`}
            </Classification>
          </>}
        </CoinName>
        <CoinInfo>
          {coinData != null && <>
          <NameSymbol>{ `Preço de ${coinData.name} (${coinData.symbol.toUpperCase()})` }</NameSymbol>
          <Price>{`R$ ${coinData.price_change_percentage_24h.toFixed(4)}`}</Price>
          <Percentage>{coinData.market_cap_change_percentage_24h.toFixed(2)}</Percentage>
          <Estatistic>{coinData.circulating_supply} <EstatisticPer>{coinData.price_change_percentage_24h.toFixed(2)}</EstatisticPer></Estatistic>
          </>}
        </CoinInfo>
      </Container>
      <FinalContainer>
        <Followers>
          <GitFol>GitHub Followers</GitFol>
          <FolSp>213</FolSp>
        </Followers>
        <Stars>
          <GitStar>GitHub Stars</GitStar>
          <StarSp>970</StarSp>
        </Stars>
        <Forks>
          <GitFork>GitHub Forks</GitFork>
          <ForkSp>213</ForkSp>
        </Forks>
      </FinalContainer>
    </>
  )
}
