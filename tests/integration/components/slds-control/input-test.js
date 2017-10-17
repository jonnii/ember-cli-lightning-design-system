import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control/input', 'Integration | Component | slds control/input', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-control/input}}`);
  assert.ok(this.$('.slds-form-element__control input'));
});

test('it renders with icon (left)', function(assert) {
  this.render(hbs`{{slds-control/input icon='left'}}`);
  assert.ok(this.$('.slds-form-element__control.slds-input-has-icon.slds-input-has-icon_left input'));
});

test('it renders with icon (right)', function(assert) {
  this.render(hbs`{{slds-control/input icon='right'}}`);
  assert.ok(this.$('.slds-form-element__control.slds-input-has-icon.slds-input-has-icon_right input'));
});
