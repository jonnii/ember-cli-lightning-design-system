import { find, findAll } from 'ember-native-dom-helpers';
import { click } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds button icon', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with default icon', async function(assert) {
    await render(hbs`{{slds-button-icon}}`);

    const button = find('button.slds-button.slds-button--icon');

    assert.equal(button.getAttribute('title').trim(), 'question');
    assert.notOk(button.getAttribute('aria-haspopup'));

    assert.dom('svg').hasAttribute('class', 'slds-button__icon');
    assert.dom('svg').hasAttribute('aria-hidden', 'true');
    assert.equal(
      find('use')
        .getAttribute('xlink:href')
        .trim(),
      '/assets/icons/utility-sprite/svg/symbols.svg#question'
    );
    assert.dom('span.slds-assistive-text').hasText('question');
  });

  test('it renders with custom class', async function(assert) {
    await render(hbs`{{slds-button-icon class='slds-pill__remove'}}`);

    assert.ok(findAll('button.slds-pill__remove.slds-button.slds-button--icon').length);
  });

  test('it renders with icon', async function(assert) {
    await render(hbs`{{slds-button-icon icon='user'}}`);

    assert.equal(
      find('button')
        .getAttribute('title')
        .trim(),
      'user'
    );
    assert.equal(
      find('use')
        .getAttribute('xlink:href')
        .trim(),
      '/assets/icons/utility-sprite/svg/symbols.svg#user'
    );
    assert.dom('span.slds-assistive-text').hasText('user');
  });

  test('it renders with aria-popup', async function(assert) {
    await render(hbs`{{slds-button-icon ariaHaspopup='true'}}`);

    assert.dom('button').hasAttribute('aria-haspopup', 'true');
  });

  test('it renders warning', async function(assert) {
    await render(hbs`{{slds-button-icon icon='warning' type='error'}}`);

    assert.ok(findAll('button.slds-button.slds-button--icon-error').length);
  });

  test('it renders disabled', async function(assert) {
    await render(hbs`{{slds-button-icon disabled=true}}`);

    assert.dom('button').isDisabled();
  });

  test('it renders with size large', async function(assert) {
    await render(hbs`{{slds-button-icon size='large'}}`);

    assert.dom('svg').hasAttribute('class', 'slds-button__icon slds-button__icon--large');
  });

  test('it renders with size x-small', async function(assert) {
    await render(hbs`{{slds-button-icon size='x-small'}}`);

    assert.dom('svg').hasAttribute('class', 'slds-button__icon slds-button__icon--x-small');
  });

  test('it renders with container size', async function(assert) {
    await render(hbs`{{slds-button-icon containerSize='small'}}`);

    assert.ok(findAll('button.slds-button--icon-small').length);
  });

  test('it renders with border outline', async function(assert) {
    await render(hbs`{{slds-button-icon border='outline'}}`);

    assert.ok(findAll('button.slds-button.slds-button--icon.slds-button--icon-border').length);
  });

  test('it renders with border filled', async function(assert) {
    await render(hbs`{{slds-button-icon border='filled'}}`);

    assert.ok(findAll('button.slds-button.slds-button--icon.slds-button--icon-border-filled').length);
  });

  test('it renders when selected', async function(assert) {
    await render(hbs`{{slds-button-icon isSelected=true}}`);

    assert.ok(findAll('button.slds-button.slds-button--icon.slds-is-selected').length);
  });

  test('it renders with title', async function(assert) {
    await render(hbs`{{slds-button-icon title='superman'}}`);

    assert.equal(
      find('button')
        .getAttribute('title')
        .trim(),
      'superman'
    );
    assert.dom('span.slds-assistive-text').hasText('superman');
  });

  test('it calls action when clicked', async function(assert) {
    this.set('clicked', message => {
      assert.equal(message, 'icon');
    });

    await render(hbs`{{slds-button-icon clicked=(action clicked 'icon')}}`);

    await click('button');
  });
});
