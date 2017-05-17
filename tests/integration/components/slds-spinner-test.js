import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-spinner', 'Integration | Component | slds spinner', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-spinner}}`);
  assert.expect(0);
});
