/* eslint-disable typescript-sort-keys/interface */
import type { GraphQLFormattedError } from 'graphql'
import type { GraphQLHTTPExtensions } from 'graphql-yoga'

export const STATUS_CODE = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  UNPROCESSABLE_ENTITY: 'UNPROCESSABLE_ENTITY',
} as const

type STATUS_CODE_TYPE = (typeof STATUS_CODE)[keyof typeof STATUS_CODE]

export type CustomErrorDetail = {
  /**
   * リクエスト属性のエラーメッセージ配列
   */
  messages: string[]
  /**
   *  リクエスト属性名
   */
  attribute: string
}

/**
 * graphql-yoga のドキュメントには extensions に originalError があると書いてあるが、実際にはない
 */
export type CustomExtensions = {
  /**
   * graphql-yoga で追加される項目
   */
  http?: GraphQLHTTPExtensions
  /**
   * graphql-yoga で追加される項目
   */
  unexpected?: boolean
  /* -- 以下はcredited_bffで追加される項目 -- */
  /**
   * エラーコード
   */
  code?: STATUS_CODE_TYPE
  /**
   * ユーザーに見せるメッセージ
   */
  userMessage?: string
  /**
   * バリデーションエラーの配列
   */
  errorDetails?: CustomErrorDetail[]
}

export interface CustomGraphqlError extends GraphQLFormattedError {
  extensions?: CustomExtensions
}

export interface CustomGraphqlResponse<T> {
  data?: T
  errors?: CustomGraphqlError[]
}
