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

 * [Avatar](#avatar)
 * [Badge](#badge)
 * [Button](#button)
 * [Button Group](#button-group)
 * [Button Icon](#button-icon)
 * [Menu](#menu)

#### Avatar

 - [Component Documentation](https://www.lightningdesignsystem.com/components/images/)

```hbs
{{slds-avatar}}

{{#slds-avatar}}
  <img src="/assets/images/avatar1.jpg" alt="default avatar" />
{{/slds-avatar}}

{{#slds-avatar}}
  <img src="/assets/images/avatar1.jpg" alt="default avatar" />
{{/slds-avatar}}

{{#slds-avatar type='circle'}}
  <img src="/assets/images/avatar1.jpg" alt="default avatar" />
{{/slds-avatar}}

{{#slds-avatar size='large'}}
  <img src="/assets/images/avatar1.jpg" alt="default avatar" />
{{/slds-avatar}}

{{slds-avatar name='Bobby Jenkins'}}
{{slds-avatar name='Terrorcorp'}}
{{slds-avatar name='Apache Helicopter' sprite='action' icon='announcement'}}
```

#### Badge

 - [Component Documentation](https://www.lightningdesignsystem.com/components/badges)

```hbs
{{slds-badge text='badger'}}

{{#slds-badge}}
  Badger badger
{{/slds-badge}}
```

#### Button

 - [Component Documentation](https://www.lightningdesignsystem.com/components/buttons)

```hbs
{{slds-button text='click me'}}

{{#slds-button clicked=(action 'doYourThing')}}
  Click Me
{{/slds-button}}

{{slds-button text='click me' type='brand'}}

{{slds-button text='click me' type='brand' icon='user'}}
{{slds-button text='click me' type='brand' icon='down' iconPosition='right'}}
```

#### Button Group

 - [Component Documentation](https://www.lightningdesignsystem.com/components/button-groups)

```hbs
{{#slds-button-group as |group|}}
  {{group.button text='Option1' clicked=(action 'buttonClicked' 'option1')}}
  {{group.button text='Option2' clicked=(action 'buttonClicked' 'option2')}}
  {{group.button text='Option3' disabled=true clicked=(action 'buttonClicked' 'option3')}}
{{/slds-button-group}}

{{#slds-button-group as |group|}}
  {{group.button text='Option1' clicked=(action 'buttonClicked' 'option1')}}
  {{group.button text='Option2' clicked=(action 'buttonClicked' 'option2')}}
  {{group.button text='Option3' disabled=true clicked=(action 'buttonClicked' 'option3')}}
  {{#group.menu as |menu|}}
    {{menu.item text="Overflow 1" clicked=(action 'buttonClicked' 'overflow1')}}
    {{menu.item text="Overflow 3" clicked=(action 'buttonClicked' 'overflow3')}}
    {{menu.item text="Overflow 2" clicked=(action 'buttonClicked' 'overflow2')}}
  {{/group.menu}}
{{/slds-button-group}}
```

#### Button Icon

 - [Component Documentation](https://www.lightningdesignsystem.com/components/button-icons)

```hbs
{{slds-button-icon}}
{{slds-button-icon icon='user'}}
{{slds-button-icon icon='user' type='error'}}
{{slds-button-icon icon='warning' type='error'}}
{{slds-button-icon icon='warning' type='error' disabled=true}}
{{slds-button-icon icon='warning' type='error' size='large'}}
{{slds-button-icon icon='like' border='outline' clicked=(action 'liked')}}
```

#### Menu

 - [Component Documentation](https://www.lightningdesignsystem.com/components/menus)

```hbs
{{#slds-menu isOpen=true as |dropdown|}}
  {{dropdown.header text="Heading"}}
  {{dropdown.item text='Menu Item 1' clicked=(action 'itemSelected' 'item1')}}
  {{dropdown.item text='Menu Item 2' clicked=(action 'itemSelected' 'item1')}}
  {{dropdown.item text='Menu Item 3' clicked=(action 'itemSelected' 'item1')}}
  {{dropdown.separator}}
  {{#dropdown.item clicked=(action 'itemSelected' 'item1')}}
    Menu Item 4
  {{/dropdown.item}}
{{/slds-menu}}

```

## Contributing 

### Publishing 

```
npm version <version>
git push origin master --follow-tags
npm publish
```
