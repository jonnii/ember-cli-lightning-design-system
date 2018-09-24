import { find, findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds progress item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-progress-item text='item 1'}}`);

    assert.ok(findAll('li.slds-progress__item').length);
    assert.equal(find('.slds-assistive-text').textContent.trim(), 'item 1');
  });

  test('it renders active', async function(assert) {
    await render(hbs`{{slds-progress-item state='active'}}`);

    assert.ok(findAll('li.slds-progress__item.slds-is-active').length);
  });

  test('it renders complete', async function(assert) {
    await render(hbs`{{slds-progress-item text='item 3' state='completed'}}`);

    assert.ok(findAll('li.slds-progress__item.slds-is-completed').length);
    assert.equal(find('.slds-assistive-text').textContent.trim(), 'item 3');
    assert.ok(find('.slds-button__icon'));
    assert.equal(find('use').getAttribute('xlink:href'), '/assets/icons/utility-sprite/svg/symbols.svg#success');
  });

  test('it renders error', async function(assert) {
    await render(hbs`{{slds-progress-item text='item 3' state='error'}}`);

    assert.ok(findAll('li.slds-progress__item.slds-has-error').length);
    assert.equal(find('.slds-assistive-text').textContent.trim(), 'item 3');
    assert.ok(find('.slds-button__icon'));
    assert.equal(find('use').getAttribute('xlink:href'), '/assets/icons/utility-sprite/svg/symbols.svg#warning');
  });
});
