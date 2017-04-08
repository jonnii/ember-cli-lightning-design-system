import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-input', 'Integration | Component | slds input', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-input}}`);

  assert.equal(this.$('label').attr('for'), this.$('input').attr('id'));
});
