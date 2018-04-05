import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds dropdown item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-dropdown-item text='bob'}}`);

    assert.equal(find('.slds-dropdown__item').textContent.trim(), 'bob');

    await render(hbs`
      {{#slds-dropdown-item}}
        template block text
      {{/slds-dropdown-item}}
    `);

    assert.equal(find('.slds-dropdown__item').textContent.trim(), 'template block text');
  });
});
