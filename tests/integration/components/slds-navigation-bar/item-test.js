import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds navigation bar/item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-navigation-bar/item}}`);

    assert.equal(find('.slds-context-bar__label-action').textContent.trim(), 'Menu Item');
  });

  test('it renders with text', async function(assert) {
    await render(hbs`{{slds-navigation-bar/item text='Events'}}`);

    assert.equal(find('.slds-context-bar__label-action').textContent.trim(), 'Events');
    assert.equal(find('.slds-context-bar__label-action').getAttribute('title'), 'Events');
  });

  test('it renders with text and title', async function(assert) {
    await render(hbs`{{slds-navigation-bar/item text='Events' title='another title'}}`);

    assert.equal(find('.slds-context-bar__label-action').getAttribute('title'), 'another title');
  });

  test('it renders with block', async function(assert) {
    await render(hbs`
      {{#slds-navigation-bar/item}}
        Amazing Item
      {{/slds-navigation-bar/item}}
    `);

    assert.equal(find('.slds-context-bar__label-action').textContent.trim(), 'Amazing Item');
    assert.notOk(find('.slds-context-bar__label-action').getAttribute('title'));
  });

  test('it renders with block and title', async function(assert) {
    await render(hbs`
      {{#slds-navigation-bar/item title='my title'}}
        Amazing Item
      {{/slds-navigation-bar/item}}
    `);

    assert.equal(find('.slds-context-bar__label-action').textContent.trim(), 'Amazing Item');
    assert.equal(find('.slds-context-bar__label-action').getAttribute('title'), 'my title');
  });
});
