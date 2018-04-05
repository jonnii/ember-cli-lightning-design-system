import { find, findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds tabs/item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-tabs/item text='Tab Text'}}`);

    assert.ok(findAll('li.slds-tabs_default__item').length);
    assert.ok(findAll('li.slds-tabs_default__item[role=presentation]').length, 'has role');
    assert.ok(findAll("li.slds-tabs_default__item[title='Tab Text']").length, 'has title');
    assert.equal(
      find('li.slds-tabs_default__item a.slds-tabs_default__link').getAttribute('aria-selected'),
      'false',
      'is aria selected'
    );
    assert.equal(find('li.slds-tabs_default__item a.slds-tabs_default__link').textContent.trim(), 'Tab Text');
  });

  test('it renders when active', async function(assert) {
    await render(hbs`{{slds-tabs/item text='Tab Text' isActive=true}}`);

    assert.ok(findAll('li.slds-tabs_default__item.slds-is-active').length, 'is active');
    assert.equal(
      find('li.slds-tabs_default__item a.slds-tabs_default__link').getAttribute('aria-selected'),
      'true',
      'is aria selected'
    );
  });
});
