import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-progress-item', 'Integration | Component | slds progress item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-progress-item text='item 1'}}`);

  assert.equal(this.$('li').attr('class'), 'slds-progress__item');
  assert.equal(this.$('.slds-assistive-text').text().trim(), 'item 1');
  assert.equal(this.$('button').attr('aria-describedby'), 'item 1');
});

test('it renders active', function(assert) {
  this.render(hbs`{{slds-progress-item state='active'}}`);

  assert.equal(this.$('li').attr('class'), 'slds-progress__item slds-is-active');
});

test('it renders complete', function(assert) {
  this.render(hbs`{{slds-progress-item text='item 3' state='completed'}}`);

  assert.equal(this.$('li').attr('class'), 'slds-progress__item slds-is-completed');
  assert.equal(this.$('.slds-assistive-text').text().trim(), 'item 3');
  assert.equal(this.$('button').attr('aria-describedby'), 'item 3');
  assert.ok(this.$('.slds-button__icon'));
  assert.equal(this.$('use').attr('xlink:href'), '/assets/icons/utility-sprite/svg/symbols.svg#success');
});

test('it renders error', function(assert) {
  this.render(hbs`{{slds-progress-item text='item 3' state='error'}}`);

  assert.equal(this.$('li').attr('class'), 'slds-progress__item slds-has-error');
  assert.equal(this.$('.slds-assistive-text').text().trim(), 'item 3');
  assert.equal(this.$('button').attr('aria-describedby'), 'item 3');
  assert.ok(this.$('.slds-button__icon'));
  assert.equal(this.$('use').attr('xlink:href'), '/assets/icons/utility-sprite/svg/symbols.svg#warning');
});