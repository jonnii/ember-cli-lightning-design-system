import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds progress', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-progress}}`);

    assert.dom('.slds-progress-bar .slds-assistive-text').hasText('Progress: 0%');
  });

  test('it renders with progress', async function(assert) {
    await render(hbs`{{slds-progress value=80}}`);

    assert.dom('.slds-progress-bar .slds-assistive-text').hasText('Progress: 80%');
  });
});
