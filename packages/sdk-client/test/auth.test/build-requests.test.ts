import { oneLineTrim } from 'common-tags'
import {
  buildRequestForClientCredentialsFlow,
  buildRequestForPasswordFlow,
  buildRequestForRefreshTokenFlow,
  buildRequestForAnonymousSessionFlow,
} from '../../src/sdk-middleware-auth/build-requests'
import * as scopes from '../../src/sdk-middleware-auth/scopes'

const allScopes = Object.keys(scopes).map((key) => scopes[key])

function createTestOptions(options) {
  return {
    host: 'http://localhost:8080',
    projectKey: 'test',
    credentials: {
      clientId: '123',
      clientSecret: 'secret',
      user: {
        username: 'foobar',
        password: 'verysecurepassword',
      },
    },
    scopes: Object.values(scopes),
    ...options,
  }
}

describe('buildRequestForPasswordFlow', () => {
  const body = oneLineTrim`
    grant_type=password&
    username=foobar&
    password=verysecurepassword&
    scope=${allScopes.join(' ')}
  `
  test('build request values with all the given options', () => {
    const options = createTestOptions(null)
    expect(buildRequestForPasswordFlow(options)).toEqual({
      basicAuth: 'MTIzOnNlY3JldA==',
      url: 'http://localhost:8080/oauth/test/customers/token',
      body,
    })
  })

  test('uses custom oauth uri, if given', () => {
    const options = createTestOptions({ oauthUri: '/foo/bar' })
    expect(buildRequestForPasswordFlow(options)).toEqual({
      basicAuth: 'MTIzOnNlY3JldA==',
      url: 'http://localhost:8080/foo/bar',
      body,
    })
  })

  test('parses a host that ends with slash', () => {
    const options = createTestOptions({
      host: 'http://localhost:8080/',
    })
    expect(buildRequestForPasswordFlow(options)).toEqual({
      basicAuth: 'MTIzOnNlY3JldA==',
      url: 'http://localhost:8080/oauth/test/customers/token',
      body,
    })
  })

  test('parses a host that ends without slash', () => {
    const options = createTestOptions({
      host: 'http://localhost:8080',
    })
    expect(buildRequestForPasswordFlow(options)).toEqual({
      basicAuth: 'MTIzOnNlY3JldA==',
      url: 'http://localhost:8080/oauth/test/customers/token',
      body,
    })
  })

  test('validate required options', () => {
    expect(() => buildRequestForPasswordFlow(null)).toThrow(
      'Missing required options'
    )
  })

  test('validate required option (host)', () => {
    expect(() => buildRequestForPasswordFlow({} as any)).toThrow(
      'Missing required option (host)'
    )
  })

  test('validate required option (projectKey)', () => {
    const options = createTestOptions({
      projectKey: undefined,
    })
    expect(() => buildRequestForPasswordFlow(options)).toThrow(
      'Missing required option (projectKey)'
    )
  })

  test('validate required option (credentials)', () => {
    const options = createTestOptions({
      credentials: undefined,
    })
    expect(() => buildRequestForPasswordFlow(options)).toThrow(
      'Missing required option (credentials)'
    )
  })

  test('validate required option (clientId, clientSecret)', () => {
    const options = createTestOptions({
      credentials: {},
    })
    expect(() => buildRequestForPasswordFlow(options)).toThrow(
      'Missing required credentials (clientId, clientSecret, user)'
    )
  })

  test('validate required option (username, password)', () => {
    const options = createTestOptions({
      credentials: {
        clientId: 'foo',
        clientSecret: 'baz',
        user: {
          username: 'bar',
        },
      },
    })
    expect(() => buildRequestForPasswordFlow(options)).toThrow(
      'Missing required user credentials (username, password)'
    )
  })

  test('validate both credentials are required', () => {
    const options = createTestOptions({
      credentials: { clientId: '123' },
    })
    expect(() => buildRequestForPasswordFlow(options)).toThrow(
      'Missing required credentials (clientId, clientSecret, user)'
    )
  })
})

