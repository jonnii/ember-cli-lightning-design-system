import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds lookup list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{slds-lookup-list}}`);

    assert.equal(find('.slds-lookup__list').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#slds-lookup-list}}
        template block text
      {{/slds-lookup-list}}
    `);

    assert.equal(find('.slds-lookup__list').textContent.trim(), 'template block text');
  });
});
