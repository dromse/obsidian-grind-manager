[obsidian-sample-plugin](../README.md) / [Exports](../modules.md) / hooks

# Module: hooks

## Table of contents

### References

- [useHistory](hooks.md#usehistory)
- [useRewards](hooks.md#userewards)
- [useTasks](hooks.md#usetasks)

### Functions

- [useApp](hooks.md#useapp)
- [useSettings](hooks.md#usesettings)

## References

### useHistory

Renames and re-exports [default](hooks_useHistory.md#default)

___

### useRewards

Renames and re-exports [default](hooks_useRewards.md#default)

___

### useTasks

Renames and re-exports [default](hooks_useTasks.md#default)

## Functions

### useApp

▸ **useApp**(): `undefined` \| `App`

Access `app` from different components through `useContext`

#### Returns

`undefined` \| `App`

#### Defined in

[src/hooks/index.ts:10](https://github.com/dromse/personal-grind-manager/blob/1abcd9e/src/hooks/index.ts#L10)

___

### useSettings

▸ **useSettings**(): `undefined` \| [`GrindPluginSettings`](main.md#grindpluginsettings)

Access `settings` from different components through `useContext`

#### Returns

`undefined` \| [`GrindPluginSettings`](main.md#grindpluginsettings)

#### Defined in

[src/hooks/index.ts:15](https://github.com/dromse/personal-grind-manager/blob/1abcd9e/src/hooks/index.ts#L15)
