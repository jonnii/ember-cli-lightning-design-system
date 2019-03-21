import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds alert', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with text', async function(assert) {
    await render(hbs`{{slds-alert text='sorry not sorry'}}`);

    assert.dom('h2').hasText('sorry not sorry');
    assert.dom('.slds-notify').hasAttribute('role', 'alert');
    assert.ok(findAll('.slds-theme_info').length);
    assert.dom('.slds-notify > .slds-assistive-text').hasText('info');
  });

  test('it renders with block', async function(assert) {
    await render(hbs`{{slds-alert text='sorry not sorry'}}`);

    assert.dom('h2').hasText('sorry not sorry');
  });

  test('it renders with theme error', async function(assert) {
    await render(hbs`{{slds-alert theme='error'}}`);

    assert.ok(findAll('.slds-theme_error').length);
  });

  test('it renders with close button', async function(assert) {
    this.set('onClosed', message => {
      assert.equal(message, 'pressed');
    });

    await render(hbs`{{slds-alert closed=onClosed}}`);

    assert.ok(findAll('.slds-notify__close').length);
  });
});
