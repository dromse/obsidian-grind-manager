[obsidian-sample-plugin](../README.md) / [Exports](../modules.md) / [main](../modules/main.md) / default

# Class: default

[main](../modules/main.md).default

## Hierarchy

- `Plugin`

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](main.default.md#constructor)

### Properties

- [app](main.default.md#app)
- [manifest](main.default.md#manifest)
- [settings](main.default.md#settings)

### Methods

- [activateView](main.default.md#activateview)
- [addChild](main.default.md#addchild)
- [addCommand](main.default.md#addcommand)
- [addRibbonIcon](main.default.md#addribbonicon)
- [addSettingTab](main.default.md#addsettingtab)
- [addStatusBarItem](main.default.md#addstatusbaritem)
- [load](main.default.md#load)
- [loadData](main.default.md#loaddata)
- [loadSettings](main.default.md#loadsettings)
- [onExternalSettingsChange](main.default.md#onexternalsettingschange)
- [onload](main.default.md#onload)
- [onunload](main.default.md#onunload)
- [register](main.default.md#register)
- [registerDomEvent](main.default.md#registerdomevent)
- [registerEditorExtension](main.default.md#registereditorextension)
- [registerEditorSuggest](main.default.md#registereditorsuggest)
- [registerEvent](main.default.md#registerevent)
- [registerExtensions](main.default.md#registerextensions)
- [registerHoverLinkSource](main.default.md#registerhoverlinksource)
- [registerInterval](main.default.md#registerinterval)
- [registerMarkdownCodeBlockProcessor](main.default.md#registermarkdowncodeblockprocessor)
- [registerMarkdownPostProcessor](main.default.md#registermarkdownpostprocessor)
- [registerObsidianProtocolHandler](main.default.md#registerobsidianprotocolhandler)
- [registerView](main.default.md#registerview)
- [removeChild](main.default.md#removechild)
- [saveData](main.default.md#savedata)
- [saveSettings](main.default.md#savesettings)
- [unload](main.default.md#unload)

## Constructors

### constructor

• **new default**(`app`, `manifest`): [`default`](main.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `App` |
| `manifest` | `PluginManifest` |

#### Returns

[`default`](main.default.md)

#### Inherited from

Plugin.constructor

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:2956

## Properties

### app

• **app**: `App`

#### Inherited from

Plugin.app

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:2948

___

### manifest

• **manifest**: `PluginManifest`

#### Inherited from

Plugin.manifest

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:2952

___

### settings

• **settings**: [`GrindPluginSettings`](../modules/main.md#grindpluginsettings)

#### Defined in

[src/main.ts:23](https://github.com/dromse/personal-grind-manager/blob/781019d/src/main.ts#L23)

## Methods

### activateView

▸ **activateView**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/main.ts:37](https://github.com/dromse/personal-grind-manager/blob/781019d/src/main.ts#L37)

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

Plugin.addChild

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:785

___

### addCommand

▸ **addCommand**(`command`): `Command`

Register a command globally.
Registered commands will be available from the @{link https://help.obsidian.md/Plugins/Command+palette Command pallete}.
The command id and name will be automatically prefixed with this plugin's id and name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `Command` |

#### Returns

`Command`

#### Inherited from

Plugin.addCommand

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:2979

___

### addRibbonIcon

▸ **addRibbonIcon**(`icon`, `title`, `callback`): `HTMLElement`

Adds a ribbon icon to the left bar.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | `string` | The icon name to be used. See addIcon |
| `title` | `string` | The title to be displayed in the tooltip. |
| `callback` | (`evt`: `MouseEvent`) => `any` | The `click` callback. |

#### Returns

`HTMLElement`

#### Inherited from

Plugin.addRibbonIcon

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:2964

___

### addSettingTab

▸ **addSettingTab**(`settingTab`): `void`

Register a settings tab, which allows users to change settings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `settingTab` | `PluginSettingTab` |

#### Returns

`void`

**`See`**

[https://docs.obsidian.md/Plugins/User+interface/Settings#Register+a+settings+tab](https://docs.obsidian.md/Plugins/User+interface/Settings#Register+a+settings+tab)

#### Inherited from

Plugin.addSettingTab

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:2985

___

### addStatusBarItem

▸ **addStatusBarItem**(): `HTMLElement`

Adds a status bar item to the bottom of the app.
Not available on mobile.

#### Returns

`HTMLElement`

HTMLElement - element to modify.

**`See`**

[https://docs.obsidian.md/Plugins/User+interface/Status+bar](https://docs.obsidian.md/Plugins/User+interface/Status+bar)

#### Inherited from

Plugin.addStatusBarItem

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:2972

___

### load

▸ **load**(): `void`

Load this component and its children

#### Returns

`void`

#### Inherited from

Plugin.load

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:763

___

### loadData

▸ **loadData**(): `Promise`\<`any`\>

Load settings data from disk.
Data is stored in `data.json` in the plugin folder.

#### Returns

`Promise`\<`any`\>

**`See`**

[https://docs.obsidian.md/Plugins/User+interface/Settings](https://docs.obsidian.md/Plugins/User+interface/Settings)

#### Inherited from

Plugin.loadData

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:3041

___

### loadSettings

▸ **loadSettings**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/main.ts:57](https://github.com/dromse/personal-grind-manager/blob/781019d/src/main.ts#L57)

___

### onExternalSettingsChange

▸ **onExternalSettingsChange**(): `any`

Called when the `data.json` file is modified on disk externally from Obsidian.
This usually means that a Sync service or external program has modified
the plugin settings.

Implement this method to reload plugin settings when they have changed externally.

#### Returns

`any`

#### Inherited from

Plugin.onExternalSettingsChange

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:3059

___

### onload

▸ **onload**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

Plugin.onload

#### Defined in

[src/main.ts:25](https://github.com/dromse/personal-grind-manager/blob/781019d/src/main.ts#L25)

___

### onunload

▸ **onunload**(): `void`

#### Returns

`void`

#### Overrides

Plugin.onunload

#### Defined in

[src/main.ts:55](https://github.com/dromse/personal-grind-manager/blob/781019d/src/main.ts#L55)

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

Plugin.register

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

Plugin.registerDomEvent

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

Plugin.registerDomEvent

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

Plugin.registerDomEvent

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:815

___

### registerEditorExtension

▸ **registerEditorExtension**(`extension`): `void`

Registers a CodeMirror 6 extension.
To reconfigure cm6 extensions for a plugin on the fly, an array should be passed in, and modified dynamically.
Once this array is modified, calling Workspace.updateOptions will apply the changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extension` | `Extension` | must be a CodeMirror 6 `Extension`, or an array of Extensions. |

#### Returns

`void`

#### Inherited from

Plugin.registerEditorExtension

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:3021

___

### registerEditorSuggest

▸ **registerEditorSuggest**(`editorSuggest`): `void`

Register an EditorSuggest which can provide live suggestions while the user is typing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `editorSuggest` | `EditorSuggest`\<`any`\> |

#### Returns

`void`

#### Inherited from

Plugin.registerEditorSuggest

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:3034

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

Plugin.registerEvent

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:800

___

### registerExtensions

▸ **registerExtensions**(`extensions`, `viewType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensions` | `string`[] |
| `viewType` | `string` |

#### Returns

`void`

#### Inherited from

Plugin.registerExtensions

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:2998

___

### registerHoverLinkSource

▸ **registerHoverLinkSource**(`id`, `info`): `void`

Registers a view with the 'Page preview' core plugin as an emitter of the 'hover-link' on the event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `info` | `HoverLinkSource` |

#### Returns

`void`

#### Inherited from

Plugin.registerHoverLinkSource

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:2994

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

Plugin.registerInterval

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:822

___

### registerMarkdownCodeBlockProcessor

▸ **registerMarkdownCodeBlockProcessor**(`language`, `handler`, `sortOrder?`): `MarkdownPostProcessor`

Register a special post processor that handles fenced code given a language and a handler.
This special post processor takes care of removing the <pre><code> and create a <div> that
will be passed to the handler, and is expected to be filled with custom elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | `string` |
| `handler` | (`source`: `string`, `el`: `HTMLElement`, `ctx`: `MarkdownPostProcessorContext`) => `void` \| `Promise`\<`any`\> |
| `sortOrder?` | `number` |

#### Returns

`MarkdownPostProcessor`

**`See`**

[https://docs.obsidian.md/Plugins/Editor/Markdown+post+processing#Post-process+Markdown+code+blocks](https://docs.obsidian.md/Plugins/Editor/Markdown+post+processing#Post-process+Markdown+code+blocks)

#### Inherited from

Plugin.registerMarkdownCodeBlockProcessor

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:3012

___

### registerMarkdownPostProcessor

▸ **registerMarkdownPostProcessor**(`postProcessor`, `sortOrder?`): `MarkdownPostProcessor`

Registers a post processor, to change how the document looks in reading mode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `postProcessor` | `MarkdownPostProcessor` |
| `sortOrder?` | `number` |

#### Returns

`MarkdownPostProcessor`

**`See`**

[https://docs.obsidian.md/Plugins/Editor/Markdown+post+processing](https://docs.obsidian.md/Plugins/Editor/Markdown+post+processing)

#### Inherited from

Plugin.registerMarkdownPostProcessor

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:3004

___

### registerObsidianProtocolHandler

▸ **registerObsidianProtocolHandler**(`action`, `handler`): `void`

Register a handler for obsidian:// URLs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `string` | the action string. For example, "open" corresponds to `obsidian://open`. |
| `handler` | `ObsidianProtocolHandler` | the callback to trigger. A key-value pair that is decoded from the query will be passed in. For example, `obsidian://open?key=value` would generate `{"action": "open", "key": "value"}`. |

#### Returns

`void`

#### Inherited from

Plugin.registerObsidianProtocolHandler

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:3029

___

### registerView

▸ **registerView**(`type`, `viewCreator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `viewCreator` | `ViewCreator` |

#### Returns

`void`

#### Inherited from

Plugin.registerView

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:2989

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

Plugin.removeChild

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:790

___

### saveData

▸ **saveData**(`data`): `Promise`\<`void`\>

Write settings data to disk.
Data is stored in `data.json` in the plugin folder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`\<`void`\>

**`See`**

[https://docs.obsidian.md/Plugins/User+interface/Settings](https://docs.obsidian.md/Plugins/User+interface/Settings)

#### Inherited from

Plugin.saveData

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:3048

___

### saveSettings

▸ **saveSettings**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/main.ts:61](https://github.com/dromse/personal-grind-manager/blob/781019d/src/main.ts#L61)

___

### unload

▸ **unload**(): `void`

Unload this component and its children

#### Returns

`void`

#### Inherited from

Plugin.unload

#### Defined in

node_modules/.pnpm/obsidian@1.5.7-1_@codemirror+state@6.4.1_@codemirror+view@6.25.0/node_modules/obsidian/obsidian.d.ts:774
