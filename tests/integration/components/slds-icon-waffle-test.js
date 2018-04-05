import { find, findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds icon waffle', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-icon-waffle}}`);

    assert.equal(findAll('.slds-icon-waffle').length, 1);
    assert.notOk(find('button').getAttribute('title'), 'should not have title');
    assert.notOk(findAll('span.slds-assistive-text').length, 'should not have assistive text');
  });

  test('it renders', async function(assert) {
    await render(hbs`{{slds-icon-waffle title='amazing title'}}`);

    assert.equal(find('button').getAttribute('title'), 'amazing title');
    assert.equal(find('span.slds-assistive-text').textContent.trim(), 'amazing title');
  });
});
