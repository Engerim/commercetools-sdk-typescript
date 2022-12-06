/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  BaseResource,
  CreatedBy,
  LastModifiedBy,
  LocalizedString,
} from './common'
import { CustomerReference, CustomerResourceIdentifier } from './customer'
import { ProductVariant } from './product'
import { ProductTypeReference } from './product-type'
import { StoreKeyReference, StoreResourceIdentifier } from './store'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface ShoppingList extends BaseResource {
  /**
   *	Unique identifier of the ShoppingList.
   *
   */
  readonly id: string
  /**
   *	Current version of the ShoppingList.
   *
   */
  readonly version: number
  /**
   *	Name of the ShoppingList.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	User-defined unique identifier of the ShoppingList.
   *
   */
  readonly key?: string
  /**
   *	Reference to a [Customer](ctp:api:type:Customer) associated with the ShoppingList.
   *
   *
   */
  readonly customer?: CustomerReference
  /**
   *	Human-readable identifiers usually used as deep-link URL to the related ShoppingList.
   *	Each slug is unique across a Project, but a ShoppingList can have the same slug for different languages.
   *	The slug must match the pattern `[a-zA-Z0-9_-]{2,256}`. For [good performance](/predicates/query#performance-considerations), indexes are provided for the first 15 `languages` set on the [Project](ctp:api:type:Project).
   *
   */
  readonly slug?: LocalizedString
  /**
   *	Description of the ShoppingList.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Line Items (containing Products) of the ShoppingList.
   *
   *
   */
  readonly lineItems: ShoppingListLineItem[]
  /**
   *	Line Items (containing text values) of the ShoppingList.
   *
   *
   */
  readonly textLineItems: TextLineItem[]
  /**
   *	Number of days after which the ShoppingList will be automatically deleted if it has not been modified.
   *
   */
  readonly deleteDaysAfterLastModification?: number
  /**
   *	Identifies ShoppingLists belonging to an [anonymous session](/../api/authorization#tokens-for-anonymous-sessions).
   *
   */
  readonly anonymousId?: string
  /**
   *	Store to which the ShoppingList is assigned.
   *
   *
   */
  readonly store?: StoreKeyReference
  /**
   *	Custom Fields defined for the ShoppingList.
   *
   *
   */
  readonly custom?: CustomFields
  /**
   *	Date and time (UTC) the ShoppingList was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the ShoppingList was last updated.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
}
export interface ShoppingListDraft {
  /**
   *	Name of the ShoppingList.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	Human-readable identifiers usually used as deep-link URL to the related ShoppingList.
   *	Each slug is unique across a Project, but a ShoppingList can have the same slug for different languages.
   *	The slug must match the pattern `[a-zA-Z0-9_-]{2,256}`.
   *
   */
  readonly slug?: LocalizedString
  /**
   *	The [Customer](ctp:api:type:Customer) the ShoppingList should be associated to.
   *
   *
   */
  readonly customer?: CustomerResourceIdentifier
  /**
   *	User-defined unique identifier for the ShoppingList.
   *
   *
   */
  readonly key?: string
  /**
   *	Description of the ShoppingList.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Identifies ShoppingLists belonging to an [anonymous session](/../api/authorization#tokens-for-anonymous-sessions).
   *
   */
  readonly anonymousId?: string
  /**
   *	Number of days after which the ShoppingList will be automatically deleted if it has not been modified. If not set, the [default value](ctp:api:type:ShoppingListsConfiguration) configured in the [Project](ctp:api:type:Project) is used.
   *
   *
   */
  readonly deleteDaysAfterLastModification?: number
  /**
   *	Line Items (containing Products) to add to the ShoppingList.
   *
   *
   */
  readonly lineItems?: ShoppingListLineItemDraft[]
  /**
   *	Line Items (containing text values) to add to the ShoppingList.
   *
   *
   */
  readonly textLineItems?: TextLineItemDraft[]
  /**
   *	Assigns the new ShoppingList to the [Store](ctp:api:type:Store).
   *
   *
   */
  readonly store?: StoreResourceIdentifier
  /**
   *	Custom Fields defined for the ShoppingList.
   *
   */
  readonly custom?: CustomFieldsDraft
}
/**
 *	ShoppingListLineItems are Line Items that contain references to [ProductVariants](ctp:api:type:ProductVariant) in a [Product](ctp:api:type:Product).
 *
 *	In addition to standard [Reference Expansion](/general-concepts#reference-expansion), a ShoppingListLineItem offers expansion on `productSlug` and `variant`, defined with the query parameter `expand`.
 *
 */
