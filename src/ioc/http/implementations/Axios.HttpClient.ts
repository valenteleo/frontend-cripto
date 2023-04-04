
import Axios, { type AxiosInstance } from 'axios'
import { IHTTPClient, type RequestConfig } from '../interfaces/IHttpClient'

export class AxiosHttpClient extends IHTTPClient {
  private readonly instance: AxiosInstance
  constructor (protected baseURL: string) {
    super()
    this.instance = Axios.create({
      baseURL
    })
    console.log('Using axios')
  }

  async get<T>(path: string, config?: RequestConfig | undefined): Promise<T> {
    return await this.instance.get<T>(path, config).then(({ data }) => data)
  }
}
