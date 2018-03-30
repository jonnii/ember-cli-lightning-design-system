import { findAll, find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-navigation-bar', 'Integration | Component | slds navigation bar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-navigation-bar}}`);

  assert.equal(find('.slds-context-bar__app-name').textContent.trim(), 'App Name');
});

test('it renders with application name', function(assert) {
  this.render(hbs`{{slds-navigation-bar applicationName='Super App'}}`);

  assert.equal(find('.slds-context-bar__app-name').textContent.trim(), 'Super App');
});

test('it renders with item', function(assert) {
  this.render(hbs`
    {{#slds-navigation-bar as |bar|}}
      {{#bar.item}}bob1{{/bar.item}}
      {{#bar.item}}bob2{{/bar.item}}
      {{#bar.item}}bob3{{/bar.item}}
    {{/slds-navigation-bar}}
  `);

  assert.equal(findAll('li.slds-context-bar__item').length, 3);
});

test('it renders with menu', function(assert) {
  this.render(hbs`
    {{#slds-navigation-bar as |bar|}}
      {{#bar.item}}bob1{{/bar.item}}
      {{#bar.menu text='Components' as |menu|}}
      {{/bar.menu}}
    {{/slds-navigation-bar}}
  `);

  assert.equal(findAll('li.slds-context-bar__dropdown-trigger').length, 1);
});
