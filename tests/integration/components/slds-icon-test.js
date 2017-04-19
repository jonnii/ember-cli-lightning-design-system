import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-icon', 'Integration | Component | slds icon', {
  integration: true
});

test('it renders default standard', function(assert) {
  this.render(hbs`{{slds-icon}}`);

  const container = this.$('span.slds-icon_container');
  assert.equal(container.attr('class').trim(), 'slds-icon_container slds-icon-standard-default ember-view');
  assert.notOk(container.attr('title'));
  assert.equal(this.$('span.slds-assistive-text').length, 0);

  const icon = this.$('.slds-icon');
  assert.equal(icon.attr('class').trim(), 'slds-icon');
  assert.equal(this.$('use').attr('xlink:href'), '/assets/icons/standard-sprite/svg/symbols.svg#default');
});

test('it renders standard with description', function(assert) {
  this.render(hbs`{{slds-icon description='fancy description'}}`);
  const container = this.$('span.slds-icon_container');
  
  assert.equal(container.attr('class').trim(), 'slds-icon_container slds-icon-standard-default ember-view');
  assert.equal(container.attr('title'), 'fancy description');
  assert.equal(this.$('.slds-assistive-text').text().trim(), 'fancy description');
});

test('it renders utility', function(assert) {
  this.render(hbs`{{slds-icon sprite='utility'}}`);

  const container = this.$('span.slds-icon_container');
  assert.equal(container.attr('class').trim(), 'slds-icon_container ember-view');
  
  const icon = this.$('.slds-icon');
  assert.equal(icon.attr('class').trim(), 'slds-icon slds-icon-text-default');

  assert.equal(this.$('use').attr('xlink:href'), '/assets/icons/utility-sprite/svg/symbols.svg#question');
});

test('it renders doctype', function(assert) {
  this.render(hbs`{{slds-icon sprite='doctype'}}`);

  const container = this.$('span.slds-icon_container');
  assert.equal(container.attr('class').trim(), 'slds-icon_container ember-view');
  
  const icon = this.$('.slds-icon');
  assert.equal(icon.attr('class').trim(), 'slds-icon');

  assert.equal(this.$('use').attr('xlink:href'), '/assets/icons/doctype-sprite/svg/symbols.svg#unknown');
});

test('it renders sizes', function(assert) {
  this.render(hbs`{{slds-icon size='x-small'}}`);
  
  const icon = this.$('.slds-icon');
  assert.equal(icon.attr('class'), 'slds-icon slds-icon--x-small');
});
