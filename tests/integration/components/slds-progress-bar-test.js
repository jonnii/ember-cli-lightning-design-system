import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds progress bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-progress-bar}}`);

    assert.dom('.slds-assistive-text').hasText('Progress: 0%');
    assert.dom('.slds-progress-bar').hasAttribute('aria-valuemin', '0');
    assert.dom('.slds-progress-bar').hasAttribute('aria-valuemax', '100');
    assert.dom('.slds-progress-bar').hasAttribute('aria-valuenow', '0');
    assert.dom('.slds-progress-bar').hasAttribute('role', 'progressbar');
  });

  test('it renders with value', async function(assert) {
    await render(hbs`{{slds-progress-bar value=80}}`);

    assert.dom('.slds-assistive-text').hasText('Progress: 80%');
    assert.dom('.slds-assistive-text').hasText('Progress: 80%');
    assert.dom('.slds-progress-bar').hasAttribute('aria-valuenow', '80');
  });

  test('it renders with custom min max', async function(assert) {
    await render(hbs`{{slds-progress-bar minValue=20 maxValue=400}}`);

    assert.dom('.slds-progress-bar').hasAttribute('aria-valuemin', '20');
    assert.dom('.slds-progress-bar').hasAttribute('aria-valuemax', '400');
  });

  test('it renders with height', async function(assert) {
    await render(hbs`{{slds-progress-bar height='x-small'}}`);

    assert.ok(findAll('.slds-progress-bar.slds-progress-bar_x-small').length);
  });

  test('it renders with border', async function(assert) {
    await render(hbs`{{slds-progress-bar border='circular'}}`);

    assert.ok(findAll('.slds-progress-bar.slds-progress-bar_circular').length);
  });

  test('it renders with success', async function(assert) {
    await render(hbs`{{slds-progress-bar isSuccess=true}}`);

    assert.ok(findAll('.slds-progress-bar .slds-progress-bar__value_success').length);
  });
});
