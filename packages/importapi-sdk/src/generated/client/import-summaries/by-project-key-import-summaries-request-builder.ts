/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.vrap.io/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */
import { executeRequest } from '../../shared/utils/common-types'
import { ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyRequestBuilder } from './by-project-key-import-summaries-import-sink-key-by-import-sink-key-request-builder'

export class ByProjectKeyImportSummariesRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public importSinkKeyWithImportSinkKeyValue(childPathArgs: {
    importSinkKey: string
  }): ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyRequestBuilder {
    return new ByProjectKeyImportSummariesImportSinkKeyByImportSinkKeyRequestBuilder(
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