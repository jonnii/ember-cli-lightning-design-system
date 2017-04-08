import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-navigation-bar-item', 'Integration | Component | slds navigation bar item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-navigation-bar-item}}`);
  
  assert.equal(this.$('.slds-context-bar__label-action').text().trim(), 'Menu Item');
});

test('it renders with text', function(assert) {
  this.render(hbs`{{slds-navigation-bar-item text='Events'}}`);
  
  assert.equal(this.$('.slds-context-bar__label-action').text().trim(), 'Events');
  assert.equal(this.$('.slds-context-bar__label-action').attr('title'), 'Events');
});

test('it renders with text and title', function(assert) {
  this.render(hbs`{{slds-navigation-bar-item text='Events' title='another title'}}`);
  
  assert.equal(this.$('.slds-context-bar__label-action').attr('title'), 'another title');
});

test('it renders with block', function(assert) {
  this.render(hbs`
    {{#slds-navigation-bar-item}}
      Amazing Item
    {{/slds-navigation-bar-item}}
  `);
  
  assert.equal(this.$('.slds-context-bar__label-action').text().trim(), 'Amazing Item');
  assert.notOk(this.$('.slds-context-bar__label-action').attr('title'));
});

test('it renders with block and title', function(assert) {
  this.render(hbs`
    {{#slds-navigation-bar-item title='my title'}}
      Amazing Item
    {{/slds-navigation-bar-item}}
  `);
  
  assert.equal(this.$('.slds-context-bar__label-action').text().trim(), 'Amazing Item');
  assert.equal(this.$('.slds-context-bar__label-action').attr('title'), 'my title');
});
