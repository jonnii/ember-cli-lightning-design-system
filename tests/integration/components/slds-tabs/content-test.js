import { findAll, find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds tabs/content', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-tabs/content}}`);

    assert.ok(findAll('div.slds-tabs_default__content').length, 'has content');
    assert.ok(findAll('div.slds-tabs_default__content.slds-hide').length, 'is hidden');
    assert.ok(findAll('div.slds-tabs_default__content[role=tabpanel]').length, 'has role');

    await render(hbs`
      {{#slds-tabs/content}}
        template block text
      {{/slds-tabs/content}}
    `);

    assert.equal(find('.slds-tabs_default__content').textContent.trim(), 'template block text');
  });

  test('it active', async function(assert) {
    await render(hbs`{{slds-tabs/content isActive=true}}`);

    assert.ok(findAll('div.slds-tabs_default__content.slds-show').length, 'is shown');
  });
});
