
import { IHTTPClient, type RequestConfig } from '../interfaces/IHttpClient'

export class FetchHttpClient extends IHTTPClient {
  constructor (protected baseURL: string) {
    super()
    console.log('Using fetch')
  }

  async get<T>(path: string, config?: RequestConfig | undefined): Promise<T> {
    return await fetch(`${this.baseURL}${path}?${Object
      .entries(config?.params ?? [])
      .map(([k, v]) => `${k}=${v}`).join(',')}`, {
      headers: config?.headers
    }).then(async data => await data.json() as T)
  }
}
