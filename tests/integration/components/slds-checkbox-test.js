import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-checkbox', 'Integration | Component | slds checkbox', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-checkbox}}`);

  assert.expect(0);
});
