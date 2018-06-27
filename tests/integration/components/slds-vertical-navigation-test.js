import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds vertical navigation', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-vertical-navigation}}`);

    assert.ok(findAll('.slds-grid.slds-grid--vertical.slds-navigation-list--vertical').length);
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

    assert.ok(findAll('.slds-grid.slds-grid--vertical.slds-navigation-list--vertical').length);
  });

  test('it renders inverse', async function(assert) {
    await render(hbs`{{slds-vertical-navigation type='inverse'}}`);

    assert.ok(
      findAll('.slds-grid.slds-grid--vertical.slds-navigation-list--vertical.slds-navigation-list--vertical-inverse')
        .length
    );
  });
});
