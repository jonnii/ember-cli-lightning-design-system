# ember-cli-lightning-design-system

[![Build Status](https://travis-ci.org/jonnii/ember-cli-lightning-design-system.svg?branch=master)](https://travis-ci.org/jonnii/ember-cli-lightning-design-system) [![Ember Observer Score](https://emberobserver.com/badges/ember-cli-lightning-design-system.svg)](https://emberobserver.com/addons/ember-cli-lightning-design-system)

An `ember-cli` addon for using the [salesforce lightning design system](https://www.lightningdesignsystem.com)
in your ember applications.

## Installation

#### Install the add-on

```
ember install ember-cli-lightning-design-system
```

#### Import the design system

```scss
// in your app.scss
@import 'ember-cli-lightning-design-system/scss/index.scss';
```

## Supported Components

You can use this add-on without any of the supplied components, however if you would like
to save yourself some time the following components are supported.

 * [Badge](#badge)
 * [Button](#button)
 * [Button Group](#button-group)
 * [Button Icon](#button-icon)
 * [Menu](#menu)

#### Badge

 - [Component Documentation](https://www.lightningdesignsystem.com/components/badges)

```hbs
{{lds-badge text='badger'}}

{{#lds-badge}}
  Badger badger
{{/lds-badge}}
```

#### Button

 - [Component Documentation](https://www.lightningdesignsystem.com/components/buttons)

```hbs
{{lds-button text='click me'}}

{{#lds-button clicked=(action 'doYourThing')}}
  Click Me
{{/lds-button}}

{{lds-button text='click me' type='brand'}}

{{lds-button text='click me' type='brand' icon='user'}}
{{lds-button text='click me' type='brand' icon='down' iconPosition='right'}}
```

#### Button Group

 - [Component Documentation](https://www.lightningdesignsystem.com/components/button-groups)

```hbs
{{#lds-button-group as |group|}}
  {{group.button text='Option1' clicked=(action 'buttonClicked' 'option1')}}
  {{group.button text='Option2' clicked=(action 'buttonClicked' 'option2')}}
  {{group.button text='Option3' disabled=true clicked=(action 'buttonClicked' 'option3')}}
{{/lds-button-group}}

{{#lds-button-group as |group|}}
  {{group.button text='Option1' clicked=(action 'buttonClicked' 'option1')}}
  {{group.button text='Option2' clicked=(action 'buttonClicked' 'option2')}}
  {{group.button text='Option3' disabled=true clicked=(action 'buttonClicked' 'option3')}}
  {{#group.menu as |menu|}}
    {{menu.item text="Overflow 1" clicked=(action 'buttonClicked' 'overflow1')}}
    {{menu.item text="Overflow 3" clicked=(action 'buttonClicked' 'overflow3')}}
    {{menu.item text="Overflow 2" clicked=(action 'buttonClicked' 'overflow2')}}
  {{/group.menu}}
{{/lds-button-group}}
```

#### Button Icon

 - [Component Documentation](https://www.lightningdesignsystem.com/components/button-icons)

```hbs
{{lds-button-icon}}
{{lds-button-icon icon='user'}}
{{lds-button-icon icon='user' type='error'}}
{{lds-button-icon icon='warning' type='error'}}
{{lds-button-icon icon='warning' type='error' disabled=true}}
{{lds-button-icon icon='warning' type='error' size='large'}}
{{lds-button-icon icon='like' border='outline' clicked=(action 'liked')}}
```

#### Menu

 - [Component Documentation](https://www.lightningdesignsystem.com/components/menus)

```hbs
{{#lds-menu isOpen=true as |menu|}}
  {{menu.heading text="Heading"}}
  {{menu.item text='Menu Item 1' clicked=(action 'itemSelected' 'item1')}}
  {{menu.item text='Menu Item 2' clicked=(action 'itemSelected' 'item1')}}
  {{menu.item text='Menu Item 3' clicked=(action 'itemSelected' 'item1')}}
  {{menu.separator}}
  {{#menu.item clicked=(action 'itemSelected' 'item1')}}
    Menu Item 4
  {{/menu.item}}
{{/lds-menu}}

```

## Contributing 

### Publishing 

```
npm version <version>
git push origin master --follow-tags
npm publish
```
