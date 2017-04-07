import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-navigation-bar', 'Integration | Component | lds navigation bar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-navigation-bar}}`);

  assert.equal(this.$('.slds-context-bar__app-name').text().trim(), 'App Name');
});

test('it renders with application name', function(assert) {
  this.render(hbs`{{lds-navigation-bar applicationName='Super App'}}`);

  assert.equal(this.$('.slds-context-bar__app-name').text().trim(), 'Super App');
});

test('it renders with item', function(assert) {
  this.render(hbs`
    {{#lds-navigation-bar as |bar|}}
      {{#bar.item}}bob1{{/bar.item}}
      {{#bar.item}}bob2{{/bar.item}}
      {{#bar.item}}bob3{{/bar.item}}
    {{/lds-navigation-bar}}
  `);

  assert.equal(this.$('li.slds-context-bar__item').length, 3);
});

test('it renders with menu', function(assert) {
  this.render(hbs`
    {{#lds-navigation-bar as |bar|}}
      {{#bar.item}}bob1{{/bar.item}}
      {{#bar.menu text='Components' as |menu|}}
      {{/bar.menu}}
    {{/lds-navigation-bar}}
  `);

  assert.equal(this.$('li.slds-context-bar__dropdown-trigger').length, 1);
});
