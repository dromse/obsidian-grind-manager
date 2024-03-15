[obsidian-sample-plugin](../README.md) / [Exports](../modules.md) / [MyView](../modules/MyView.md) / MyView

# Class: MyView

[MyView](../modules/MyView.md).MyView

## Hierarchy

- `ItemView`

  ↳ **`MyView`**

## Table of contents

### Constructors

- [constructor](MyView.MyView.md#constructor)

### Properties

- [app](MyView.MyView.md#app)
- [containerEl](MyView.MyView.md#containerel)
- [contentEl](MyView.MyView.md#contentel)
- [icon](MyView.MyView.md#icon)
- [leaf](MyView.MyView.md#leaf)
- [navigation](MyView.MyView.md#navigation)
- [pluginSettings](MyView.MyView.md#pluginsettings)
- [root](MyView.MyView.md#root)
- [scope](MyView.MyView.md#scope)

### Methods

- [addAction](MyView.MyView.md#addaction)
- [addChild](MyView.MyView.md#addchild)
- [getDisplayText](MyView.MyView.md#getdisplaytext)
- [getEphemeralState](MyView.MyView.md#getephemeralstate)
- [getIcon](MyView.MyView.md#geticon)
- [getState](MyView.MyView.md#getstate)
- [getViewType](MyView.MyView.md#getviewtype)
- [load](MyView.MyView.md#load)
- [onClose](MyView.MyView.md#onclose)
- [onOpen](MyView.MyView.md#onopen)
- [onPaneMenu](MyView.MyView.md#onpanemenu)
- [onResize](MyView.MyView.md#onresize)
- [onload](MyView.MyView.md#onload)
- [onunload](MyView.MyView.md#onunload)
- [register](MyView.MyView.md#register)
- [registerDomEvent](MyView.MyView.md#registerdomevent)
- [registerEvent](MyView.MyView.md#registerevent)
- [registerInterval](MyView.MyView.md#registerinterval)
- [removeChild](MyView.MyView.md#removechild)
- [setEphemeralState](MyView.MyView.md#setephemeralstate)
- [setState](MyView.MyView.md#setstate)
- [unload](MyView.MyView.md#unload)

## Constructors

### constructor

• **new MyView**(`leaf`, `settings`): [`MyView`](MyView.MyView.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaf` | `WorkspaceLeaf` |
| `settings` | [`GrindPluginSettings`](../modules/main.md#grindpluginsettings) |

#### Returns

[`MyView`](MyView.MyView.md)

#### Overrides

ItemView.constructor

#### Defined in

[src/MyView.tsx:13](https://github.com/dromse/personal-grind-manager/blob/781019d/src/MyView.tsx#L13)

## Properties

### app

• **app**: `App`

#### Inherited from

ItemView.app

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:4267

___

### containerEl

• **containerEl**: `HTMLElement`

#### Inherited from

ItemView.containerEl

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:4290

___

### contentEl

• **contentEl**: `HTMLElement`

#### Inherited from

ItemView.contentEl

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:1913

___

### icon

• **icon**: `string`

#### Inherited from

ItemView.icon

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:4271

___

### leaf

• **leaf**: `WorkspaceLeaf`

#### Inherited from

ItemView.leaf

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:4286

___

### navigation

• **navigation**: `boolean`

Whether or not the view is intended for navigation.
If your view is a static view that is not intended to be navigated away, set this to false.
(For example: File explorer, calendar, etc.)
If your view opens a file or can be otherwise navigated, set this to true.
(For example: Markdown editor view, Kanban view, PDF view, etc.)

#### Inherited from

ItemView.navigation

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:4281

___

### pluginSettings

• **pluginSettings**: [`GrindPluginSettings`](../modules/main.md#grindpluginsettings)

#### Defined in

[src/MyView.tsx:11](https://github.com/dromse/personal-grind-manager/blob/781019d/src/MyView.tsx#L11)

___

### root

• **root**: ``null`` \| `Root` = `null`

#### Defined in

[src/MyView.tsx:10](https://github.com/dromse/personal-grind-manager/blob/781019d/src/MyView.tsx#L10)

___

### scope

• **scope**: ``null`` \| `Scope`

Assign an optional scope to your view to register hotkeys for when the view
is in focus.

**`Example`**

```ts
this.scope = new Scope(this.app.scope);
```

**`Default`**

```ts
null
@public
```

#### Inherited from

ItemView.scope

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:4302

## Methods

### addAction

▸ **addAction**(`icon`, `title`, `callback`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `icon` | `string` |
| `title` | `string` |
| `callback` | (`evt`: `MouseEvent`) => `any` |

#### Returns

`HTMLElement`

#### Inherited from

ItemView.addAction

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:1923

___

### addChild

▸ **addChild**\<`T`\>(`component`): `T`

Adds a child component, loading it if this component is loaded

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Component`\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `T` |

#### Returns

`T`

#### Inherited from

ItemView.addChild

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:785

___

### getDisplayText

▸ **getDisplayText**(): `string`

#### Returns

`string`

#### Overrides

ItemView.getDisplayText

#### Defined in

[src/MyView.tsx:22](https://github.com/dromse/personal-grind-manager/blob/781019d/src/MyView.tsx#L22)

___

### getEphemeralState

▸ **getEphemeralState**(): `any`

#### Returns

`any`

#### Inherited from

ItemView.getEphemeralState

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:4331

___

### getIcon

▸ **getIcon**(): `string`

#### Returns

`string`

#### Inherited from

ItemView.getIcon

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:4339

___

### getState

▸ **getState**(): `any`

#### Returns

`any`

#### Inherited from

ItemView.getState

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:4323

___

### getViewType

▸ **getViewType**(): `string`

#### Returns

`string`

#### Overrides

ItemView.getViewType

#### Defined in

[src/MyView.tsx:18](https://github.com/dromse/personal-grind-manager/blob/781019d/src/MyView.tsx#L18)

___

### load

▸ **load**(): `void`

Load this component and its children

#### Returns

`void`

#### Inherited from

ItemView.load

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:763

___

### onClose

▸ **onClose**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

ItemView.onClose

#### Defined in

[src/MyView.tsx:40](https://github.com/dromse/personal-grind-manager/blob/781019d/src/MyView.tsx#L40)

___

### onOpen

▸ **onOpen**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

ItemView.onOpen

#### Defined in

[src/MyView.tsx:26](https://github.com/dromse/personal-grind-manager/blob/781019d/src/MyView.tsx#L26)

___

### onPaneMenu

▸ **onPaneMenu**(`menu`, `source`): `void`

Populates the pane menu.

(Replaces the previously removed `onHeaderMenu` and `onMoreOptionsMenu`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `menu` | `Menu` |
| `source` | `string` |

#### Returns

`void`

#### Inherited from

ItemView.onPaneMenu

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:4355

___

### onResize

▸ **onResize**(): `void`

Called when the size of this view is changed.

#### Returns

`void`

#### Inherited from

ItemView.onResize

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:4344

___

### onload

▸ **onload**(): `void`

Override this to load your component

#### Returns

`void`

#### Inherited from

ItemView.onload

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:769

___

### onunload

▸ **onunload**(): `void`

Override this to unload your component

#### Returns

`void`

#### Inherited from

ItemView.onunload

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:780

___

### register

▸ **register**(`cb`): `void`

Registers a callback to be called when unloading

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => `any` |

#### Returns

`void`

#### Inherited from

ItemView.register

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:795

___

### registerDomEvent

▸ **registerDomEvent**\<`K`\>(`el`, `type`, `callback`, `options?`): `void`

Registers an DOM event to be detached when unloading

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `WindowEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `Window` |
| `type` | `K` |
| `callback` | (`this`: `HTMLElement`, `ev`: `WindowEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

ItemView.registerDomEvent

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:805

▸ **registerDomEvent**\<`K`\>(`el`, `type`, `callback`, `options?`): `void`

Registers an DOM event to be detached when unloading

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `Document` |
| `type` | `K` |
| `callback` | (`this`: `HTMLElement`, `ev`: `DocumentEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

ItemView.registerDomEvent

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:810

▸ **registerDomEvent**\<`K`\>(`el`, `type`, `callback`, `options?`): `void`

Registers an DOM event to be detached when unloading

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `type` | `K` |
| `callback` | (`this`: `HTMLElement`, `ev`: `HTMLElementEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

ItemView.registerDomEvent

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:815

___

### registerEvent

▸ **registerEvent**(`eventRef`): `void`

Registers an event to be detached when unloading

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventRef` | `EventRef` |

#### Returns

`void`

#### Inherited from

ItemView.registerEvent

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:800

___

### registerInterval

▸ **registerInterval**(`id`): `number`

Registers an interval (from setInterval) to be cancelled when unloading
Use window.setInterval instead of setInterval to avoid TypeScript confusing between NodeJS vs Browser API

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`number`

#### Inherited from

ItemView.registerInterval

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:822

___

### removeChild

▸ **removeChild**\<`T`\>(`component`): `T`

Removes a child component, unloading it

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Component`\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `T` |

#### Returns

`T`

#### Inherited from

ItemView.removeChild

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:790

___

### setEphemeralState

▸ **setEphemeralState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |

#### Returns

`void`

#### Inherited from

ItemView.setEphemeralState

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:4335

___

### setState

▸ **setState**(`state`, `result`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |
| `result` | `ViewStateResult` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

ItemView.setState

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:4327

___

### unload

▸ **unload**(): `void`

Unload this component and its children

#### Returns

`void`

#### Inherited from

ItemView.unload

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:774
