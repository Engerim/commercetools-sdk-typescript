/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  BaseResource,
  CentPrecisionMoney,
  CreatedBy,
  LastModifiedBy,
  LocalizedString,
  _Money,
} from './common'
import { CustomerReference, CustomerResourceIdentifier } from './customer'
import { StateReference, StateResourceIdentifier } from './state'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface Payment extends BaseResource {
  /**
   *	Unique identifier of the Payment.
   *
   */
  readonly id: string
  /**
   *	Current version of the Payment.
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the Payment was initially created.
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the Payment was last updated.
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/../api/client-logging#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/../api/client-logging#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	Reference to a [Customer](ctp:api:type:Customer) associated with the Payment.
   *
   *
   */
  readonly customer?: CustomerReference
  /**
   *	[Anonymous session](ctp:api:type:AnonymousSession) associated with the Payment.
   *
   *
   */
  readonly anonymousId?: string
  /**
   *	Identifier used by the payment service that processes the Payment (for example, a PSP).
   *	The combination of `interfaceId` and the `paymentInterface` field on [PaymentMethodInfo](ctp:api:type:PaymentMethodInfo) must be unique.
   *
   */
  readonly interfaceId?: string
  /**
   *	Money value the Payment intends to receive from the customer.
   *	The value typically matches the [Cart](ctp:api:type:Cart) or [Order](ctp:api:type:Order) gross total.
   *
   */
  readonly amountPlanned: CentPrecisionMoney
  /**
   *	Information regarding the payment interface (for example, a PSP), and the specific payment method used.
   *
   *
   */
  readonly paymentMethodInfo: PaymentMethodInfo
  /**
   *	Current status of the Payment.
   *
   *
   */
  readonly paymentStatus: PaymentStatus
  /**
   *	Financial transactions of the Payment. Each Transaction has a [TransactionType](ctp:api:type:TransactionType) and a [TransactionState](ctp:api:type:TransactionState).
   *
   *
   */
  readonly transactions: Transaction[]
  /**
   *	Represents information exchange with the payment service, for example, a PSP. An interaction may be a request sent, or a response or notification received from the payment service.
   *
   */
  readonly interfaceInteractions: CustomFields[]
  /**
   *	Custom Fields for the Payment.
   *
   *
   */
  readonly custom?: CustomFields
  /**
   *	User-defined unique identifier of the Payment.
   *
   */
  readonly key?: string
}
export interface PaymentDraft {
  /**
   *	Reference to a [Customer](ctp:api:type:Customer) associated with the Payment.
   *
   */
  readonly customer?: CustomerResourceIdentifier
  /**
   *	[Anonymous session](ctp:api:type:AnonymousSession) associated with the Payment.
   *
   *
   */
  readonly anonymousId?: string
  /**
   *	Identifier used by the payment service that processes the Payment (for example, a PSP).
   *	The combination of `interfaceId` and the `paymentInterface` field on [PaymentMethodInfo](ctp:api:type:PaymentMethodInfo) must be unique.
   *	Once set, it cannot be changed.
   *
   */
  readonly interfaceId?: string
  /**
   *	Money value the Payment intends to receive from the customer.
   *	The value typically matches the [Cart](ctp:api:type:Cart) or [Order](ctp:api:type:Order) gross total.
   *
   */
  readonly amountPlanned: _Money
  /**
   *	Information regarding the payment interface (for example, a PSP), and the specific payment method used.
   *
   *
   */
  readonly paymentMethodInfo?: PaymentMethodInfo
  /**
   *	Current status of the Payment.
   *
   *
   */
  readonly paymentStatus?: PaymentStatusDraft
  /**
   *	Financial transactions of the Payment. Each Transaction has a [TransactionType](ctp:api:type:TransactionType) and a [TransactionState](ctp:api:type:TransactionState).
   *
   */
  readonly transactions?: TransactionDraft[]
  /**
   *	Represents information exchange with the payment service, for example, a PSP. An interaction may be a request sent, or a response or notification received from the payment service.
   *
   */
  readonly interfaceInteractions?: CustomFieldsDraft[]
  /**
   *	Custom Fields for the Payment.
   *
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *	User-defined unique identifier for the Payment.
   *
   */
  readonly key?: string
}
export interface PaymentMethodInfo {
  /**
   *	Payment service that processes the Payment (for example, a PSP).
   *	Once set, it cannot be changed.
   *	The combination of `paymentInterface` and the `interfaceId` of a [Payment](ctp:api:type:Payment) must be unique.
   *
   */
  readonly paymentInterface?: string
  /**
   *	Payment method used, for example, credit card, or cash advance.
   *
   */
  readonly method?: string
  /**
   *	Localizable name of the payment method.
   *
   */
  readonly name?: LocalizedString
}
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with `results` containing an array of [Payment](ctp:api:type:Payment).
 *
 */
