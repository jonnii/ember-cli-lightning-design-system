import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds dropdown header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-dropdown-header}}`);

    assert.equal(find('.slds-dropdown__header').textContent.trim(), '');

    await render(hbs`
      {{#slds-dropdown-header}}
        template block text
      {{/slds-dropdown-header}}
    `);

    assert.equal(find('.slds-dropdown__header').textContent.trim(), 'template block text');
  });
});
