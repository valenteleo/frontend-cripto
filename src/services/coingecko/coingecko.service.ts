import { type IHTTPClient } from '../../ioc/http/interfaces/IHttpClient'
import { type Coin } from './interfaces/coins'
import { type ICoinGeckoService } from './interfaces/service'

export class CoinGeckoService implements ICoinGeckoService {
  constructor (
    protected httpClient: IHTTPClient
  ) { }

  public async detailCoin (id: string): Promise<Coin> {
    return await this.httpClient.get<Coin>(`/coins/${id}`)
      .then((response) => ({ ...response, ...response.market_data, market_cap: response.market_data?.market_cap.usd ?? 0 }))
  }

  public async searchCoin (query: string): Promise<Coin[]> {
    return await this.httpClient.get<{ coins: Coin[] }>('/search/', { params: { query } })
      .then(async (response) => await Promise.all(response.coins.slice(0, 5).map(async coin => await this.detailCoin(coin.id))))
  }

  public async getTop10Coins (
  ) {
    return await this.httpClient.get<Coin[]>('/coins/markets/', { params: { vs_currency: 'usd' } })
      .then((response) => response
        .sort((a, b) => a.current_price - b.current_price)
        .slice(0, 10))
  }
}
