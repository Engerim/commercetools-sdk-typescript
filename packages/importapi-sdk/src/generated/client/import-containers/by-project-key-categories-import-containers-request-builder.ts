/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import { executeRequest } from '../../shared/utils/common-types'
import { ByProjectKeyCategoriesImportContainersByImportContainerKeyRequestBuilder } from './by-project-key-categories-import-containers-by-import-container-key-request-builder'

export class ByProjectKeyCategoriesImportContainersRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withImportContainerKeyValue(childPathArgs: {
    importContainerKey: string
  }): ByProjectKeyCategoriesImportContainersByImportContainerKeyRequestBuilder {
    return new ByProjectKeyCategoriesImportContainersByImportContainerKeyRequestBuilder(
      {
        pathArgs: {
          ...this.args.pathArgs,
          ...childPathArgs,
        },
        executeRequest: this.args.executeRequest,
        baseUri: this.args.baseUri,
      }
    )
  }
}