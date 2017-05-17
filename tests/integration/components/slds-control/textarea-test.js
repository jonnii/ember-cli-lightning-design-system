import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control/textarea', 'Integration | Component | slds control/textarea', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-control/textarea}}`);
  assert.expect(0);
});
