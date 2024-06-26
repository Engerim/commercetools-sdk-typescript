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
   *	Associates with the `UpdateAssociates` [Permission](ctp:api:type:Permission) can use this endpoint to create a new Customer and associate it with the Business Unit.
   *	If the required [Permission](/projects/associate-roles#permission) is missing, an [AssociateMissingPermission](/errors#associatemissingpermission) error is returned.
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
