import { STATUS_CODE } from '../../commonType'
import type { CustomErrorDetail, CustomGraphqlError } from '../../commonType'

/**
 * 認証エラー
 */
export class UnauthorizedError extends Error {
  constructor() {
    super('UnauthorizedError')
  }
  public readonly statusText: string = STATUS_CODE.UNAUTHORIZED
  public readonly status: number = 401
}

/**
 * バリデーションエラー
 */
export class ValidationErrors extends Error {
  constructor(
    public readonly userMessage: string = '',
    public readonly errors: CustomErrorDetail[] = [],
  ) {
    super(`ValidationErrors: ${userMessage}`)
  }
  public readonly statusText: string = STATUS_CODE.UNPROCESSABLE_ENTITY
  public readonly status: number = 422
}

/**
 * GraphQLのレスポンスにerrorsが含まれている場合に発生するエラー
 */
export class GraphQLNonSuccessResultError extends Error {
  constructor(
    public readonly errors: CustomGraphqlError[],
    public readonly statusText: string,
  ) {
    const errorMessages = errors.map((error) => `${error?.message}`)

    super(`GraphQLNonSuccessResultError:\n${errorMessages.join('\n')}`)
  }
  public readonly status: number = 200
}

/**
 * 想定していないGraphQLレスポンスが返ってきた時のエラー
 */
export class GraphQLUnexpectedResultError extends Error {
  constructor(
    public readonly statusText: string,
    public readonly status: number,
  ) {
    super(`GraphQLUnexpectedResultError: status = ${status} statusText = ${statusText}`)
  }
}

/**
 * 想定していないエラー
 */
export class UnexpectedError extends Error {
  public readonly status: number = 999
  constructor(
    public readonly originalMessage: string,
    public readonly cause: unknown,
  ) {
    super(`UnexpectedError: ${originalMessage}`)
  }
}

export type FetcherErrors =
  | UnauthorizedError
  | ValidationErrors
  | GraphQLNonSuccessResultError
  | GraphQLUnexpectedResultError
  | UnexpectedError
