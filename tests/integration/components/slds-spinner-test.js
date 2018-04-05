import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds spinner', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-spinner}}`);
    assert.ok(findAll('.slds-spinner.slds-spinner_medium').length);
  });

  test('it renders with size', async function(assert) {
    await render(hbs`{{slds-spinner size='large'}}`);
    assert.ok(findAll('.slds-spinner.slds-spinner_large').length);
  });

  test('it renders with color', async function(assert) {
    await render(hbs`{{slds-spinner color='brand'}}`);
    assert.ok(findAll('.slds-spinner.slds-spinner_brand').length);
  });
});
