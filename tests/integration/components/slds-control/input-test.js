import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control/input', 'Integration | Component | slds control/input', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-control/input}}`);

  assert.expect(0);
});
