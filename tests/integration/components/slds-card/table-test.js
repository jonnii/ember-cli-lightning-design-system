import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds card/table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{slds-card/table}}`);

    assert.dom('.slds-card__body').hasText('');

    // Template block usage:
    await render(hbs`
      {{#slds-card/table}}
        template block text
      {{/slds-card/table}}
    `);

    assert.dom('.slds-card__body').hasText('template block text');
  });
});
