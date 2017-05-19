import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-spinner', 'Integration | Component | slds spinner', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-spinner}}`);
  assert.ok(this.$('.slds-spinner.slds-spinner_medium').length);
});

test('it renders with size', function(assert) {
  this.render(hbs`{{slds-spinner size='large'}}`);
  assert.ok(this.$('.slds-spinner.slds-spinner_large').length);
});

test('it renders with color', function(assert) {
  this.render(hbs`{{slds-spinner color='brand'}}`);
  assert.ok(this.$('.slds-spinner.slds-spinner_brand').length);
});
