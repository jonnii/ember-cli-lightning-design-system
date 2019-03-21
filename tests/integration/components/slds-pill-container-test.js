import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds pill container', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with pills', async function(assert) {
    await render(hbs`
      {{#slds-pill-container as |container|}}
        {{container.pill}}
        {{container.pill}}
        {{container.pill}}
      {{/slds-pill-container}}
    `);

    assert.dom('.slds-pill').exists({ count: 3 });
  });
});
