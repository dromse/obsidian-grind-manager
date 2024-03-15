[obsidian-sample-plugin](../README.md) / [Exports](../modules.md) / [SettingTab](../modules/SettingTab.md) / default

# Class: default

[SettingTab](../modules/SettingTab.md).default

Class for Setting Tab where user can set default filtering settings for `Grind Manager`

## Hierarchy

- `PluginSettingTab`

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](SettingTab.default.md#constructor)

### Properties

- [app](SettingTab.default.md#app)
- [containerEl](SettingTab.default.md#containerel)
- [plugin](SettingTab.default.md#plugin)

### Methods

- [display](SettingTab.default.md#display)
- [hide](SettingTab.default.md#hide)

## Constructors

### constructor

• **new default**(`app`, `plugin`): [`default`](SettingTab.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `App` |
| `plugin` | [`default`](main.default.md) |

#### Returns

[`default`](SettingTab.default.md)

#### Overrides

PluginSettingTab.constructor

#### Defined in

[src/SettingTab.ts:13](https://github.com/dromse/personal-grind-manager/blob/781019d/src/SettingTab.ts#L13)

## Properties

### app

• **app**: `App`

Reference to the app instance.

#### Inherited from

PluginSettingTab.app

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:3607

___

### containerEl

• **containerEl**: `HTMLElement`

Outermost HTML element on the setting tab.

#### Inherited from

PluginSettingTab.containerEl

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:3613

___

### plugin

• **plugin**: [`default`](main.default.md)

#### Defined in

[src/SettingTab.ts:11](https://github.com/dromse/personal-grind-manager/blob/781019d/src/SettingTab.ts#L11)

## Methods

### display

▸ **display**(): `void`

#### Returns

`void`

#### Overrides

PluginSettingTab.display

#### Defined in

[src/SettingTab.ts:18](https://github.com/dromse/personal-grind-manager/blob/781019d/src/SettingTab.ts#L18)

___

### hide

▸ **hide**(): `any`

Hides the contents of the setting tab.
Any registered components should be unloaded when the view is hidden.
Override this if you need to perform additional cleanup.

#### Returns

`any`

#### Inherited from

PluginSettingTab.hide

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:3627
