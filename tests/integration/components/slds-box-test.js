import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds box', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-box}}`);

    assert.equal(find('.slds-box').textContent.trim(), '');

    await render(hbs`
      {{#slds-box}}
        template block text
      {{/slds-box}}
    `);

    assert.equal(find('.slds-box').textContent.trim(), 'template block text');
  });
});
