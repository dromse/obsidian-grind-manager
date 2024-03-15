[obsidian-sample-plugin](../README.md) / [Exports](../modules.md) / hooks

# Module: hooks

## Table of contents

### References

- [useRewards](hooks.md#userewards)
- [useTasks](hooks.md#usetasks)

### Functions

- [useApp](hooks.md#useapp)
- [useSettings](hooks.md#usesettings)

## References

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

[src/hooks/index.ts:9](https://github.com/dromse/personal-grind-manager/blob/781019d/src/hooks/index.ts#L9)

___

### useSettings

▸ **useSettings**(): `undefined` \| [`GrindPluginSettings`](main.md#grindpluginsettings)

Access `settings` from different components through `useContext`

#### Returns

`undefined` \| [`GrindPluginSettings`](main.md#grindpluginsettings)

#### Defined in

[src/hooks/index.ts:14](https://github.com/dromse/personal-grind-manager/blob/781019d/src/hooks/index.ts#L14)
