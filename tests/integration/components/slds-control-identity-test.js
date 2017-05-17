import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control-identity', 'Integration | Component | slds control identity', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-control-identity}}`);

  assert.expect(0);
});
