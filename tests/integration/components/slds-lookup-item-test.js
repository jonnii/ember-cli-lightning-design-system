import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds lookup item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(0);
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    // this.render(hbs`{{slds-lookup-item}}`);

    //assert.equal(this.$().text().trim(), '');

    // Template block usage:
    await render(hbs`
      {{#slds-lookup-item}}
        template block text
      {{/slds-lookup-item}}
    `);

    //assert.equal(this.$().text().trim(), 'template block text');
  });
});
