import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds media/body', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{slds-media/body}}`);

    assert.dom('.slds-media__body').hasText('');

    // Template block usage:
    await render(hbs`
      {{#slds-media/body}}
        template block text
      {{/slds-media/body}}
    `);

    assert.dom('.slds-media__body').hasText('template block text');
  });
});
