[obsidian-sample-plugin](../README.md) / [Exports](../modules.md) / hooks/useRewards

# Module: hooks/useRewards

## Table of contents

### Functions

- [useRewards](hooks_useRewards.md#userewards)

## Functions

### useRewards

▸ **useRewards**(): \{ `isRewardsParsed`: [`ParseState`](hooks_types.md#parsestate) ; `rewards`: `Reward`[]  } \| \{ `isRewardsParsed`: `undefined` ; `rewards`: `Reward`[]  }

Parse rewards from rewards.md from settings: title: string | price: number? | allowTodayQuantity: number? | desc: string?

#### Returns

\{ `isRewardsParsed`: [`ParseState`](hooks_types.md#parsestate) ; `rewards`: `Reward`[]  } \| \{ `isRewardsParsed`: `undefined` ; `rewards`: `Reward`[]  }

#### Defined in

[src/hooks/useRewards/index.ts:17](https://github.com/dromse/personal-grind-manager/blob/93620cd/src/hooks/useRewards/index.ts#L17)
