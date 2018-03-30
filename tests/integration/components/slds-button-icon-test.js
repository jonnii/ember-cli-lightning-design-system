import { find, click, findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-button-icon', 'Integration | Component | slds button icon', {
  integration: true
});

test('it renders with default icon', function(assert) {
  this.render(hbs`{{slds-button-icon}}`);

  const button = this.$('button.slds-button.slds-button--icon');

  assert.ok(button.length);
  assert.equal(button.attr('title').trim(), 'question');
  assert.notOk(button.attr('aria-haspopup'));

  assert.equal(find('svg').getAttribute('class'), 'slds-button__icon');
  assert.equal(find('svg').getAttribute('aria-hidden'), 'true');
  assert.equal(
    find('use')
      .getAttribute('xlink:href')
      .trim(),
    '/assets/icons/utility-sprite/svg/symbols.svg#question'
  );
  assert.equal(find('span.slds-assistive-text').textContent.trim(), 'question');
});

test('it renders with custom class', function(assert) {
  this.render(hbs`{{slds-button-icon class='slds-pill__remove'}}`);

  assert.ok(findAll('button.slds-pill__remove.slds-button.slds-button--icon').length);
});

test('it renders with icon', function(assert) {
  this.render(hbs`{{slds-button-icon icon='user'}}`);

  assert.equal(
    find('button')
      .getAttribute('title')
      .trim(),
    'user'
  );
  assert.equal(
    find('use')
      .getAttribute('xlink:href')
      .trim(),
    '/assets/icons/utility-sprite/svg/symbols.svg#user'
  );
  assert.equal(find('span.slds-assistive-text').textContent.trim(), 'user');
});

test('it renders with aria-popup', function(assert) {
  this.render(hbs`{{slds-button-icon ariaHaspopup='true'}}`);

  assert.equal(find('button').getAttribute('aria-haspopup'), 'true');
});

test('it renders warning', function(assert) {
  this.render(hbs`{{slds-button-icon icon='warning' type='error'}}`);

  assert.ok(findAll('button.slds-button.slds-button--icon-error').length);
});

test('it renders disabled', function(assert) {
  this.render(hbs`{{slds-button-icon disabled=true}}`);

  assert.equal(findAll('button:disabled').length, 1);
});

test('it renders with size large', function(assert) {
  this.render(hbs`{{slds-button-icon size='large'}}`);

  assert.equal(find('svg').getAttribute('class'), 'slds-button__icon slds-button__icon--large');
});

test('it renders with size x-small', function(assert) {
  this.render(hbs`{{slds-button-icon size='x-small'}}`);

  assert.equal(find('svg').getAttribute('class'), 'slds-button__icon slds-button__icon--x-small');
});

test('it renders with container size', function(assert) {
  this.render(hbs`{{slds-button-icon containerSize='small'}}`);

  assert.ok(findAll('button.slds-button--icon-small').length);
});

test('it renders with border outline', function(assert) {
  this.render(hbs`{{slds-button-icon border='outline'}}`);

  assert.ok(findAll('button.slds-button.slds-button--icon.slds-button--icon-border').length);
});

test('it renders with border filled', function(assert) {
  this.render(hbs`{{slds-button-icon border='filled'}}`);

  assert.ok(findAll('button.slds-button.slds-button--icon.slds-button--icon-border-filled').length);
});

test('it renders when selected', function(assert) {
  this.render(hbs`{{slds-button-icon isSelected=true}}`);

  assert.ok(findAll('button.slds-button.slds-button--icon.slds-is-selected').length);
});

test('it renders with title', function(assert) {
  this.render(hbs`{{slds-button-icon title='superman'}}`);

  assert.equal(
    find('button')
      .getAttribute('title')
      .trim(),
    'superman'
  );
  assert.equal(find('span.slds-assistive-text').textContent.trim(), 'superman');
});

test('it calls action when clicked', async function(assert) {
  this.set('clicked', message => {
    assert.equal(message, 'icon');
  });

  this.render(hbs`{{slds-button-icon clicked=(action clicked 'icon')}}`);

  await click('button');
});
