import { module, test } from 'qunit';
import { click } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds navigation bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-navigation-bar}}`);

    assert.dom('.slds-context-bar__app-name').hasText('App Name');
  });

  test('it renders with application name', async function(assert) {
    await render(hbs`{{slds-navigation-bar applicationName='Super App'}}`);

    assert.dom('.slds-context-bar__app-name').hasText('Super App');
  });

  test('it renders with item', async function(assert) {
    await render(hbs`
      {{#slds-navigation-bar as |bar|}}
        {{#bar.item}}bob1{{/bar.item}}
        {{#bar.item}}bob2{{/bar.item}}
        {{#bar.item}}bob3{{/bar.item}}
      {{/slds-navigation-bar}}
    `);

    assert.dom('li.slds-context-bar__item').exists({ count: 3 });
  });

  test('it renders with menu', async function(assert) {
    await render(hbs`
      {{#slds-navigation-bar as |bar|}}
        {{#bar.item}}bob1{{/bar.item}}
        {{#bar.menu text='Components' as |menu|}}
        {{/bar.menu}}
      {{/slds-navigation-bar}}
    `);

    assert.dom('li.slds-context-bar__dropdown-trigger').exists({ count: 1 });
  });

  test('it has clickable button', async function(assert) {
    assert.expect(1);

    this.set('externalAction', message => {
      assert.equal(message, 'pressed');
    });

    await render(hbs`{{slds-navigation-bar clicked=(action externalAction 'pressed')}}`);
    await click('.slds-context-bar__button');
  });
});
