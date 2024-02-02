import { eslintDisableConsole } from '../../../utils/eslintDisableConsole'
import { STATUS_CODE } from '../../commonType'
import { GraphqlClientConfig } from '../GraphqlClientConfig'
import { createRequest } from '../createRequest'
import {
  FetcherErrors,
  GraphQLNonSuccessResultError,
  GraphQLUnexpectedResultError,
  UnauthorizedError,
  UnexpectedError,
  ValidationErrors,
} from '../errors'
import type { CustomGraphqlResponse } from '../../commonType'

type FetcherRequest = {
  operationName: string | null
  query: string
  variables: Record<string, never>
}

interface GraphQlResponse<TResponse> extends Response {
  json(): Promise<CustomGraphqlResponse<TResponse>>
}

type InnerFetch<TResponse> = (input: RequestInfo | URL, init?: RequestInit) => Promise<GraphQlResponse<TResponse>>

type OnError = (error: FetcherErrors) => Promise<void>

type Option<TResponse> = {
  // 個々のリクエストでエラーハンドリングを追加する場合に使用する 追加なので共通エラー判定に引っかかる場合はそちらが優先される
  onError?: OnError
  onSuccess?: (data: TResponse) => Promise<void>
}

type Fetcher<TResponse> = (req: FetcherRequest, option?: Option<TResponse>) => Promise<TResponse | undefined>

type GraphQLFetcher = <TResponse>(innerFetch: InnerFetch<TResponse>) => Fetcher<TResponse>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ErrorHandler = (error: FetcherErrors, miscData: any, onError?: OnError) => Promise<void>

const isJSON = (response: Response): boolean => {
  const contentType = response.headers.get('content-type') || ''
  return contentType.includes('application/json')
}

const errorHandler: ErrorHandler = async (error, miscData, onError) => {
  eslintDisableConsole.error(miscData)
  eslintDisableConsole.error(error)
  await GraphqlClientConfig.onError(error)

  if (!onError) {
    // useSWR の onError に渡す場合 は例外を投げる必要があるため
    throw error
  }
  await onError(error)
}

export const graphQLFetcher: GraphQLFetcher = (innerFetch) => {
  return async (req, option?) => {
    const { onError, onSuccess } = option || {}

    const input = await createRequest(req)

    const response = await innerFetch(input).catch(async (error) => {
      await errorHandler(new UnexpectedError('想定外のエラーが発生しました。', error), input, onError)
    })

    if (!response) {
      return
    }

    if (response.status === 200 && isJSON(response)) {
      const { data, errors = [] } = await response.json()

      if (errors.length > 0 || !data) {
        for (const error of errors) {
          if (error?.extensions && error?.extensions?.code === STATUS_CODE.UNPROCESSABLE_ENTITY) {
            await errorHandler(
              new ValidationErrors(error.extensions?.userMessage, error.extensions?.errorDetails),
              response,
              onError,
            )
            return
          }
        }

        await errorHandler(new GraphQLNonSuccessResultError(errors, response.statusText), response, onError)
        return
      }

      if (onSuccess) {
        await onSuccess(data)
      }

      return data
    }

    if (response.status === 401) {
      await errorHandler(new UnauthorizedError(), response, onError)
      return
    }

    await errorHandler(new GraphQLUnexpectedResultError(response.statusText, response.status), response, onError)
    return
  }
}
