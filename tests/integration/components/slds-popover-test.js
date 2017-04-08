import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-popover', 'Integration | Component | slds popover', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);
  this.render(hbs`{{slds-popover}}`);
});
