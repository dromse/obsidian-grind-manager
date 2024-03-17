[obsidian-sample-plugin](../README.md) / [Exports](../modules.md) / hooks/useHistory

# Module: hooks/useHistory

## Table of contents

### Functions

- [default](hooks_useHistory.md#default)

## Functions

### default

▸ **default**(): `Object`

Hook for interacting with rewards list

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addHistoryRow` | (`__namedParameters`: \{ `change`: `number` ; `date?`: `Date` ; `title`: `string`  }) => `Promise`\<`void`\> |
| `balance` | `number` |
| `history` | `HistoryRow`[] |
| `isHistoryParsed` | [`ParseState`](hooks_types.md#parsestate) |

#### Defined in

[src/hooks/useHistory/index.ts:14](https://github.com/dromse/personal-grind-manager/blob/1abcd9e/src/hooks/useHistory/index.ts#L14)
