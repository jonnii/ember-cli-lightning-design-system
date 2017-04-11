import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-modal', 'Integration | Component | slds modal', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-modal}}`);
  assert.expect(0);
});
