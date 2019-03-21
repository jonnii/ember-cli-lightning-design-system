import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds toast', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-toast}}`);

    assert.dom('.slds-notify').hasAttribute('role', 'alert');
    assert.ok(findAll('.slds-theme_info').length);
    assert.dom('.slds-notify > .slds-assistive-text').hasText('info');
  });

  test('it renders success theme', async function(assert) {
    await render(hbs`{{slds-toast theme='success'}}`);

    assert.ok(findAll('.slds-theme_success').length);
    assert.dom('.slds-notify > .slds-assistive-text').hasText('success');
  });

  test('it renders warning theme', async function(assert) {
    await render(hbs`{{slds-toast theme='warning'}}`);

    assert.ok(findAll('.slds-theme_warning').length);
  });

  test('it renders error theme', async function(assert) {
    await render(hbs`{{slds-toast theme='error'}}`);

    assert.ok(findAll('.slds-theme_error').length);
  });
});
