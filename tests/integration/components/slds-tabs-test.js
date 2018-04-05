import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds tabs', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
    {{#slds-tabs as |tabs|}}
      {{#tabs.nav as |nav|}}
        {{nav.item}}
      {{/tabs.nav}}
      {{tabs.content}}
    {{/slds-tabs}}
    `);

    assert.ok(findAll('div.slds-tabs_default').length, 'has container');
    assert.ok(findAll('div.slds-tabs_default ul.slds-tabs_default__nav').length, 'has nav');
    assert.ok(findAll('div.slds-tabs_default ul.slds-tabs_default__nav[role=tablist]').length, 'has role tablist');
  });
});
