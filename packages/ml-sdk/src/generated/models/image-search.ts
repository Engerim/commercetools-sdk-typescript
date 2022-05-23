/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { ProductVariant } from './common'

/**
 *	Response format from image search endpoint.
 *
 */
export interface ImageSearchResponse {
  /**
   *	The maximum number of results to return from a query.
   *
   */
  readonly count: number
  /**
   *	Number of [elements skipped](/../api/general-concepts#offset).
   *
   *
   */
  readonly offset: number
  /**
   *	The total number of product images that were have been analyzed.
   *
   */
  readonly total: number
  /**
   *	An array of image URLs of images that are similar to the query image. If no matching images are found, results is empty.
   *
   */
  readonly results: ResultItem[]
}
/**
 *	An image URL and the product variants it is contained in. If no matching images are found, ResultItem is not present.
 */
export interface ResultItem {
  /**
   *	The URL of the image.
   *
   */
  readonly imageUrl: string
  /**
   *	An array of product variants containing the image URL.
   *
   */
  readonly productVariants: ProductVariant[]
}
