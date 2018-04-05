import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds lookup', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#slds-lookup}}
      {{/slds-lookup}}
    `);

    assert.equal(find('label').textContent.trim(), 'Search');
    assert.equal(find('.slds-lookup').getAttribute('class'), 'slds-form-element slds-lookup');
  });

  test('it renders with placeholder', async function(assert) {
    await render(hbs`
      {{#slds-lookup placeholder='Find Product'}}
      {{/slds-lookup}}
    `);

    assert.equal(find('label').textContent.trim(), 'Find Product');
  });

  test('it renders with when open', async function(assert) {
    await render(hbs`
      {{#slds-lookup isOpen=true}}
      {{/slds-lookup}}
    `);

    assert.equal(find('.slds-lookup').getAttribute('class'), 'slds-form-element slds-lookup slds-is-open');
  });
});
