import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds control group/radio', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with label', async function(assert) {
    await render(hbs`{{slds-control-group/radio label='awesome sauce'}}`);

    assert.dom('.slds-form-element__label').hasText('awesome sauce');
  });

  test('it renders with correct label', async function(assert) {
    await render(hbs`{{slds-control-group/radio label='awesome sauce'}}`);

    assert.equal(find('input').id, find('label').getAttribute('for'));
  });

  test('it renders disabled', async function(assert) {
    await render(hbs`{{slds-control-group/radio isDisabled=true label='awesome sauce'}}`);
    var input = find('input');
    assert.ok(input, 'could not find input');
    assert.ok(input.hasAttribute('disabled'), 'input was not disabled');
  });
});
