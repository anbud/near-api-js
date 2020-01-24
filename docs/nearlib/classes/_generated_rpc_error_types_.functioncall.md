---
id: "_generated_rpc_error_types_.functioncall"
title: "FunctionCall"
sidebar_label: "FunctionCall"
---

## Hierarchy

  ↳ [ActionError](_generated_rpc_error_types_.actionerror.md)

  ↳ **FunctionCall**

  ↳ [FunctionExecError](_generated_rpc_error_types_.functionexecerror.md)

## Index

### Constructors

* [constructor](_generated_rpc_error_types_.functioncall.md#constructor)

### Properties

* [index](_generated_rpc_error_types_.functioncall.md#index)
* [message](_generated_rpc_error_types_.functioncall.md#message)
* [name](_generated_rpc_error_types_.functioncall.md#name)
* [stack](_generated_rpc_error_types_.functioncall.md#optional-stack)
* [type](_generated_rpc_error_types_.functioncall.md#type)

## Constructors

###  constructor

\+ **new FunctionCall**(`message?`: string, `type?`: string): *[FunctionCall](_generated_rpc_error_types_.functioncall.md)*

*Inherited from [TypedError](_utils_errors_.typederror.md).[constructor](_utils_errors_.typederror.md#constructor)*

*Defined in [src.ts/utils/errors.ts:14](https://github.com/nearprotocol/nearlib/blob/bf1ce09/src.ts/utils/errors.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`message?` | string |
`type?` | string |

**Returns:** *[FunctionCall](_generated_rpc_error_types_.functioncall.md)*

## Properties

###  index

• **index**: *any*

*Inherited from [ActionError](_generated_rpc_error_types_.actionerror.md).[index](_generated_rpc_error_types_.actionerror.md#index)*

*Defined in [src.ts/generated/rpc_error_types.ts:10](https://github.com/nearprotocol/nearlib/blob/bf1ce09/src.ts/generated/rpc_error_types.ts#L10)*

___

###  message

• **message**: *string*

*Inherited from [BorshError](_utils_serialize_.borsherror.md).[message](_utils_serialize_.borsherror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from [BorshError](_utils_serialize_.borsherror.md).[name](_utils_serialize_.borsherror.md#name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [BorshError](_utils_serialize_.borsherror.md).[stack](_utils_serialize_.borsherror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

###  type

• **type**: *string*

*Inherited from [TypedError](_utils_errors_.typederror.md).[type](_utils_errors_.typederror.md#type)*

*Defined in [src.ts/utils/errors.ts:14](https://github.com/nearprotocol/nearlib/blob/bf1ce09/src.ts/utils/errors.ts#L14)*