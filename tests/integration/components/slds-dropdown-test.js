import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds dropdown', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with nubbin', async function(assert) {
    await render(hbs`{{slds-dropdown nubbin='topRight'}}`);

    assert.ok(findAll('.slds-dropdown.slds-nubbin--top-right').length);
  });
});
