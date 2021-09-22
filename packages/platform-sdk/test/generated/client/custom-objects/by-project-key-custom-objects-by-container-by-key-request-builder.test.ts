/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { RequestWithMethod } from '../../../request-with-method'
import { ApiRoot } from '../../../../src'

const apiRoot: ApiRoot = new ApiRoot({ executeRequest: null })

export function getRequestsWithMethodParameters(): RequestWithMethod[] {
  return [
    {
      method: 'get',
      uri: '/test_projectKey/custom-objects/test_container/test_key?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .customObjects()
        .withContainerAndKey({ container: 'test_container', key: 'test_key' })
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/custom-objects/test_container/test_key',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .customObjects()
        .withContainerAndKey({ container: 'test_container', key: 'test_key' })
        .get(),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/custom-objects/test_container/test_key?version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .customObjects()
        .withContainerAndKey({ container: 'test_container', key: 'test_key' })
        .delete({ queryArgs: { version: 2 } }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/custom-objects/test_container/test_key?dataErasure=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .customObjects()
        .withContainerAndKey({ container: 'test_container', key: 'test_key' })
        .delete({ queryArgs: { dataErasure: true } }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/custom-objects/test_container/test_key?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .customObjects()
        .withContainerAndKey({ container: 'test_container', key: 'test_key' })
        .delete({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/custom-objects/test_container/test_key',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .customObjects()
        .withContainerAndKey({ container: 'test_container', key: 'test_key' })
        .delete(),
    },
  ]
}

describe('Testing ByProjectKeyCustomObjectsByContainerByKeyRequestBuilder Requests', () => {
  const requestsToTest = getRequestsWithMethodParameters()
  requestsToTest.forEach((rm) => {
    test(`Testing => request method: ${rm.method} and url: ${rm.uri}`, async () => {
      expect(rm.method.toLowerCase()).toBe(
        rm.request.clientRequest().method.toLowerCase()
      )
      expect(rm.uri.toLowerCase()).toBe(
        rm.request.clientRequest().uri.toLowerCase()
      )
    })
  })
})