[obsidian-sample-plugin](../README.md) / [Exports](../modules.md) / hooks/useTasks/types

# Module: hooks/useTasks/types

## Table of contents

### Type Aliases

- [Middleware](hooks_useTasks_types.md#middleware)
- [Task](hooks_useTasks_types.md#task)

## Type Aliases

### Middleware

Ƭ **Middleware**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `parse` | (`task`: [`Task`](hooks_useTasks_types.md#task)) => [`Task`](hooks_useTasks_types.md#task) |
| `stringify` | (`task`: [`Task`](hooks_useTasks_types.md#task)) => `string` |

#### Defined in

[src/hooks/useTasks/types.ts:23](https://github.com/dromse/personal-grind-manager/blob/93620cd/src/hooks/useTasks/types.ts#L23)

___

### Task

Ƭ **Task**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bind?` | `string` |
| `body` | `string` |
| `completed?` | `boolean` |
| `completedAt?` | `string` |
| `counter?` | \{ `current`: `number` ; `goal`: `number`  } |
| `counter.current` | `number` |
| `counter.goal` | `number` |
| `difficulty?` | [`Difficulty`](hooks_useTasks_middleware_difficulty.md#difficulty) |
| `every?` | `string` |
| `indention?` | `number` |
| `lineContent` | `string` |
| `lineNumber` | `number` |
| `status?` | [`Status`](hooks_useTasks_middleware_status.md#status) |
| `tFile` | `TFile` |
| `timer?` | \{ `current`: `string` ; `goal`: `string`  } |
| `timer.current` | `string` |
| `timer.goal` | `string` |

#### Defined in

[src/hooks/useTasks/types.ts:5](https://github.com/dromse/personal-grind-manager/blob/93620cd/src/hooks/useTasks/types.ts#L5)
