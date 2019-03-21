import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds avatar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-avatar}}`);

    assert.ok(findAll('span.slds-avatar.slds-avatar--medium').length);
    assert.dom('img').hasAttribute('src', '/assets/images/avatar2.jpg');
    assert.dom('img').hasAttribute('alt', 'default avatar');
  });

  test('it renders with type', async function(assert) {
    await render(hbs`{{slds-avatar type='circle'}}`);

    assert.ok(findAll('span.slds-avatar.slds-avatar--medium.slds-avatar--circle').length);
  });

  test('it renders with size', async function(assert) {
    await render(hbs`{{slds-avatar type='circle' size='small'}}`);

    assert.ok(findAll('span.slds-avatar.slds-avatar--small.slds-avatar--circle').length);
  });

  test('it renders with custom image', async function(assert) {
    await render(hbs`
      {{#slds-avatar}}
        <img src='bob'/>
      {{/slds-avatar}}
    `);

    assert.dom('img').hasAttribute('src', 'bob');
  });

  test('it renders with name', async function(assert) {
    await render(hbs`{{slds-avatar name='Bobby Jenkins'}}`);

    assert.dom('abbr').hasAttribute('title', 'Bobby Jenkins');
    assert.dom('abbr').hasText('BJ');
    assert.dom('abbr').hasAttribute('class', 'slds-avatar__initials slds-icon-standard-account');
  });

  test('it renders with name with middlename', async function(assert) {
    await render(hbs`{{slds-avatar name='Bobby Tom Jenkins'}}`);

    assert.dom('abbr').hasAttribute('title', 'Bobby Tom Jenkins');
    assert.dom('abbr').hasText('BJ');
  });

  test('it renders with company name', async function(assert) {
    await render(hbs`{{slds-avatar name='Megacorp'}}`);

    assert.dom('abbr').hasAttribute('title', 'Megacorp');
    assert.dom('abbr').hasText('Me');
  });

  test('it renders with color', async function(assert) {
    await render(hbs`{{slds-avatar name='Bobby Jenkins' sprite='utility' icon='refresh'}}`);

    assert.dom('abbr').hasAttribute('class', 'slds-avatar__initials slds-icon-utility-refresh');
  });
});