export interface ShoppingListLineItem {
  /**
   *	Date and time (UTC) the ShoppingListLineItem was added to the ShoppingList.
   *
   *
   */
  readonly addedAt: string
  /**
   *	Custom Fields of the ShoppingListLineItem.
   *
   *
   */
  readonly custom?: CustomFields
  /**
   *	If the Product or Product Variant is deleted, `deactivatedAt` is the date and time (UTC) of deletion.
   *
   *	This data is updated in an [eventual consistent manner](/general-concepts#eventual-consistency) when the Product Variant cannot be ordered anymore.
   *
   *
   */
  readonly deactivatedAt?: string
  /**
   *	Unique identifier of the ShoppingListLineItem.
   *
   */
  readonly id: string
  /**
   *	Name of the Product.
   *
   *	This data is updated in an [eventual consistent manner](/general-concepts#eventual-consistency) when the Product's name changes.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	Unique identifier of a [Product](ctp:api:type:Product).
   *
   *
   */
  readonly productId: string
  /**
   *	The Product Type defining the Attributes of the [Product](ctp:api:type:Product).
   *
   *
   */
  readonly productType: ProductTypeReference
  /**
   *	Number of Products in the ShoppingListLineItem.
   *
   *
   */
  readonly quantity: number
  /**
   *	`id` of the [ProductVariant](ctp:api:type:ProductVariant) the ShoppingListLineItem refers to. If not set, the ShoppingListLineItem refers to the Master Variant.
   *
   *
   */
  readonly variantId?: number
  /**
   *	Data of the [ProductVariant](ctp:api:type:ProductVariant).
   *	Returned when expanded using `expand=lineItems[*].variant`.
   *
   *	*Limitation: `expand=lineItems[0].variant` is not supported.*
   *
   *
   */
  readonly variant?: ProductVariant
  /**
   *	Slug of the current [ProductData](ctp:api:type:ProductData).
   *	Only returned when expanded using `expand=lineItems[*].productSlug`.
   *
   *	*Limitation: `expand=lineItems[0].productSlug` is not supported.*
   *
   *
   */
  readonly productSlug?: LocalizedString
}
/**
 *	The [ProductVariant](ctp:api:type:ProductVariant) to be included in the ShoppingListLineItem must be specified using the `productID` and `variantID`, or by the `sku`.
 *
 */
