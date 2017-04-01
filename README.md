# ember-cli-lightning-design-system

[![Build Status](https://travis-ci.org/jonnii/ember-cli-lightning-design-system.svg?branch=master)](https://travis-ci.org/jonnii/ember-cli-lightning-design-system)

[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-lightning-design-system.svg)](https://emberobserver.com/addons/ember-cli-lightning-design-system)

An `ember-cli` addon for using the [salesforce lightning design system](https://www.lightningdesignsystem.com)
in your ember applications.

### Installation

```
ember install ember-cli-lightning-design-system
```

### Requirements

Currently the only pre-processor that the lightning design system supports is sass, so this 
add-on requires `ember-cli-sass`. 

## Supported Components

* [Button](#button)

#### Button

```
{{lds-button text='click me'}}

{{#lds-button}}
  Click Me
{{/lds-button}}
```