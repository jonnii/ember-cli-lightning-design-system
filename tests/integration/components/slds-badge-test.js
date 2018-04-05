import { findAll, find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds badge', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders without text', async function(assert) {
    await render(hbs`{{slds-badge}}`);
    assert.equal(find('span').textContent.trim(), 'badge');
  });

  test('it renders with text attribute', async function(assert) {
    await render(hbs`{{slds-badge text='textytext'}}`);
    assert.equal(find('.slds-badge').textContent.trim(), 'textytext');
  });

  test('it renders with color', async function(assert) {
    await render(hbs`{{slds-badge text='textytext' color='inverse'}}`);
    assert.ok(findAll('span.slds-badge_inverse').length);
  });

  test('it renders with block', async function(assert) {
    await render(hbs`
      {{#slds-badge}}
        i love blocks
      {{/slds-badge}}
    `);

    assert.ok(findAll('span.slds-badge').length);

    assert.equal(find('.slds-badge').textContent.trim(), 'i love blocks');
  });
});
