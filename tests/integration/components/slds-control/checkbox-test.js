import { find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control/checkbox', 'Integration | Component | slds control/checkbox', {
  integration: true
});

test('it renders with label', function(assert) {
  this.render(hbs`{{slds-control/checkbox label='awesome sauce'}}`);

  assert.equal(find('.slds-form-element__label').textContent, 'awesome sauce');
});

test('it renders with correct label', function(assert) {
  this.render(hbs`{{slds-control/checkbox label='awesome sauce'}}`);

  assert.equal(find('input').id, find('label').getAttribute('for'));
});

test('it renders disabled', function(assert) {
  this.render(hbs`{{slds-control/checkbox isDisabled=true label='awesome sauce'}}`);

  assert.ok(this.$('input:disabled'));
});
