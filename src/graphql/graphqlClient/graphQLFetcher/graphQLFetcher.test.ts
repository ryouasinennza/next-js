/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphql, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { expect, describe, it, beforeEach, vi, beforeAll, afterEach, afterAll } from 'vitest'
import { CustomGraphqlError, STATUS_CODE } from '../../commonType'
import { GraphqlClientConfig } from '../GraphqlClientConfig'
import {
  GraphQLNonSuccessResultError,
  GraphQLUnexpectedResultError,
  UnauthorizedError,
  UnexpectedError,
  ValidationErrors,
} from '../errors'
import { graphQLFetcher } from './graphQLFetcher'

const server = setupServer()

const spyConsoleError = vi.spyOn(global.console, 'error')
spyConsoleError.mockImplementation(() => {})

const id = '123' as never
const operationName = 'GraphQLFetcher'
const query = '\n    query GraphQLFetcher {\n      dummy {\n        id\n      }\n    }\n  '

const response = {
  requestId: 'requestId',
}

const errorDetails = [
  {
    attribute: 'attribute',
    messages: ['messages'],
  },
]

const userMessage = 'userMessage'

const validationErrorsResponse: CustomGraphqlError[] = [
  {
    extensions: {
      code: STATUS_CODE.UNPROCESSABLE_ENTITY,
      errorDetails,
      userMessage,
    },
    message: 'ValidationErrors',
  },
]

const nonSuccessResultError: CustomGraphqlError[] = [
  {
    message: 'NonSuccessResultError',
  },
]

const onError = vi.fn()
const onCommonError = vi.fn()
const onSuccess = vi.fn()

const setup = (): Promise<unknown> => {
  GraphqlClientConfig.configure({
    onError: onCommonError,
  })

  const prams = {
    operationName,
    query,
    variables: {
      id,
    },
  }
  const fetcher = graphQLFetcher((request) => fetch(request))
  return fetcher(prams, { onError, onSuccess })
}

describe('graphQLFetcher', () => {
  beforeEach(() => {
    onError.mockClear()
    onCommonError.mockClear()
    onSuccess.mockClear()
  })

  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' })
  })
  afterEach(() => {
    server.resetHandlers()
    spyConsoleError.mockClear()
  })
  afterAll(() => {
    server.close()
  })

  describe('[正常系]', () => {
    it('正常なリクエストの場合 data が返ること', async () => {
      server.use(
        graphql.query('GraphQLFetcher', ({ variables }): any => {
          expect(variables.id).toBe(id)
          return HttpResponse.json({ data: response })
        }),
      )

      const promise = setup()

      expect(await promise).toStrictEqual(response)
      expect(onSuccess).toHaveBeenCalledWith(response)
      expect(onError).not.toHaveBeenCalled()
      expect(onCommonError).not.toHaveBeenCalled()
    })
  })
  describe('[異常系]', () => {
    it('想定外のエラーがでた場合 UnexpectedError の例外が投げられること', async () => {
      server.use(
        graphql.query('operationNameを間違えるなどのシンタックスエラー', (): any => {
          return HttpResponse.json({ errors: ['aaa'] })
        }),
      )
      await setup()

      expect(onError.mock.lastCall[0]).toBeInstanceOf(UnexpectedError)
      expect(onError.mock.lastCall[0]).toHaveProperty('message', 'UnexpectedError: 想定外のエラーが発生しました。')
      expect(onCommonError.mock.lastCall[0]).toBeInstanceOf(UnexpectedError)
      expect(onCommonError.mock.lastCall[0]).toHaveProperty(
        'message',
        'UnexpectedError: 想定外のエラーが発生しました。',
      )
      expect(onSuccess).not.toHaveBeenCalled()
    })
    it('status が 200 かつ バリデーションエラーの場合 ValidationErrors の例外が投げられること', async () => {
      server.use(
        graphql.query('GraphQLFetcher', () => {
          return HttpResponse.json({ errors: validationErrorsResponse })
        }),
      )
      await setup()

      expect(onError.mock.lastCall[0]).toBeInstanceOf(ValidationErrors)
      expect(onError.mock.lastCall[0]).toHaveProperty('userMessage', userMessage)
      expect(onError.mock.lastCall[0]).toHaveProperty('errors', errorDetails)
      expect(onCommonError.mock.lastCall[0]).toBeInstanceOf(ValidationErrors)
      expect(onCommonError.mock.lastCall[0]).toHaveProperty('userMessage', userMessage)
      expect(onCommonError.mock.lastCall[0]).toHaveProperty('errors', errorDetails)
      expect(onSuccess).not.toHaveBeenCalled()
    })
    it('status が 200 かつ errors が含まれている場合 GraphQLNonSuccessResultError の例外が投げられること', async () => {
      server.use(
        graphql.query('GraphQLFetcher', () => {
          return HttpResponse.json({ errors: nonSuccessResultError })
        }),
      )
      await setup()

      expect(onError.mock.lastCall[0]).toBeInstanceOf(GraphQLNonSuccessResultError)
      expect(onError.mock.lastCall[0]).toHaveProperty('statusText', 'OK')
      expect(onCommonError.mock.lastCall[0]).toBeInstanceOf(GraphQLNonSuccessResultError)
      expect(onCommonError.mock.lastCall[0]).toHaveProperty('statusText', 'OK')
      expect(onSuccess).not.toHaveBeenCalled()
    })
    it('status が 401 の場合 UnauthorizedError の例外が投げられること', async () => {
      server.use(
        graphql.query('GraphQLFetcher', (): any => {
          return new HttpResponse(null, { status: 401 })
        }),
      )
      await setup()

      expect(onError.mock.lastCall[0]).toBeInstanceOf(UnauthorizedError)
      expect(onCommonError.mock.lastCall[0]).toBeInstanceOf(UnauthorizedError)
      expect(onSuccess).not.toHaveBeenCalled()
    })
    it('status が 200 以外の場合 GraphQLUnexpectedResultError の例外が投げられること', async () => {
      server.use(
        graphql.query('GraphQLFetcher', (): any => {
          return new HttpResponse(null, { status: 500 })
        }),
      )
      await setup()

      expect(onError.mock.lastCall[0]).toBeInstanceOf(GraphQLUnexpectedResultError)
      expect(onError.mock.lastCall[0]).toHaveProperty('statusText', 'Internal Server Error')
      expect(onError.mock.lastCall[0]).toHaveProperty('status', 500)
      expect(onCommonError.mock.lastCall[0]).toBeInstanceOf(GraphQLUnexpectedResultError)
      expect(onCommonError.mock.lastCall[0]).toHaveProperty('statusText', 'Internal Server Error')
      expect(onCommonError.mock.lastCall[0]).toHaveProperty('status', 500)
      expect(onSuccess).not.toHaveBeenCalled()
    })
    it('onError が設定されていなかったら エラーの際 例外が投げられること', async () => {
      server.use(
        graphql.query('GraphQLFetcher', (): any => {
          return new HttpResponse(null, { status: 500 })
        }),
      )

      const prams = {
        operationName,
        query,
        variables: {
          id,
        },
      }
      const fetcher = graphQLFetcher((request) => fetch(request))

      await expect(fetcher(prams)).rejects.toBeInstanceOf(GraphQLUnexpectedResultError)
    })
  })
})
