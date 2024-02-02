import { GraphqlClientConfig } from '../GraphqlClientConfig'

type FetcherRequest = {
  operationName: string | null
  query: string
  variables: Record<string, never>
}

type CreateRequest = (req: FetcherRequest) => Promise<Request>

type IsValidUrl = (url: string) => boolean

const isValidUrl: IsValidUrl = (url) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const createRequest: CreateRequest = async (req) => {
  await GraphqlClientConfig.runMiddleware()

  const endpoint = GraphqlClientConfig.getEndpoint()
  const token = GraphqlClientConfig.getToken()

  const url = new URL(isValidUrl(endpoint) ? endpoint : `${window.location.origin}${endpoint}`)

  if (req.operationName) {
    url.hash = `#${req.operationName}`
  }

  const headers = new Headers({
    Accept: 'application/json',
    Authorization: token,
    'Content-Type': 'application/json',
  })

  const body = JSON.stringify({
    operationName: req.operationName,
    query: req.query,
    variables: req.variables,
  })

  return new Request(url, {
    body,
    headers,
    method: 'POST',
  })
}
