import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds breadcrumb/item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{slds-breadcrumb/item}}`);

    assert.dom('.slds-breadcrumb__item').hasText('');

    // Template block usage:
    await render(hbs`
      {{#slds-breadcrumb/item}}
        template block text
      {{/slds-breadcrumb/item}}
    `);

    assert.dom('.slds-breadcrumb__item').hasText('template block text');
  });
});
