import { type Coin } from './coins'

export interface ICoinGeckoService {
  getTop10Coins: () => Promise<Coin[]>
  searchCoin: (query: string) => Promise<Coin[]>
  detailCoin: (id: string) => Promise<Coin>
}
