import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-button-icon', 'Integration | Component | lds button icon', {
  integration: true
});

test('it renders with default icon', function(assert) {
  this.render(hbs`{{lds-button-icon}}`);

  assert.equal(this.$('svg').attr('class'), 'slds-button__icon');
  assert.equal(this.$('button').attr('class').trim(), 'slds-button slds-button--icon');
  assert.equal(this.$('button').attr('title').trim(), 'question');
  assert.equal(this.$('use').attr('xlink:href').trim(), '/assets/icons/utility-sprite/svg/symbols.svg#question');
  assert.equal(this.$('span.slds-assistive-text').text().trim(), 'question');
});

test('it renders with icon', function(assert) {
  this.render(hbs`{{lds-button-icon icon='user'}}`);

  assert.equal(this.$('button').attr('title').trim(), 'user');
  assert.equal(this.$('use').attr('xlink:href').trim(), '/assets/icons/utility-sprite/svg/symbols.svg#user');
  assert.equal(this.$('span.slds-assistive-text').text().trim(), 'user');
});

test('it renders warning', function(assert) {
  this.render(hbs`{{lds-button-icon icon='warning' type='error'}}`);

  assert.equal(this.$('button').attr('class').trim(), 'slds-button slds-button--icon-error');
});

test('it renders disabled', function(assert) {
  this.render(hbs`{{lds-button-icon disabled=true}}`);

  assert.equal(this.$('button:disabled').length, 1);
});

test('it renders with size large', function(assert) {
  this.render(hbs`{{lds-button-icon size='large'}}`);

  assert.equal(this.$('svg').attr('class'), 'slds-button__icon slds-button__icon--large');
});

test('it renders with size x-small', function(assert) {
  this.render(hbs`{{lds-button-icon size='x-small'}}`);

  assert.equal(this.$('svg').attr('class'), 'slds-button__icon slds-button__icon--x-small');
});
