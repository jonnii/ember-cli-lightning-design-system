import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds lookup header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{slds-lookup-header}}`);

    assert.equal(find('.slds-lookup__item--label').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#slds-lookup-header}}
        template block text
      {{/slds-lookup-header}}
    `);

    assert.equal(find('.slds-lookup__item--label').textContent.trim(), 'template block text');
  });
});
