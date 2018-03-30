import { findAll, find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control/checkbox-toggle', 'Integration | Component | slds control/checkbox toggle', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-control/checkbox-toggle}}`);

  assert.ok(findAll('label.slds-checkbox_toggle.slds-grid').length);
  assert.equal(find('.slds-checkbox_on').textContent.trim(), 'Enabled');

  assert.equal(find('.slds-checkbox_off').textContent.trim(), 'Disabled');
});

test('it renders with custom option labels', function(assert) {
  this.render(hbs`{{slds-control/checkbox-toggle enabledText='Yes' disabledText='No'}}`);

  assert.equal(find('.slds-checkbox_on').textContent.trim(), 'Yes');

  assert.equal(find('.slds-checkbox_off').textContent.trim(), 'No');
});

test('it renders with disabled', function(assert) {
  this.render(hbs`{{slds-control/checkbox-toggle isDisabled=true}}`);

  assert.ok(this.$('input:disabled'));
});
