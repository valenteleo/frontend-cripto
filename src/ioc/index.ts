import { createContext, useContext } from 'react'
import { createContainer } from 'iti'
import { AxiosHttpClient } from './http/implementations/Axios.HttpClient'
import { CoinGeckoService } from '../services/coingecko/coingecko.service'
import { IoCSymbols } from './symbols'
import { AppConfig } from '../config/default'
import { FetchHttpClient } from './http/implementations/Fetch.HttpClient'
import { type IHTTPClient } from './http/interfaces/IHttpClient'

const AbstractHttpClient: new (baseUrl: string) => IHTTPClient = process.env.REACT_APP_USE_FETCH === 'true' ? FetchHttpClient : AxiosHttpClient

const IocContext = createContext(createContainer()
  .upsert({
    [IoCSymbols.IHttpService.Services.CoinGecko]: new AbstractHttpClient(AppConfig.CoinGecko.baseUrl)
  })
  .upsert((items) => ({
    [IoCSymbols.ICoinGeckoService]: () => new CoinGeckoService(items[IoCSymbols.IHttpService.Services.CoinGecko])
  }))
)

export const useIoc = (symbol: string) => {
  return useContext(IocContext).get(symbol)
}
