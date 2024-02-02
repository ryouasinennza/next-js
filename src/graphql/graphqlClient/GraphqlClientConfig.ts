import { FetcherErrors } from './errors'

type Config = {
  middleware?: () => Promise<void>
  onError?: (error: FetcherErrors) => Promise<void>
}

export class GraphqlClientConfigClass {
  private endpoint = ''
  private middleware = async (): Promise<void> => {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private errorHandler = async (error: FetcherErrors): Promise<void> => {}
  private token = ''

  configure({ onError }: Config): void {
    if (onError) {
      this.errorHandler = onError
    }
  }

  setMiddleware(middleware: () => Promise<void>): void {
    this.middleware = middleware
  }

  setEndpoint(endpoint: string): void {
    this.endpoint = endpoint
  }

  setToken(token: string): void {
    this.token = token
  }

  getEndpoint(): string {
    return this.endpoint
  }

  getToken(): string {
    return this.token
  }

  async runMiddleware(): Promise<void> {
    await this.middleware()
  }

  async onError(error: FetcherErrors): Promise<void> {
    await this.errorHandler(error)
  }
}

export const GraphqlClientConfig = new GraphqlClientConfigClass()
