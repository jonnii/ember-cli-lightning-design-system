import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds tabs/nav', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-tabs/nav}}`);

    assert.dom('.slds-tabs_default__nav').hasText('');

    // Template block usage:
    await render(hbs`
      {{#slds-tabs/nav}}
        template block text
      {{/slds-tabs/nav}}
    `);

    assert.dom('.slds-tabs_default__nav').hasText('template block text');
  });
});
