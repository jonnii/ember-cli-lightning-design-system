import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders stacked', async function(assert) {
    await render(hbs`{{slds-form}}`);

    assert.ok(findAll('.slds-form.slds-form_stacked').length);
  });

  test('it renders horizontal', async function(assert) {
    await render(hbs`{{slds-form type='horizontal'}}`);

    assert.ok(findAll('.slds-form.slds-form_horizontal').length);
  });
});
