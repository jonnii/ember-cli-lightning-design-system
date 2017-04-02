import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-navigation-bar-action', 'Integration | Component | lds navigation bar action', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-navigation-bar-action}}`);
  assert.equal(this.$('.slds-context-bar__label-action').text().trim(), 'Menu Item');
});

test('it renders with text', function(assert) {
  this.render(hbs`{{lds-navigation-bar-action text='Events'}}`);
  assert.equal(this.$('.slds-context-bar__label-action').text().trim(), 'Events');
});
