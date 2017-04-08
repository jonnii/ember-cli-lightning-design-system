import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-radio', 'Integration | Component | slds radio', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-radio}}`);

  assert.expect(0);
});
