/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { CustomerSignInResult } from '../../models/customer'
import { MyBusinessUnitAssociateDraft } from '../../models/me'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
/**
 **/
export class ByProjectKeyInBusinessUnitKeyByBusinessUnitKeyMeCustomersRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        businessUnitKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	The My Business Unit endpoint does not support assigning existing Customers to a Business Unit.
   *	Use this endpoint to create a new Customer and associate it with the Business Unit.
   *	The user must have the `Admin` role within the Business Unit to perform this request.
   *	The new Customer is created with an empty set of roles.
   *
   */
  public post(methodArgs: {
    body: MyBusinessUnitAssociateDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<CustomerSignInResult> {
    return new ApiRequest<CustomerSignInResult>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate:
          '/{projectKey}/in-business-unit/key={businessUnitKey}/me/customers',
        pathVariables: this.args.pathArgs,
        headers: {
          'Content-Type': 'application/json',
          ...methodArgs?.headers,
        },
        body: methodArgs?.body,
      },
      this.args.executeRequest
    )
  }
}