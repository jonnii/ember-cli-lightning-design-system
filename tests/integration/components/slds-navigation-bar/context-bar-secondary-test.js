import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds navigation bar/context bar secondary', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{slds-navigation-bar/context-bar-secondary}}`);

    assert.dom('.slds-context-bar__secondary').hasText('');

    // Template block usage:
    await render(hbs`
      {{#slds-navigation-bar/context-bar-secondary}}
        template block text
      {{/slds-navigation-bar/context-bar-secondary}}
    `);

    assert.dom('.slds-context-bar__secondary').hasText('template block text');
  });
});
