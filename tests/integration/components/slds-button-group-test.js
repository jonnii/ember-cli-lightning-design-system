import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds button group', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with button group options', async function(assert) {
    await render(hbs`
      {{#slds-button-group as |group|}}
        {{group.button text='Option1'}}
        {{group.button text='Option2'}}
        {{group.button text='Option3'}}
      {{/slds-button-group}}
    `);

    assert.equal(findAll('button').length, 3);
  });

  test('it renders with menu', async function(assert) {
    await render(hbs`
      {{#slds-button-group as |group|}}
        {{group.button text='Option1'}}
        {{group.button text='Option2'}}
        {{group.button text='Option3'}}
        {{#group.menu as |menu|}}
          {{#menu.dropdown as |dropdown|}}
            {{dropdown.item text='option1'}}
          {{/menu.dropdown}}
        {{/group.menu}}
      {{/slds-button-group}}
    `);

    assert.equal(findAll('.slds-dropdown-trigger').length, 1);
    assert.ok(findAll('.slds-button--last.slds-dropdown-trigger.slds-dropdown-trigger--click').length);
    assert.ok(findAll('.slds-dropdown.slds-dropdown--right').length);
  });
});
