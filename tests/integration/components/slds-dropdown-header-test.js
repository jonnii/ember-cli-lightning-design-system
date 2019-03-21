import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds dropdown header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-dropdown-header}}`);

    assert.dom('.slds-dropdown__header').hasText('');

    await render(hbs`
      {{#slds-dropdown-header}}
        template block text
      {{/slds-dropdown-header}}
    `);

    assert.dom('.slds-dropdown__header').hasText('template block text');
  });
});
