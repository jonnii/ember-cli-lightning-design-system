import { find, findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-tabs/item', 'Integration | Component | slds tabs/item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-tabs/item text='Tab Text'}}`);

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

test('it renders when active', function(assert) {
  this.render(hbs`{{slds-tabs/item text='Tab Text' isActive=true}}`);

  assert.ok(findAll('li.slds-tabs_default__item.slds-is-active').length, 'is active');
  assert.equal(
    find('li.slds-tabs_default__item a.slds-tabs_default__link').getAttribute('aria-selected'),
    'true',
    'is aria selected'
  );
});
