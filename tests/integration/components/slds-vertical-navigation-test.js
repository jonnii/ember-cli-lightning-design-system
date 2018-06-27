import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds vertical navigation', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-vertical-navigation}}`);

    assert.ok(findAll('nav.slds-nav-vertical').length);
  });

  test('it renders (shaded)', async function(assert) {
    await render(hbs`{{slds-vertical-navigation isShaded=true}}`);

    assert.ok(findAll('nav.slds-nav-vertical.slds-nav-vertical_shade').length);
  });

  test('it renders (compact)', async function(assert) {
    await render(hbs`{{slds-vertical-navigation isCompact=true}}`);

    assert.ok(findAll('nav.slds-nav-vertical.slds-nav-vertical_compact').length);
  });

  test('it renders with section and actions', async function(assert) {
    await render(hbs`
    {{#slds-vertical-navigation as |nav|}}
      {{#nav.section title="Reports" as |section|}}
        {{#section.action}}Recent{{/section.action}}
        {{#section.action}}Created by Me{{/section.action}}
      {{/nav.section}}

      {{#nav.section title="Folders" as |section|}}
        {{#section.action}}All Folders{{/section.action}}
      {{/nav.section}}
    {{/slds-vertical-navigation}}`);

    assert.ok(findAll('.slds-nav-vertical').length);
  });
});
