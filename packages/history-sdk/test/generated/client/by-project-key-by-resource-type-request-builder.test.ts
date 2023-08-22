/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { RequestWithMethod } from '../../request-with-method'
import { ApiRoot } from '../../../src'

const apiRoot: ApiRoot = new ApiRoot({ executeRequest: null })

export function getRequestsWithMethodParameters(): RequestWithMethod[] {
  return [
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?date.from=date.from',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { 'date.from': 'date.from' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?date.to=date.to',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { 'date.to': 'date.to' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?limit=7',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?offset=3',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?userId=userId',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { userId: 'userId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?clientId=clientId',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { clientId: 'clientId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?customerId=customerId',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { customerId: 'customerId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?associateId=associateId',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { associateId: 'associateId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?type=type',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { type: 'type' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?resourceKey=resourceKey',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { resourceKey: 'resourceKey' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?source=source',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { source: 'source' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?changes=changes',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { changes: 'changes' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?stores=stores',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { stores: 'stores' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?excludePlatformInitiatedChanges=excludeAll',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { excludePlatformInitiatedChanges: 'excludeAll' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType?expand=true',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get({ queryArgs: { expand: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/test_resourceType',
      request: apiRoot
        .withProjectKeyValue({ projectKey: 'test_projectKey' })
        .withResourceTypeValue({ resourceType: 'test_resourceType' })
        .get(),
    },
  ]
}

describe('Testing ByProjectKeyByResourceTypeRequestBuilder Requests', () => {
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
