import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-modal-content', 'Integration | Component | slds modal content', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-modal-content}}`);
  assert.expect(0);
});
