import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control-group', 'Integration | Component | slds control group', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-control-group}}`);
  assert.expect(0);
});
