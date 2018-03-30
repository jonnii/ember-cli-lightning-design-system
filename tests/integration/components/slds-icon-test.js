import { find, findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-icon', 'Integration | Component | slds icon', {
  integration: true
});

test('it renders default standard', function(assert) {
  this.render(hbs`{{slds-icon}}`);

  const container = this.$('span.slds-icon_container.slds-icon-standard-default');
  assert.ok(container.length);
  assert.notOk(container.attr('title'));
  assert.equal(findAll('span.slds-assistive-text').length, 0);

  const icon = this.$('.slds-icon');
  assert.equal(icon.attr('class').trim(), 'slds-icon');
  assert.equal(find('use').getAttribute('xlink:href'), '/assets/icons/standard-sprite/svg/symbols.svg#default');
});

test('it renders standard with description', function(assert) {
  this.render(hbs`{{slds-icon description='fancy description'}}`);
  const container = this.$('span.slds-icon_container.slds-icon-standard-default');

  assert.ok(container.length);
  assert.equal(container.attr('title'), 'fancy description');
  assert.equal(find('.slds-assistive-text').textContent.trim(), 'fancy description');
});

test('it renders utility', function(assert) {
  this.render(hbs`{{slds-icon sprite='utility'}}`);

  const container = this.$('span.slds-icon_container');
  assert.ok(container.length);

  const icon = this.$('.slds-icon');
  assert.equal(icon.attr('class').trim(), 'slds-icon slds-icon-text-default');

  assert.equal(find('use').getAttribute('xlink:href'), '/assets/icons/utility-sprite/svg/symbols.svg#question');
});

test('it renders doctype', function(assert) {
  this.render(hbs`{{slds-icon sprite='doctype'}}`);

  const container = this.$('span.slds-icon_container');
  assert.ok(container.length);

  const icon = this.$('.slds-icon');
  assert.equal(icon.attr('class').trim(), 'slds-icon');

  assert.equal(find('use').getAttribute('xlink:href'), '/assets/icons/doctype-sprite/svg/symbols.svg#unknown');
});

test('it renders sizes', function(assert) {
  this.render(hbs`{{slds-icon size='x-small'}}`);

  const icon = this.$('.slds-icon');
  assert.equal(icon.attr('class'), 'slds-icon slds-icon--x-small');
});

test('it renders utility with color none', function(assert) {
  this.render(hbs`{{slds-icon sprite='utility' color='none'}}`);

  const icon = this.$('.slds-icon');
  assert.equal(icon.attr('class').trim(), 'slds-icon');
});

test('it renders utility with color error', function(assert) {
  this.render(hbs`{{slds-icon sprite='utility' color='error'}}`);

  const icon = this.$('.slds-icon');
  assert.equal(icon.attr('class').trim(), 'slds-icon slds-icon-text-error');
});