export interface PaymentPagedQueryResponse {
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
   *	[Payments](ctp:api:type:Payment) matching the query.
   *
   *
   */
  readonly results: Payment[]
}
/**
 *	[Reference](ctp:api:type:Reference) to a [Payment](ctp:api:type:Payment).
 *
 */
export interface PaymentReference {
  readonly typeId: 'payment'
  /**
   *	Unique identifier of the referenced [Payment](ctp:api:type:Payment).
   *
   *
   */
  readonly id: string
  /**
   *	Contains the representation of the expanded Payment. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for Payments.
   *
   *
   */
  readonly obj?: Payment
}
/**
 *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) of a [Payment](ctp:api:type:Payment).
 *
 */
export interface PaymentResourceIdentifier {
  readonly typeId: 'payment'
  /**
   *	Unique identifier of the referenced [Payment](ctp:api:type:Payment). Either `id` or `key` is required.
   *
   *
   */
  readonly id?: string
  /**
   *	User-defined unique identifier of the referenced [Payment](ctp:api:type:Payment). Either `id` or `key` is required.
   *
   *
   */
  readonly key?: string
}
export interface PaymentStatus {
  /**
   *	External reference that identifies the current status of the Payment.
   *
   */
  readonly interfaceCode?: string
  /**
   *	Text describing the current status of the Payment.
   *
   */
  readonly interfaceText?: string
  /**
   *	[Reference](ctp:api:type:Reference) to a [State](ctp:api:type:State).
   *
   *
   */
  readonly state?: StateReference
}
export interface PaymentStatusDraft {
  /**
   *	External reference that identifies the current status of the Payment.
   *
   */
  readonly interfaceCode?: string
  /**
   *	Text describing the current status of the Payment.
   *
   */
  readonly interfaceText?: string
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [State](ctp:api:type:State).
   *
   *
   */
  readonly state?: StateResourceIdentifier
}
export interface PaymentUpdate {
  /**
   *	Expected version of the Payment on which the changes should be applied. If the expected version does not match the actual version, a [409 Conflict](/../api/errors#409-conflict) error will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the Payment.
   *
   *
   */
  readonly actions: PaymentUpdateAction[]
}
export type PaymentUpdateAction =
  | PaymentAddInterfaceInteractionAction
  | PaymentAddTransactionAction
  | PaymentChangeAmountPlannedAction
  | PaymentChangeTransactionInteractionIdAction
  | PaymentChangeTransactionStateAction
  | PaymentChangeTransactionTimestampAction
  | PaymentSetAnonymousIdAction
  | PaymentSetCustomFieldAction
  | PaymentSetCustomTypeAction
  | PaymentSetCustomerAction
  | PaymentSetInterfaceIdAction
  | PaymentSetKeyAction
  | PaymentSetMethodInfoInterfaceAction
  | PaymentSetMethodInfoMethodAction
  | PaymentSetMethodInfoNameAction
  | PaymentSetStatusInterfaceCodeAction
  | PaymentSetStatusInterfaceTextAction
  | PaymentSetTransactionCustomFieldAction
  | PaymentSetTransactionCustomTypeAction
  | PaymentTransitionStateAction
/**
 *	Represents a financial transaction typically created as a result of a notification from the payment service.
 *
 */
