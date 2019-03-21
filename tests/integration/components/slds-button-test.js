import { find, findAll } from 'ember-native-dom-helpers';
import { click } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-button}}`);

    assert.dom('button').hasText('Submit');
    assert.ok(findAll('button.slds-button').length);
    var button = find('button');
    assert.notOk(button.hasAttribute('disabled'), 'input was disabled');
    assert.dom('svg').doesNotExist();
  });

  test('it renders with type brand', async function(assert) {
    await render(hbs`{{slds-button type='brand'}}`);

    assert.ok(findAll('button.slds-button.slds-button--brand').length);
  });

  test('it renders disabled', async function(assert) {
    await render(hbs`{{slds-button type='brand' disabled=true}}`);

    assert.dom('button').isDisabled();
  });

  test('it is clickable', async function(assert) {
    assert.expect(1);

    this.set('externalAction', message => {
      assert.equal(message, 'pressed');
    });

    await render(hbs`{{slds-button type='brand' clicked=(action externalAction 'pressed')}}`);
    await click('button');
  });

  test('it renders with icon', async function(assert) {
    await render(hbs`{{slds-button type='brand' icon='user'}}`);
    assert.dom('svg').hasAttribute('class', 'slds-button__icon slds-button__icon--left');
    assert.dom('use').hasAttribute('xlink:href', '/assets/icons/utility-sprite/svg/symbols.svg#user');
  });

  test('it renders with icon (right)', async function(assert) {
    await render(hbs`{{slds-button type='brand' icon='down' iconPosition='right'}}`);
    assert.dom('svg').hasAttribute('class', 'slds-button__icon slds-button__icon--right');
    assert.dom('use').hasAttribute('xlink:href', '/assets/icons/utility-sprite/svg/symbols.svg#down');
  });
});
