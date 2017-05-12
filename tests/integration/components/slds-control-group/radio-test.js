import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control-group/radio', 'Integration | Component | slds control group/radio', {
  integration: true
});

test('it renders with label', function(assert) {
  this.render(hbs`{{slds-control-group/radio label='awesome sauce'}}`);

  assert.equal(this.$('.slds-form-element__label').text(), 'awesome sauce');
});

test('it renders with correct label', function(assert) {
  this.render(hbs`{{slds-control-group/radio label='awesome sauce'}}`);

  assert.equal(this.$('input').attr('id'), this.$('label').attr('for'));
});