export interface Transaction {
  /**
   *	Unique identifier of the Transaction.
   *
   */
  readonly id: string
  /**
   *	Date and time (UTC) the Transaction took place.
   *
   */
  readonly timestamp?: string
  /**
   *	Type of the Transaction. For example, `Authorization`.
   *
   */
  readonly type: TransactionType
  /**
   *	Money value of the Transaction.
   *
   *
   */
  readonly amount: CentPrecisionMoney
  /**
   *	Identifier used by the interface that manages the Transaction (usually the PSP).
   *	If a matching interaction was logged in the `interfaceInteractions` array, the corresponding interaction can be found with this ID.
   *
   */
  readonly interactionId?: string
  /**
   *	State of the Transaction.
   *
   */
  readonly state: TransactionState
  /**
   *	Custom Fields defined for the Transaction.
   *
   */
  readonly custom?: CustomFields
}
export interface TransactionDraft {
  /**
   *	Date and time (UTC) the Transaction took place.
   *
   */
  readonly timestamp?: string
  /**
   *	Type of the Transaction.
   *
   */
  readonly type: TransactionType
  /**
   *	Money value for the Transaction.
   *
   *
   */
  readonly amount: _Money
  /**
   *	Identifier used by the payment service that manages the Transaction.
   *	Can be used to correlate the Transaction to an interface interaction.
   *
   */
  readonly interactionId?: string
  /**
   *	State of the Transaction.
   *
   */
  readonly state?: TransactionState
  /**
   *	Custom Fields of the Transaction.
   *
   */
  readonly custom?: CustomFieldsDraft
}
/**
 *	Transactions can be in one of the following States:
 *
 */
export type TransactionState =
  | 'Failure'
  | 'Initial'
  | 'Pending'
  | 'Success'
  | string
export type TransactionType =
  | 'Authorization'
  | 'CancelAuthorization'
  | 'Charge'
  | 'Chargeback'
  | 'Refund'
  | string
/**
 *	Adding a Payment interaction generates the [PaymentInteractionAdded](ctp:api:type:PaymentInteractionAddedMessage) Message.
 *
 */
export interface PaymentAddInterfaceInteractionAction {
  readonly action: 'addInterfaceInteraction'
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) of a [Type](ctp:api:type:Type).
   *
   *
   */
  readonly type: TypeResourceIdentifier
  /**
   *	[Custom Fields](/../api/projects/custom-fields) as per [FieldDefinitions](ctp:api:type:FieldDefinition) of the [Type](ctp:api:type:Type).
   *
   *
   */
  readonly fields?: FieldContainer
}
/**
 *	Adding a Transaction to a Payment generates the [PaymentTransactionAdded](ctp:api:type:PaymentTransactionAddedMessage) Message.
 *
 */
export interface PaymentAddTransactionAction {
  readonly action: 'addTransaction'
  /**
   *	Value to append to the `transactions` array.
   *
   *
   */
  readonly transaction: TransactionDraft
}
/**
 *	Can be used to update the Payment if a customer changes the [Cart](ctp:api:type:Cart), or adds or removes a [CartDiscount](ctp:api:type:CartDiscount) during checkout.
 *
 */
export interface PaymentChangeAmountPlannedAction {
  readonly action: 'changeAmountPlanned'
  /**
   *	New value to set.
   *
   *
   */
  readonly amount: _Money
}
export interface PaymentChangeTransactionInteractionIdAction {
  readonly action: 'changeTransactionInteractionId'
  /**
   *	Unique identifier of the [Transaction](ctp:api:type:Transaction).
   *
   *
   */
  readonly transactionId: string
  /**
   *	New value to set.
   *
   *
   */
  readonly interactionId: string
}
/**
 *	Changing the [TransactionState](ctp:api:type:TransactionState) generates the [PaymentTransactionStateChanged](ctp:api:type:PaymentTransactionStateChangedMessage) Message.
 *
 */
