import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds-illustration', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#slds-illustration}}
        template block text
      {{/slds-illustration}}
    `);

    assert.ok(findAll('.slds-illustration.slds-illustration_small').length);
  });

  test('it renders with large', async function(assert) {
    await render(hbs`
      {{#slds-illustration size='large'}}
        template block text
      {{/slds-illustration}}
    `);

    assert.ok(findAll('.slds-illustration.slds-illustration_large').length);
  });
});
