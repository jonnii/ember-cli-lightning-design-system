import { find } from 'ember-native-dom-helpers';
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

    assert.equal(find('.slds-media__body').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#slds-media/body}}
        template block text
      {{/slds-media/body}}
    `);

    assert.equal(find('.slds-media__body').textContent.trim(), 'template block text');
  });
});
