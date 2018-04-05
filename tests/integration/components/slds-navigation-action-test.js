import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds navigation action', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{slds-navigation-action}}`);

    assert.equal(find('.slds-navigation-list--vertical__action').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#slds-navigation-action}}
        template block text
      {{/slds-navigation-action}}
    `);

    assert.equal(find('.slds-navigation-list--vertical__action').textContent.trim(), 'template block text');
  });
});
