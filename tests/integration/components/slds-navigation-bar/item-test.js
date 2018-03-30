import { find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-navigation-bar/item', 'Integration | Component | slds navigation bar/item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-navigation-bar/item}}`);

  assert.equal(find('.slds-context-bar__label-action').textContent.trim(), 'Menu Item');
});

test('it renders with text', function(assert) {
  this.render(hbs`{{slds-navigation-bar/item text='Events'}}`);

  assert.equal(find('.slds-context-bar__label-action').textContent.trim(), 'Events');
  assert.equal(find('.slds-context-bar__label-action').getAttribute('title'), 'Events');
});

test('it renders with text and title', function(assert) {
  this.render(hbs`{{slds-navigation-bar/item text='Events' title='another title'}}`);

  assert.equal(find('.slds-context-bar__label-action').getAttribute('title'), 'another title');
});

test('it renders with block', function(assert) {
  this.render(hbs`
    {{#slds-navigation-bar/item}}
      Amazing Item
    {{/slds-navigation-bar/item}}
  `);

  assert.equal(find('.slds-context-bar__label-action').textContent.trim(), 'Amazing Item');
  assert.notOk(find('.slds-context-bar__label-action').getAttribute('title'));
});

test('it renders with block and title', function(assert) {
  this.render(hbs`
    {{#slds-navigation-bar/item title='my title'}}
      Amazing Item
    {{/slds-navigation-bar/item}}
  `);

  assert.equal(find('.slds-context-bar__label-action').textContent.trim(), 'Amazing Item');
  assert.equal(find('.slds-context-bar__label-action').getAttribute('title'), 'my title');
});
