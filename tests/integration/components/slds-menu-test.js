import { find, findAll } from 'ember-native-dom-helpers';
import { click } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds menu', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-menu}}`);

    assert.equal(findAll('button.slds-button:disabled').length, 0);
    assert.equal(findAll('div.slds-dropdown-trigger.slds-is-open').length, 0);
    assert.equal(find('div.slds-dropdown-trigger').getAttribute('aria-expanded'), 'false');
    assert.ok(findAll('.slds-dropdown.slds-dropdown--left').length);
    assert.equal(find('.slds-button').getAttribute('aria-haspopup'), 'true');
  });

  test('it renders with position', async function(assert) {
    await render(hbs`{{slds-menu position='bottomRight'}}`);

    assert.ok(findAll('.slds-dropdown.slds-dropdown--bottom.slds-dropdown--right').length);
  });

  test('it renders disabled', async function(assert) {
    await render(hbs`{{slds-menu disabled=true}}`);

    assert.equal(findAll('button.slds-button:disabled').length, 1);
  });

  test('it renders when open', async function(assert) {
    await render(hbs`{{slds-menu isOpen=true}}`);

    assert.equal(findAll('div.slds-dropdown-trigger.slds-is-open').length, 1);
    assert.equal(find('div.slds-dropdown-trigger').getAttribute('aria-expanded'), 'true');
  });

  test('it renders with items', async function(assert) {
    await render(hbs`
      {{#slds-menu as |menu|}}
        {{#menu.dropdown as |dropdown|}}
          {{dropdown.item text="Overflow 1"}}
          {{dropdown.item text="Overflow 2"}}
          {{dropdown.item text="Overflow 3"}}
        {{/menu.dropdown}}
      {{/slds-menu}}
    `);

    assert.equal(findAll('li.slds-dropdown__item').length, 3);
  });

  test('it opens when clicked', async function(assert) {
    await render(hbs`{{slds-menu}}`);

    await click('button');

    assert.equal(findAll('div.slds-dropdown-trigger.slds-is-open').length, 1);
  });

  test('it closes when clicked', async function(assert) {
    await render(hbs`{{slds-menu isOpen=true}}`);

    await click('button');

    assert.equal(findAll('div.slds-dropdown-trigger.slds-is-open').length, 0);
  });

  test('it closes when item clicked', async function(assert) {
    this.set('clicked', message => {
      assert.equal(message, 'overflow1');
    });

    await render(hbs`
      {{#slds-menu as |menu|}}
        {{menu.trigger}}
        {{#menu.dropdown as |dropdown|}}
          {{dropdown.item text="Overflow 1" clicked=(action clicked 'overflow1')}}
        {{/menu.dropdown}}
      {{/slds-menu}}
    `);

    await click('button');

    assert.equal(findAll('div.slds-dropdown-trigger.slds-is-open').length, 1);
    await click('li.slds-dropdown__item a');
    assert.equal(findAll('div.slds-dropdown-trigger.slds-is-open').length, 0);
  });
});
