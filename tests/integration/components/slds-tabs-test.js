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
    assert.ok(findAll('div.slds-tabs_default ul.slds-tabs_default__nav li.slds-tabs_default__item').length);
    assert.ok(
      findAll('div.slds-tabs_default ul.slds-tabs_default__nav li.slds-tabs_default__item a.slds-tabs_default__link')
        .length
    );
    assert.ok(findAll('div.slds-tabs_default div.slds-tabs_default__content').length);
  });

  test('it renders scoped', async function(assert) {
    await render(hbs`
    {{#slds-tabs isScoped=true as |tabs|}}
      {{#tabs.nav as |nav|}}
        {{nav.item}}
      {{/tabs.nav}}
      {{tabs.content}}
    {{/slds-tabs}}
    `);

    assert.ok(findAll('div.slds-tabs_scoped').length, 'has container');
    assert.ok(findAll('div.slds-tabs_scoped ul.slds-tabs_scoped__nav').length, 'has nav');
    assert.ok(findAll('div.slds-tabs_scoped ul.slds-tabs_scoped__nav[role=tablist]').length, 'has role tablist');
    assert.ok(
      findAll('div.slds-tabs_scoped ul.slds-tabs_scoped__nav li.slds-tabs_scoped__item').length,
      'has nav item'
    );
    assert.ok(
      findAll('div.slds-tabs_scoped ul.slds-tabs_scoped__nav li.slds-tabs_scoped__item a.slds-tabs_scoped__link')
        .length,
      'has scoped link'
    );
    assert.ok(findAll('div.slds-tabs_scoped div.slds-tabs_scoped__content').length, 'has scoped content');
  });
});
