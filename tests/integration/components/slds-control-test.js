import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control', 'Integration | Component | slds control', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-control label='awesome label'  }}`);

  assert.expect(0);
});
