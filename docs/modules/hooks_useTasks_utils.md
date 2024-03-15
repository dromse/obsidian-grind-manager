[obsidian-sample-plugin](../README.md) / [Exports](../modules.md) / hooks/useTasks/utils

# Module: hooks/useTasks/utils

## Table of contents

### Functions

- [cleanBody](hooks_useTasks_utils.md#cleanbody)
- [findByRegex](hooks_useTasks_utils.md#findbyregex)

## Functions

### cleanBody

▸ **cleanBody**(`regex`, `task`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex` | `RegExp` |
| `task` | [`Task`](hooks_useTasks_types.md#task) |

#### Returns

`string`

#### Defined in

[src/hooks/useTasks/utils.ts:3](https://github.com/dromse/personal-grind-manager/blob/781019d/src/hooks/useTasks/utils.ts#L3)

___

### findByRegex

▸ **findByRegex**(`regex`, `task`): ``null`` \| `RegExpMatchArray`

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex` | `RegExp` |
| `task` | [`Task`](hooks_useTasks_types.md#task) |

#### Returns

``null`` \| `RegExpMatchArray`

#### Defined in

[src/hooks/useTasks/utils.ts:11](https://github.com/dromse/personal-grind-manager/blob/781019d/src/hooks/useTasks/utils.ts#L11)
