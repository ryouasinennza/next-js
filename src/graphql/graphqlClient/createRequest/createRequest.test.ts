import { expect, describe, it, beforeEach } from 'vitest'
import { GraphqlClientConfig } from '../GraphqlClientConfig'
import { createRequest } from './createRequest'

const req = {
  operationName: 'operationName',
  query: 'query',
  variables: {
    variable: 'variable' as never,
  },
}

const token = 'token'

describe('createRequest', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: { origin: 'https://example.com' },
      writable: true,
    })

    GraphqlClientConfig.setToken('')
    GraphqlClientConfig.setEndpoint('')
    GraphqlClientConfig.setMiddleware(async () => {})
  })

  it('Request インスタンスが生成されること', async () => {
    const endpoint = 'https://example.com/dummy'
    GraphqlClientConfig.setMiddleware(async () => {
      GraphqlClientConfig.setToken(token)
      GraphqlClientConfig.setEndpoint(endpoint)
    })
    const instance = await createRequest(req)
    const body = await instance.json()

    expect(instance).toBeInstanceOf(Request)
    expect(instance).toHaveProperty('url', 'https://example.com/dummy#operationName')
    expect(body).toStrictEqual(req)
    expect(instance.headers.get('Accept')).toBe('application/json')
    expect(instance.headers.get('Authorization')).toBe(token)
    expect(instance.headers.get('Content-Type')).toBe('application/json')
  })

  it('endpoint が URL でなかったら window.location.origin + endpoint になること', async () => {
    const endpoint = '/graphql'
    GraphqlClientConfig.setMiddleware(async () => {
      GraphqlClientConfig.setToken(token)
      GraphqlClientConfig.setEndpoint(endpoint)
    })
    const instance = await createRequest(req)
    expect(instance).toBeInstanceOf(Request)
    expect(instance).toHaveProperty('url', 'https://example.com/graphql#operationName')
  })
})
