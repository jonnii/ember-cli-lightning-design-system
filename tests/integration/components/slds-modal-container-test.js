import { findAll } from 'ember-native-dom-helpers';

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-modal-container', 'Integration | Component | slds modal container', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-modal-container}}`);

  assert.equal(findAll('.slds-modal[role=dialog]').length, 1);

  // assert.expect(0);
});
