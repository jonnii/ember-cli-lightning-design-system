import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-modal-footer', 'Integration | Component | slds modal footer', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-modal-footer}}`);
  assert.expect(0);
});
