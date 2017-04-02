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
```

## WIP Components

## Contributing 

### Publishing 

```
npm version <version>
git push origin master --follow-tags
npm publish
```
