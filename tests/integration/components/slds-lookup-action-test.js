import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds lookup action', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{slds-lookup-action}}`);

    assert.equal(find('*').textContent.trim(), '');

    // // Template block usage:
    // this.render(hbs`
    //   {{#slds-lookup-action}}
    //     template block text
    //   {{/slds-lookup-action}}
    // `);

    // assert.equal(this.$().text().trim(), 'template block text');
  });
});