describe('buildRequestForClientCredentialsFlow', () => {
  test('build request values with all the given options', () => {
    const options = createTestOptions(null)
    expect(buildRequestForClientCredentialsFlow(options)).toEqual({
      basicAuth: 'MTIzOnNlY3JldA==',
      url: 'http://localhost:8080/oauth/token',
      body: `grant_type=client_credentials&scope=${allScopes.join(' ')}`,
    })
  })

  test('uses custom oauth uri, if given', () => {
    const options = createTestOptions({ oauthUri: '/foo/bar' })
    expect(buildRequestForClientCredentialsFlow(options)).toEqual({
      basicAuth: 'MTIzOnNlY3JldA==',
      url: 'http://localhost:8080/foo/bar',
      body: `grant_type=client_credentials&scope=${allScopes.join(' ')}`,
    })
  })

  test('parses a host that ends with slash', () => {
    const options = createTestOptions({
      host: 'http://localhost:8080/',
    })
    expect(buildRequestForClientCredentialsFlow(options)).toEqual({
      basicAuth: 'MTIzOnNlY3JldA==',
      url: 'http://localhost:8080/oauth/token',
      body: `grant_type=client_credentials&scope=${allScopes.join(' ')}`,
    })
  })

  test('parses a host that ends without slash', () => {
    const options = createTestOptions({
      host: 'http://localhost:8080',
    })
    expect(buildRequestForClientCredentialsFlow(options)).toEqual({
      basicAuth: 'MTIzOnNlY3JldA==',
      url: 'http://localhost:8080/oauth/token',
      body: `grant_type=client_credentials&scope=${allScopes.join(' ')}`,
    })
  })

  test('validate required options', () => {
    expect(() => buildRequestForClientCredentialsFlow(null)).toThrow(
      'Missing required options'
    )
  })

  test('validate required option (host)', () => {
    expect(() => buildRequestForClientCredentialsFlow({} as any)).toThrow(
      'Missing required option (host)'
    )
  })

  test('validate required option (projectKey)', () => {
    const options = createTestOptions({
      projectKey: undefined,
    })
    expect(() => buildRequestForClientCredentialsFlow(options)).toThrow(
      'Missing required option (projectKey)'
    )
  })

  test('validate required option (credentials)', () => {
    const options = createTestOptions({
      credentials: undefined,
    })
    expect(() => buildRequestForClientCredentialsFlow(options)).toThrow(
      'Missing required option (credentials)'
    )
  })

  test('validate required option (clientId, clientSecret)', () => {
    const options = createTestOptions({
      credentials: {},
    })
    expect(() => buildRequestForClientCredentialsFlow(options)).toThrow(
      'Missing required credentials (clientId, clientSecret)'
    )
  })

  test('validate both credentials are required', () => {
    const options = createTestOptions({
      credentials: { clientId: '123' },
    })
    expect(() => buildRequestForClientCredentialsFlow(options)).toThrow(
      'Missing required credentials (clientId, clientSecret)'
    )
  })
})

