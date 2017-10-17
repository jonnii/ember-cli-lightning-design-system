import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control/combobox', 'Integration | Component | slds control/combobox', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-control/combobox}}`);
  assert.expect(0);
});
