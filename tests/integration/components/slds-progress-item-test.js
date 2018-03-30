import { find, findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-progress-item', 'Integration | Component | slds progress item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-progress-item text='item 1'}}`);

  assert.ok(findAll('li.slds-progress__item').length);
  assert.equal(find('.slds-assistive-text').textContent.trim(), 'item 1');
});

test('it renders active', function(assert) {
  this.render(hbs`{{slds-progress-item state='active'}}`);

  assert.ok(findAll('li.slds-progress__item.slds-is-active').length);
});

test('it renders complete', function(assert) {
  this.render(hbs`{{slds-progress-item text='item 3' state='completed'}}`);

  assert.ok(findAll('li.slds-progress__item.slds-is-completed').length);
  assert.equal(find('.slds-assistive-text').textContent.trim(), 'item 3');
  assert.ok(this.$('.slds-button__icon'));
  assert.equal(find('use').getAttribute('xlink:href'), '/assets/icons/utility-sprite/svg/symbols.svg#success');
});

test('it renders error', function(assert) {
  this.render(hbs`{{slds-progress-item text='item 3' state='error'}}`);

  assert.ok(findAll('li.slds-progress__item.slds-has-error').length);
  assert.equal(find('.slds-assistive-text').textContent.trim(), 'item 3');
  assert.ok(this.$('.slds-button__icon'));
  assert.equal(find('use').getAttribute('xlink:href'), '/assets/icons/utility-sprite/svg/symbols.svg#warning');
});
