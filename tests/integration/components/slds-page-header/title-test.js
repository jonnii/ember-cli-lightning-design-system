import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds page header/title', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#slds-page-header/title}}
        template block text
      {{/slds-page-header/title}}
    `);

    assert.equal(find('h1.slds-page-header__title').textContent.trim(), 'template block text');
  });
});
