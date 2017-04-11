import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-modal-container', 'Integration | Component | slds modal container', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-modal-container}}`);
  assert.expect(0);
});
