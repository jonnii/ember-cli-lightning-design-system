import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds global header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(0);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{slds-global-header}}`);

    //assert.equal(this.$().text().trim(), '');

    // Template block usage:
    await render(hbs`
      {{#slds-global-header}}
        template block text
      {{/slds-global-header}}
    `);

    //assert.equal(this.$().text().trim(), 'template block text');
  });
});
