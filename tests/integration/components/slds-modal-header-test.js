import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-modal-header', 'Integration | Component | slds modal header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-modal-header}}`);
  assert.expect(0);
});
