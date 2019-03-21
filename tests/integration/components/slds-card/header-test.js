import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds card/header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{slds-card/header}}`);

    assert.dom('.slds-card__header').hasText('');

    // Template block usage:
    await render(hbs`
      {{#slds-card/header}}
        template block text
      {{/slds-card/header}}
    `);

    assert.dom('.slds-card__header').hasText('template block text');
  });
});
