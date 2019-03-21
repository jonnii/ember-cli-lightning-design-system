import { findAll, find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds control/checkbox toggle', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-control/checkbox-toggle}}`);

    assert.ok(findAll('label.slds-checkbox_toggle.slds-grid').length);
    assert.dom('.slds-checkbox_on').hasText('Enabled');

    assert.dom('.slds-checkbox_off').hasText('Disabled');
  });

  test('it renders with custom option labels', async function(assert) {
    await render(hbs`{{slds-control/checkbox-toggle enabledText='Yes' disabledText='No'}}`);

    assert.dom('.slds-checkbox_on').hasText('Yes');

    assert.dom('.slds-checkbox_off').hasText('No');
  });

  test('it renders with disabled', async function(assert) {
    await render(hbs`{{slds-control/checkbox-toggle isDisabled=true}}`);

    var input = find('input');
    assert.ok(input, 'could not find input');
    assert.ok(input.hasAttribute('disabled'), 'input was not disabled');
  });
});
