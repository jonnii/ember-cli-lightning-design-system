import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control/lookup', 'Integration | Component | slds control/lookup', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-control/lookup}}`);
  assert.expect(0);
});
