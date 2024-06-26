import createHttpUserAgent from '../../src/http-user-agent/create-user-agent'

const userAgentBrowser =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36'

describe('for browser', () => {
  const originalWindow = global.window
  global.window = {
    // @ts-ignore
    document: {
      nodeType: 9,
    },
    // @ts-ignore
    navigator: {
      userAgent: userAgentBrowser,
    },
  }
  const userAgent = createHttpUserAgent({
    name: 'commercetools-sdk-javascript',
    version: '1.0.0',
    libraryName: 'my-awesome-library',
    libraryVersion: '1.0.0',
    contactUrl: 'https://commercetools.com',
    contactEmail: 'helpdesk@commercetools.com',
  })
  // Reset original `global.window`
  global.window = originalWindow

  test('has sdk info', () => {
    expect(userAgent).toMatch('commercetools-sdk-javascript')
  })
  test('has browser info', () => {
    // because we use jsdom
    expect(userAgent).toMatch(userAgentBrowser)
  })
  test('has library info', () => {
    expect(userAgent).toMatch('my-awesome-library/1.0.0')
  })
  test('has library url', () => {
    expect(userAgent).toMatch('https://commercetools.com')
  })
  test('has contact info', () => {
    expect(userAgent).toMatch('helpdesk@commercetools.com')
  })
})

describe('for node', () => {
  const userAgent = createHttpUserAgent({
    name: 'commercetools-sdk-javascript',
    version: '1.0.0',
    libraryName: 'my-awesome-library',
    libraryVersion: '1.0.0',
    contactUrl: 'https://commercetools.com',
    contactEmail: 'helpdesk@commercetools.com',
  })

  test('has sdk info', () => {
    expect(userAgent).toMatch('commercetools-sdk-javascript')
  })
  test('has node info', () => {
    expect(userAgent).toMatch(`node.js/`)
  })
  test('has library info', () => {
    expect(userAgent).toMatch('my-awesome-library/1.0.0')
  })
  test('has library url', () => {
    expect(userAgent).toMatch('https://commercetools.com')
  })
  test('has contact info', () => {
    expect(userAgent).toMatch('helpdesk@commercetools.com')
  })
})

describe('validation', () => {
  test('throws if options is undefined', () => {
    expect(() => createHttpUserAgent(null)).toThrow(
      'Missing required option `name`'
    )
  })
  test('throws if options is empty', () => {
    expect(() => createHttpUserAgent(null)).toThrow(
      'Missing required option `name`'
    )
  })
  test('throws if options is missing name', () => {
    // @ts-ignore
    expect(() => createHttpUserAgent({ foo: 'bar' })).toThrow(
      'Missing required option `name`'
    )
  })
})

describe('optional information', () => {
  const { version } = require('../../package.json')
  test('create user agent with the correct SDK', () => {
    const userAgent = createHttpUserAgent({
      name: `commercetools-sdk-javascript-v2/${version}`,
    })
    expect(userAgent).toBe(
      `commercetools-sdk-javascript-v2/${version} node.js/${process.version.slice(
        1
      )}`
    )
  })
  test('create user agent with library name and version', () => {
    const userAgent = createHttpUserAgent({
      name: `commercetools-sdk-javascript-v2/${version}`,
      libraryName: 'my-awesome-library',
      libraryVersion: '1.0.0',
    })
    expect(userAgent).toBe(
      `commercetools-sdk-javascript-v2/${version} node.js/${process.version.slice(
        1
      )} my-awesome-library/1.0.0`
    )
  })
  test('create user agent with contact url', () => {
    const userAgent = createHttpUserAgent({
      name: `commercetools-sdk-javascript-v2/${version}`,
      contactUrl: 'https://commercetools.com',
    })
    expect(userAgent).toBe(
      `commercetools-sdk-javascript-v2/${version} node.js/${process.version.slice(
        1
      )} (+https://commercetools.com)`
    )
  })
  test('create user agent with contact email', () => {
    const userAgent = createHttpUserAgent({
      name: `commercetools-sdk-javascript-v2/${version}`,
      contactEmail: 'helpdesk@commercetools.com',
    })
    expect(userAgent).toBe(
      `commercetools-sdk-javascript-v2/${version} node.js/${process.version.slice(
        1
      )} (+helpdesk@commercetools.com)`
    )
  })
  test('create user agent with full contact info', () => {
    const userAgent = createHttpUserAgent({
      name: `commercetools-sdk-javascript-v2/${version}`,
      contactUrl: 'https://commercetools.com',
      contactEmail: 'helpdesk@commercetools.com',
    })
    expect(userAgent).toBe(
      `commercetools-sdk-javascript-v2/${version} node.js/${process.version.slice(
        1
      )} (+https://commercetools.com; +helpdesk@commercetools.com)`
    )
  })
})
