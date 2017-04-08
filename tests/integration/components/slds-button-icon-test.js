import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-button-icon', 'Integration | Component | slds button icon', {
  integration: true
});

test('it renders with default icon', function(assert) {
  this.render(hbs`{{slds-button-icon}}`);

  const button = this.$('button');

  assert.equal(button.attr('class').trim(), 'slds-button slds-button--icon');
  assert.equal(button.attr('title').trim(), 'question');
  assert.notOk(button.attr('aria-haspopup'));

  assert.equal(this.$('svg').attr('class'), 'slds-button__icon');
  assert.equal(this.$('use').attr('xlink:href').trim(), '/assets/icons/utility-sprite/svg/symbols.svg#question');
  assert.equal(this.$('span.slds-assistive-text').text().trim(), 'question');
});

test('it renders with icon', function(assert) {
  this.render(hbs`{{slds-button-icon icon='user'}}`);

  assert.equal(this.$('button').attr('title').trim(), 'user');
  assert.equal(this.$('use').attr('xlink:href').trim(), '/assets/icons/utility-sprite/svg/symbols.svg#user');
  assert.equal(this.$('span.slds-assistive-text').text().trim(), 'user');
});

test('it renders with aria-popup', function(assert) {
  this.render(hbs`{{slds-button-icon ariaHaspopup='true'}}`);

  assert.equal(this.$('button').attr('aria-haspopup'), 'true');
});

test('it renders warning', function(assert) {
  this.render(hbs`{{slds-button-icon icon='warning' type='error'}}`);

  assert.equal(this.$('button').attr('class').trim(), 'slds-button slds-button--icon-error');
});

test('it renders progress', function(assert) {
  this.render(hbs`{{slds-button-icon icon='warning' type='progress'}}`);

  assert.equal(this.$('button').attr('class').trim(), 'slds-button slds-button--icon slds-progress__marker slds-progress__marker--icon');
});

test('it renders disabled', function(assert) {
  this.render(hbs`{{slds-button-icon disabled=true}}`);

  assert.equal(this.$('button:disabled').length, 1);
});

test('it renders with size large', function(assert) {
  this.render(hbs`{{slds-button-icon size='large'}}`);

  assert.equal(this.$('svg').attr('class'), 'slds-button__icon slds-button__icon--large');
});

test('it renders with size x-small', function(assert) {
  this.render(hbs`{{slds-button-icon size='x-small'}}`);

  assert.equal(this.$('svg').attr('class'), 'slds-button__icon slds-button__icon--x-small');
});

test('it renders with border outline', function(assert) {
  this.render(hbs`{{slds-button-icon border='outline'}}`);

  assert.equal(this.$('button').attr('class'), 'slds-button slds-button--icon slds-button--icon-border');
});

test('it renders with border filled', function(assert) {
  this.render(hbs`{{slds-button-icon border='filled'}}`);

  assert.equal(this.$('button').attr('class'), 'slds-button slds-button--icon slds-button--icon-border-filled');
});

test('it renders when selected', function(assert) {
  this.render(hbs`{{slds-button-icon isSelected=true}}`);

  assert.equal(this.$('button').attr('class'), 'slds-button slds-button--icon slds-is-selected');
});

test('it renders with title', function(assert) {
  this.render(hbs`{{slds-button-icon title='superman'}}`);

  assert.equal(this.$('button').attr('title').trim(), 'superman');
  assert.equal(this.$('span.slds-assistive-text').text().trim(), 'superman');
});

test('it calls action when clicked', function(assert) {
  this.set('clicked', (message) => {
    assert.equal(message, 'icon');
  });
  
  this.render(hbs`{{slds-button-icon clicked=(action clicked 'icon')}}`);

  this.$('button').click();
});
