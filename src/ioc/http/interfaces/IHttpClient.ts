export interface RequestConfig {
  headers?: Record<string, string>
  params?: Record<string, string>
}

export abstract class IHTTPClient {
  protected abstract baseURL: string
  public abstract get<T>(path: string, config?: RequestConfig): Promise<T>
}
