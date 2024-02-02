import { expect, describe, it } from 'vitest'
import { CustomGraphqlError, STATUS_CODE } from '../../commonType'
import {
  UnauthorizedError,
  GraphQLNonSuccessResultError,
  GraphQLUnexpectedResultError,
  UnexpectedError,
  ValidationErrors,
} from './errors'
import type { CustomErrorDetail } from '../../commonType'

const userMessage = 'バリデーションエラー'
const validationErrors: CustomErrorDetail[] = [
  {
    attribute: 'name',
    messages: ['name is invalid'],
  },
]
const errors: CustomGraphqlError[] = [{ message: 'message1' }, { message: 'message2' }]
const statusText = 'statusText'
const status = 123
const errorInstance = new Error('errorInstance message')

describe('Error class', () => {
  it('UnauthorizedError のインスタンスが生成されること', () => {
    const error = new UnauthorizedError()
    expect(error).toBeInstanceOf(UnauthorizedError)
    expect(error).toHaveProperty('message', `UnauthorizedError`)
    expect(error).toHaveProperty('statusText', STATUS_CODE.UNAUTHORIZED)
    expect(error).toHaveProperty('status', 401)
  })

  it('ValidationErrors のインスタンスが生成されること', () => {
    const error = new ValidationErrors(userMessage, validationErrors)
    expect(error).toBeInstanceOf(ValidationErrors)
    expect(error).toHaveProperty('message', `ValidationErrors: ${userMessage}`)
    expect(error).toHaveProperty('userMessage', userMessage)
    expect(error).toHaveProperty('errors', validationErrors)
    expect(error).toHaveProperty('statusText', STATUS_CODE.UNPROCESSABLE_ENTITY)
    expect(error).toHaveProperty('status', 422)
  })
  it('GraphQLNonSuccessResultError のインスタンスが生成されること', () => {
    const error = new GraphQLNonSuccessResultError(errors, statusText)
    expect(error).toBeInstanceOf(GraphQLNonSuccessResultError)
    expect(error).toHaveProperty('message', `GraphQLNonSuccessResultError:\nmessage1\nmessage2`)
    expect(error).toHaveProperty('errors', errors)
    expect(error).toHaveProperty('statusText', statusText)
    expect(error).toHaveProperty('status', 200)
  })
  it('GraphQLUnexpectedResultError のインスタンスが生成されること', () => {
    const error = new GraphQLUnexpectedResultError(statusText, status)
    expect(error).toBeInstanceOf(GraphQLUnexpectedResultError)
    expect(error).toHaveProperty(
      'message',
      `GraphQLUnexpectedResultError: status = ${status} statusText = ${statusText}`,
    )
    expect(error).toHaveProperty('statusText', statusText)
    expect(error).toHaveProperty('status', status)
  })
  it('UnexpectedError のインスタンスが生成されること', () => {
    const error = new UnexpectedError(errorInstance.message, errorInstance)
    expect(error).toBeInstanceOf(UnexpectedError)
    expect(error).toHaveProperty('originalMessage', errorInstance.message)
    expect(error).toHaveProperty('cause', errorInstance)
    expect(error).toHaveProperty('status', 999)
    expect(error).toHaveProperty('message', `UnexpectedError: ${errorInstance.message}`)
  })
})
