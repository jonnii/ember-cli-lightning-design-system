import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds-vertical-navigation/section', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{slds-vertical-navigation/section}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#slds-vertical-navigation/section}}
        template block text
      {{/slds-vertical-navigation/section}}
    `);

    assert.ok(findAll('.slds-nav-vertical__section').length);
    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