export interface ShoppingListLineItemDraft {
  /**
   *	Unique identifier of a [Product](ctp:api:type:Product).
   *
   *
   */
  readonly productId?: string
  /**
   *	`id` of the [ProductVariant](ctp:api:type:ProductVariant). If not set, the ShoppingListLineItem refers to the Master Variant.
   *
   *
   */
  readonly variantId?: number
  /**
   *	`sku` of the [ProductVariant](ctp:api:type:ProductVariant).
   *
   *
   */
  readonly sku?: string
  /**
   *	Date and time the ShoppingListLineItem is added to the [ShoppingList](ctp:api:type:ShoppingList). If not set, the current date and time (UTC) is used.
   *
   *
   */
  readonly addedAt?: string
  /**
   *	Custom Fields of the ShoppingListLineItem.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *	Number of Products in the ShoppingListLineItem.
   *
   *
   */
  readonly quantity?: number
}
export interface ShoppingListPagedQueryResponse {
  /**
   *	Number of [results requested](/../api/general-concepts#limit).
   *
   *
   */
  readonly limit: number
  /**
   *	Actual number of results returned.
   *
   *
   */
  readonly count: number
  /**
   *	Total number of results matching the query.
   *	This number is an estimation that is not [strongly consistent](/../api/general-concepts#strong-consistency).
   *	This field is returned by default.
   *	For improved performance, calculating this field can be deactivated by using the query parameter `withTotal=false`.
   *	When the results are filtered with a [Query Predicate](/../api/predicates/query), `total` is subject to a [limit](/../api/limits#queries).
   *
   *
   */
  readonly total?: number
  /**
   *	Number of [elements skipped](/../api/general-concepts#offset).
   *
   *
   */
  readonly offset: number
  /**
   *	[ShoppingLists](ctp:api:type:ShoppingList) matching the query.
   *
   *
   */
  readonly results: ShoppingList[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [ShoppingList](ctp:api:type:ShoppingList).
 *
 */
export interface ShoppingListReference {
  readonly typeId: 'shopping-list'
  /**
   *	Unique identifier of the referenced [ShoppingList](ctp:api:type:ShoppingList).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded ShoppingList. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for ShoppingLists.
   *
   *
   */
  readonly obj?: ShoppingList
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [ShoppingList](ctp:api:type:ShoppingList).
 *
 */
export interface ShoppingListResourceIdentifier {
  readonly typeId: 'shopping-list'
  /**
   *	Unique identifier of the referenced [ShoppingList](ctp:api:type:ShoppingList). Either `id` or `key` is required.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [ShoppingList](ctp:api:type:ShoppingList). Either `id` or `key` is required.
   *
   *
   */
  readonly key?: string
}
export interface ShoppingListUpdate {
  /**
   *	Expected version of the ShoppingList on which the changes should be applied. If the expected version does not match the actual version, a [409 Conflict](/../api/errors#409-conflict) will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	List of update actions to be performed on the ShoppingList.
   *
   *
   */
  readonly actions: ShoppingListUpdateAction[]
}
export type ShoppingListUpdateAction =
  | ShoppingListAddLineItemAction
  | ShoppingListAddTextLineItemAction
  | ShoppingListChangeLineItemQuantityAction
  | ShoppingListChangeLineItemsOrderAction
  | ShoppingListChangeNameAction
  | ShoppingListChangeTextLineItemNameAction
  | ShoppingListChangeTextLineItemQuantityAction
  | ShoppingListChangeTextLineItemsOrderAction
  | ShoppingListRemoveLineItemAction
  | ShoppingListRemoveTextLineItemAction
  | ShoppingListSetAnonymousIdAction
  | ShoppingListSetCustomFieldAction
  | ShoppingListSetCustomTypeAction
  | ShoppingListSetCustomerAction
  | ShoppingListSetDeleteDaysAfterLastModificationAction
  | ShoppingListSetDescriptionAction
  | ShoppingListSetKeyAction
  | ShoppingListSetLineItemCustomFieldAction
  | ShoppingListSetLineItemCustomTypeAction
  | ShoppingListSetSlugAction
  | ShoppingListSetStoreAction
  | ShoppingListSetTextLineItemCustomFieldAction
  | ShoppingListSetTextLineItemCustomTypeAction
  | ShoppingListSetTextLineItemDescriptionAction
/**
 *	TextLineItems are Line Items that use text values instead of references to Products.
 *
 */
export interface TextLineItem {
  /**
   *	Date and time (UTC) the TextLineItem was added to the [ShoppingList](ctp:api:type:ShoppingList).
   *
   *
   */
  readonly addedAt: string
  /**
   *	Custom Fields of the TextLineItem.
   *
   *
   */
  readonly custom?: CustomFields
  /**
   *	Description of the TextLineItem.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Unique identifier of the TextLineItem.
   *
   */
  readonly id: string
  /**
   *	Name of the TextLineItem.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	Number of entries in the TextLineItem.
   *
   *
   */
  readonly quantity: number
}
export interface TextLineItemDraft {
  /**
   *	Date and time the TextLineItem is added to the [ShoppingList](ctp:api:type:ShoppingList). If not set, the current date and time (UTC) is used.
   *
   *
   */
  readonly addedAt?: string
  /**
   *	Custom Fields for the TextLineItem.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *	Description of the TextLineItem.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Name of the TextLineItem.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	Number of entries in the TextLineItem.
   *
   *
   */
  readonly quantity?: number
}
/**
 *	The [ProductVariant](ctp:api:type:ProductVariant) to be included in the ShoppingListLineItem must be specified using the `productID` and `variantID`, or by the `sku`.
 *	If the ShoppingList already contains a ShoppingListLineItem for the same Product Variant with the same Custom Fields, then only the quantity of the existing ShoppingListLineItem is increased.
 *	A ShoppingListLineItem with an empty `variantId` is not considered the same as a ShoppingListLineItem with a `variantId` currently referring to the Master Variant.
 *
 */
export interface ShoppingListAddLineItemAction {
  readonly action: 'addLineItem'
  /**
   *	`sku` of the [ProductVariant](ctp:api:type:ProductVariant).
   *
   *
   */
  readonly sku?: string
  /**
   *	Unique identifier of a [Product](ctp:api:type:Product).
   *
   *
   */
  readonly productId?: string
  /**
   *	`id` of the [ProductVariant](ctp:api:type:ProductVariant). If not set, the ShoppingListLineItem refers to the Master Variant.
   *
   *
   */
  readonly variantId?: number
  /**
   *	Number of Products in the ShoppingListLineItem.
   *
   *
   */
  readonly quantity?: number
  /**
   *	Date and time the TextLineItem is added to the [ShoppingList](ctp:api:type:ShoppingList). If not set, the current date and time (UTC) is used.
   *
   *
   */
  readonly addedAt?: string
  /**
   *	Custom Fields defined for the ShoppingListLineItem.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
}
export interface ShoppingListAddTextLineItemAction {
  readonly action: 'addTextLineItem'
  /**
   *	Name of the TextLineItem.
   *
   *
   */
  readonly name: LocalizedString
  /**
   *	Description of the TextLineItem.
   *
   *
   */
  readonly description?: LocalizedString
  /**
   *	Number of entries in the TextLineItem.
   *
   *
   */
  readonly quantity?: number
  /**
   *	Date and time the TextLineItem is added to the [ShoppingList](ctp:api:type:ShoppingList). If not set, the current date and time (UTC) is used.
   *
   *
   */
  readonly addedAt?: string
  /**
   *	Custom Fields defined for the TextLineItem.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
}
export interface ShoppingListChangeLineItemQuantityAction {
  readonly action: 'changeLineItemQuantity'
  /**
   *	The `id` of the [ShoppingListLineItem](ctp:api:type:ShoppingListLineItem) to update.
   *
   *
   */
  readonly lineItemId: string
  /**
   *	New value to set. If `0`, the ShoppingListLineItem is removed from the ShoppingList.
   *
   *
   */
  readonly quantity: number
}
export interface ShoppingListChangeLineItemsOrderAction {
  readonly action: 'changeLineItemsOrder'
  /**
   *	All existing ShoppingListLineItem `id`s in the desired new order.
   *
   *
   */
  readonly lineItemOrder: string[]
}
export interface ShoppingListChangeNameAction {
  readonly action: 'changeName'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly name: LocalizedString
}
export interface ShoppingListChangeTextLineItemNameAction {
  readonly action: 'changeTextLineItemName'
  /**
   *	The `id` of the [TextLineItem](ctp:api:type:TextLineItem) to update.
   *
   *
   */
  readonly textLineItemId: string
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly name: LocalizedString
}
export interface ShoppingListChangeTextLineItemQuantityAction {
  readonly action: 'changeTextLineItemQuantity'
  /**
   *	The `id` of the [TextLineItem](ctp:api:type:TextLineItem) to update.
   *
   *
   */
  readonly textLineItemId: string
  /**
   *	New value to set. If `0`, the TextLineItem is removed from the ShoppingList.
   *
   *
   */
  readonly quantity: number
}
export interface ShoppingListChangeTextLineItemsOrderAction {
  readonly action: 'changeTextLineItemsOrder'
  /**
   *	Must contain all existing [TextLineItem](ctp:api:type:TextLineItem) `id`s in the desired new order.
   *
   *
   */
  readonly textLineItemOrder: string[]
}
export interface ShoppingListRemoveLineItemAction {
  readonly action: 'removeLineItem'
  /**
   *	The `id` of the [ShoppingListLineItem](ctp:api:type:ShoppingListLineItem) to update.
   *
   *
   */
  readonly lineItemId: string
  /**
   *	Amount to remove from the `quantity` of the ShoppingListLineItem. If not set, the ShoppingListLineItem is removed from the ShoppingList. If this value matches or exceeds the current `quantity` of the ShoppingListLineItem, the ShoppingListLineItem is removed from the ShoppingList.
   *
   *
   */
  readonly quantity?: number
}
export interface ShoppingListRemoveTextLineItemAction {
  readonly action: 'removeTextLineItem'
  /**
   *	The `id` of the [TextLineItem](ctp:api:type:TextLineItem) to update.
   *
   *
   */
  readonly textLineItemId: string
  /**
   *	Amount to remove from the `quantity` of the TextLineItem. If not set, the TextLineItem is removed from the ShoppingList. If this value matches or exceeds the current `quantity` of the TextLineItem, the TextLineItem is removed from the ShoppingList.
   *
   *
   */
  readonly quantity?: number
}
export interface ShoppingListSetAnonymousIdAction {
  readonly action: 'setAnonymousId'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly anonymousId?: string
}
export interface ShoppingListSetCustomFieldAction {
  readonly action: 'setCustomField'
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Removing a field that does not exist returns an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface ShoppingListSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the ShoppingList with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the ShoppingList.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the ShoppingList.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface ShoppingListSetCustomerAction {
  readonly action: 'setCustomer'
  /**
   *	The [Customer](ctp:api:type:Customer) the ShoppingList should be associated to. If empty, any existing value will be removed.
   *
   *
   */
  readonly customer?: CustomerResourceIdentifier
}
export interface ShoppingListSetDeleteDaysAfterLastModificationAction {
  readonly action: 'setDeleteDaysAfterLastModification'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly deleteDaysAfterLastModification?: number
}
export interface ShoppingListSetDescriptionAction {
  readonly action: 'setDescription'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly description?: LocalizedString
}
export interface ShoppingListSetKeyAction {
  readonly action: 'setKey'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   */
  readonly key?: string
}
export interface ShoppingListSetLineItemCustomFieldAction {
  readonly action: 'setLineItemCustomField'
  /**
   *	The `id` of the [ShoppingListLineItem](ctp:api:type:ShoppingListLineItem) to update.
   *
   *
   */
  readonly lineItemId: string
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Removing a field that does not exist returns an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface ShoppingListSetLineItemCustomTypeAction {
  readonly action: 'setLineItemCustomType'
  /**
   *	The `id` of the [ShoppingListLineItem](ctp:api:type:ShoppingListLineItem) to update.
   *
   *
   */
  readonly lineItemId: string
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the ShoppingListLineItem with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the ShoppingListLineItem.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the ShoppingListLineItem.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface ShoppingListSetSlugAction {
  readonly action: 'setSlug'
  /**
   *	Value to set. If empty, any existing value will be removed. Each slug is unique across a Project, but a ShoppingList can have the same slug for different languages. Must match the pattern `^[A-Za-z0-9_-]{2,256}+$`
   *
   *
   */
  readonly slug?: LocalizedString
}
export interface ShoppingListSetStoreAction {
  readonly action: 'setStore'
  /**
   *	The [Store](ctp:api:type:Store) the ShoppingList should be assigned to. If empty, any existing value will be removed.
   *
   *
   */
  readonly store?: StoreResourceIdentifier
}
export interface ShoppingListSetTextLineItemCustomFieldAction {
  readonly action: 'setTextLineItemCustomField'
  /**
   *	The `id` of the [TextLineItem](ctp:api:type:TextLineItem) to update.
   *
   *
   */
  readonly textLineItemId: string
  /**
   *	Name of the [Custom Field](/../api/projects/custom-fields).
   *
   *
   */
  readonly name: string
  /**
   *	If `value` is absent or `null`, this field will be removed if it exists.
   *	Removing a field that does not exist returns an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *	If `value` is provided, it is set for the field defined by `name`.
   *
   *
   */
  readonly value?: any
}
export interface ShoppingListSetTextLineItemCustomTypeAction {
  readonly action: 'setTextLineItemCustomType'
  /**
   *	The `id` of the [TextLineItem](ctp:api:type:TextLineItem) to update.
   *
   *
   */
  readonly textLineItemId: string
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the TextLineItem with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the TextLineItem.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the TextLineItem.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface ShoppingListSetTextLineItemDescriptionAction {
  readonly action: 'setTextLineItemDescription'
  /**
   *	The `id` of the [TextLineItem](ctp:api:type:TextLineItem) to update.
   *
   *
   */
  readonly textLineItemId: string
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly description?: LocalizedString
}
