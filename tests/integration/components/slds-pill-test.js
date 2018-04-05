import { find, findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds pill', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-pill}}`);

    assert.ok(findAll('button.slds-pill__remove.slds-button.slds-button--icon').length);
    assert.equal(find('a').textContent.trim(), 'Label');
  });

  test('it renders with label', async function(assert) {
    await render(hbs`{{slds-pill label='awesome label'}}`);

    assert.ok(findAll('button.slds-pill__remove.slds-button.slds-button--icon').length);
    assert.equal(find('a').textContent.trim(), 'awesome label');
  });

  test('it renders with error', async function(assert) {
    await render(hbs`{{slds-pill isError=true}}`);

    assert.ok(findAll('.slds-pill.slds-has-error').length);
    assert.equal(
      find('.slds-icon_container').getAttribute('class'),
      'slds-icon_container slds-pill__icon_container slds-m-left--xx-small'
    );
  });
});
