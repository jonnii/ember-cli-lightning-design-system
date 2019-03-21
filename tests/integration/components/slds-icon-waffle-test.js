import { find, findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds icon waffle', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-icon-waffle}}`);

    assert.dom('.slds-icon-waffle').exists({ count: 1 });
    assert.notOk(find('button').getAttribute('title'), 'should not have title');
    assert.notOk(findAll('span.slds-assistive-text').length, 'should not have assistive text');
  });

  test('it renders', async function(assert) {
    await render(hbs`{{slds-icon-waffle title='amazing title'}}`);

    assert.dom('button').hasAttribute('title', 'amazing title');
    assert.dom('span.slds-assistive-text').hasText('amazing title');
  });
});