export interface PaymentChangeTransactionStateAction {
  readonly action: 'changeTransactionState'
  /**
   *	Unique identifier of the [Transaction](ctp:api:type:Transaction).
   *
   *
   */
  readonly transactionId: string
  /**
   *	New TransactionState.
   *
   *
   */
  readonly state: TransactionState
}
export interface PaymentChangeTransactionTimestampAction {
  readonly action: 'changeTransactionTimestamp'
  /**
   *	Unique identifier of the [Transaction](ctp:api:type:Transaction).
   *
   *
   */
  readonly transactionId: string
  /**
   *	Timestamp of the Transaction as reported by the payment service.
   *
   *
   */
  readonly timestamp: string
}
export interface PaymentSetAnonymousIdAction {
  readonly action: 'setAnonymousId'
  /**
   *	Value to set.
   *	If empty, any existing value will be removed.
   *
   *
   */
  readonly anonymousId?: string
}
export interface PaymentSetCustomFieldAction {
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
export interface PaymentSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the Payment with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the Payment.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the Payment.
   *
   *
   */
  readonly fields?: FieldContainer
}
export interface PaymentSetCustomerAction {
  readonly action: 'setCustomer'
  /**
   *	Value to set.
   *	If empty, any existing reference is removed.
   *
   *
   */
  readonly customer?: CustomerResourceIdentifier
}
export interface PaymentSetInterfaceIdAction {
  readonly action: 'setInterfaceId'
  /**
   *	Value to set.
   *	Once set, the `interfaceId` cannot be changed.
   *
   *
   */
  readonly interfaceId: string
}
export interface PaymentSetKeyAction {
  readonly action: 'setKey'
  /**
   *	Value to set.
   *	If `key` is absent or `null`, the existing key, if any, will be removed.
   *
   */
  readonly key?: string
}
export interface PaymentSetMethodInfoInterfaceAction {
  readonly action: 'setMethodInfoInterface'
  /**
   *	Value to set.
   *	Once set, the `paymentInterface` of the `paymentMethodInfo` cannot be changed.
   *
   *
   */
  readonly interface: string
}
export interface PaymentSetMethodInfoMethodAction {
  readonly action: 'setMethodInfoMethod'
  /**
   *	Value to set.
   *	If empty, any existing value will be removed.
   *
   *
   */
  readonly method?: string
}
export interface PaymentSetMethodInfoNameAction {
  readonly action: 'setMethodInfoName'
  /**
   *	Value to set.
   *	If empty, any existing value will be removed.
   *
   *
   */
  readonly name?: LocalizedString
}
/**
 *	Produces the [PaymentStatusInterfaceCodeSet](ctp:api:type:PaymentStatusInterfaceCodeSetMessage) Message.
 */
export interface PaymentSetStatusInterfaceCodeAction {
  readonly action: 'setStatusInterfaceCode'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly interfaceCode?: string
}
export interface PaymentSetStatusInterfaceTextAction {
  readonly action: 'setStatusInterfaceText'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly interfaceText: string
}
export interface PaymentSetTransactionCustomFieldAction {
  readonly action: 'setTransactionCustomField'
  /**
   *	Unique identifier of the [Transaction](ctp:api:type:Transaction).
   *
   *
   */
  readonly transactionId: string
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
export interface PaymentSetTransactionCustomTypeAction {
  readonly action: 'setTransactionCustomType'
  /**
   *	Unique identifier of the [Transaction](ctp:api:type:Transaction). If the specified `transactionId` does not exist, the request will fail with an [InvalidOperation](ctp:api:type:InvalidOperationError) error.
   *
   *
   */
  readonly transactionId: string
  /**
   *	Defines the [Type](ctp:api:type:Type) that extends the Transaction with [Custom Fields](/../api/projects/custom-fields).
   *	If absent, any existing Type and Custom Fields are removed from the Transaction.
   *
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *	Sets the [Custom Fields](/../api/projects/custom-fields) fields for the Transaction.
   *
   *
   */
  readonly fields?: FieldContainer
}
/**
 *	If the Payment has no current [State](ctp:api:type:State), `initial` must be `true` for the new State.
 *	If the existing State has transitions set, the new State must be a valid transition.
 *	If the existing State has no transitions set, no validations are performed when transitioning to the new State.
 *
 *	Transitioning the State of a Payment produces the [PaymentStatusStateTransition](ctp:api:type:PaymentStatusStateTransitionMessage) Message.
 *
 */
export interface PaymentTransitionStateAction {
  readonly action: 'transitionState'
  /**
   *	[ResourceIdentifier](ctp:api:type:ResourceIdentifier) to a [State](ctp:api:type:State).
   *
   *
   */
  readonly state: StateResourceIdentifier
  /**
   *	Set to `true` to skip validations when transitioning to the new State.
   *
   */
  readonly force?: boolean
}
