import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { findAll } from 'ember-native-dom-helpers';

module('Integration | Component | slds-modal-container', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-modal-container}}`);
    assert.equal(findAll('.slds-modal[role=dialog]').length, 1);
  });
});