describe('buildRequestForRefreshTokenFlow', () => {
  const mockCred = {
    credentials: {
      clientId: '123',
      clientSecret: 'secret',
    },
    refreshToken: 'foobar123',
    scopes: allScopes,
  }
  test('build request values with all the given options', () => {
    const options = createTestOptions(mockCred)
    expect(buildRequestForRefreshTokenFlow(options)).toEqual({
      basicAuth: 'MTIzOnNlY3JldA==',
      url: 'http://localhost:8080/oauth/token',
      body: 'grant_type=refresh_token&refresh_token=foobar123',
    })
  })

  test('uses custom oauth uri, if given', () => {
    const options = createTestOptions({ oauthUri: '/foo/bar', ...mockCred })
    expect(buildRequestForRefreshTokenFlow(options)).toEqual({
      basicAuth: 'MTIzOnNlY3JldA==',
      url: 'http://localhost:8080/foo/bar',
      body: 'grant_type=refresh_token&refresh_token=foobar123',
    })
  })

  test('parses a host that ends with slash', () => {
    const options = createTestOptions({
      host: 'http://localhost:8080/',
      ...mockCred,
    })
    expect(buildRequestForRefreshTokenFlow(options)).toEqual({
      basicAuth: 'MTIzOnNlY3JldA==',
      url: 'http://localhost:8080/oauth/token',
      body: 'grant_type=refresh_token&refresh_token=foobar123',
    })
  })

  test('parses a host that ends without slash', () => {
    const options = createTestOptions({
      host: 'http://localhost:8080',
      ...mockCred,
    })
    expect(buildRequestForRefreshTokenFlow(options)).toEqual({
      basicAuth: 'MTIzOnNlY3JldA==',
      url: 'http://localhost:8080/oauth/token',
      body: 'grant_type=refresh_token&refresh_token=foobar123',
    })
  })

  test('validate required options', () => {
    expect(() => buildRequestForRefreshTokenFlow(null)).toThrow(
      'Missing required options'
    )
  })

  test('validate required option (host)', () => {
    expect(() => buildRequestForRefreshTokenFlow({} as any)).toThrow(
      'Missing required option (host)'
    )
  })

  test('validate required option (projectKey)', () => {
    const options = createTestOptions({
      projectKey: undefined,
    })
    expect(() => buildRequestForRefreshTokenFlow(options)).toThrow(
      'Missing required option (projectKey)'
    )
  })

  test('validate required option (credentials)', () => {
    const options = createTestOptions({
      credentials: undefined,
    })
    expect(() => buildRequestForRefreshTokenFlow(options)).toThrow(
      'Missing required option (credentials)'
    )
  })

  test('validate required option (refreshToken)', () => {
    const options = createTestOptions({
      ...mockCred,
      refreshToken: undefined,
    })
    expect(() => buildRequestForRefreshTokenFlow(options)).toThrow(
      'Missing required option (refreshToken)'
    )
  })

  test('validate required option (clientId, clientSecret)', () => {
    const options = createTestOptions({
      ...mockCred,
      credentials: {},
    })
    expect(() => buildRequestForRefreshTokenFlow(options)).toThrow(
      'Missing required credentials (clientId, clientSecret)'
    )
  })

  test('validate both credentials are required', () => {
    const options = createTestOptions({
      ...mockCred,
      credentials: { clientId: '123' },
    })
    expect(() => buildRequestForRefreshTokenFlow(options)).toThrow(
      'Missing required credentials (clientId, clientSecret)'
    )
  })
})

describe('buildRequestForAnonymousSessionFlow', () => {
  test('build request values with all the given options', () => {
    const options = createTestOptions(null)
    expect(buildRequestForAnonymousSessionFlow(options)).toEqual({
      basicAuth: 'MTIzOnNlY3JldA==',
      url: 'http://localhost:8080/oauth/test/anonymous/token',
      body: `grant_type=client_credentials&scope=${allScopes.join(' ')}`,
    })
  })

  test('validate required options', () => {
    expect(() => buildRequestForAnonymousSessionFlow(null)).toThrow(
      'Missing required options'
    )
  })

  test('validate required option (projectKey)', () => {
    const options = createTestOptions({
      projectKey: undefined,
    })
    expect(() => buildRequestForAnonymousSessionFlow(options)).toThrow(
      'Missing required option (projectKey)'
    )
  })

  test('should add anonymousId if passed in', () => {
    const mockCred = {
      clientId: '123',
      clientSecret: 'secret',
      anonymousId: 'youdontknowme',
    }
    const options = createTestOptions({ credentials: mockCred })
    expect(buildRequestForAnonymousSessionFlow(options)).toEqual({
      basicAuth: 'MTIzOnNlY3JldA==',
      url: 'http://localhost:8080/oauth/test/anonymous/token',
      body: oneLineTrim`
        grant_type=client_credentials&
        scope=${allScopes.join(' ')}&
        anonymous_id=youdontknowme
      `,
    })
  })
})
