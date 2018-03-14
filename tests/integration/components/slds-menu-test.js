import { find, click, findAll } from 'ember-native-dom-helpers';
import { run } from '@ember/runloop';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-menu', 'Integration | Component | slds menu', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-menu}}`);

  assert.equal(findAll('button.slds-button:disabled').length, 0);
  assert.equal(findAll('div.slds-dropdown-trigger.slds-is-open').length, 0);
  assert.equal(find('div.slds-dropdown-trigger').getAttribute('aria-expanded'), 'false');
  assert.ok(findAll('.slds-dropdown.slds-dropdown--left').length);
  assert.equal(find('.slds-button').getAttribute('aria-haspopup'), 'true');
});

test('it renders with position', function(assert) {
  this.render(hbs`{{slds-menu position='bottomRight'}}`);

  assert.ok(findAll('.slds-dropdown.slds-dropdown--bottom.slds-dropdown--right').length);
});

test('it renders disabled', function(assert) {
  this.render(hbs`{{slds-menu disabled=true}}`);

  assert.equal(findAll('button.slds-button:disabled').length, 1);
});

test('it renders when open', function(assert) {
  this.render(hbs`{{slds-menu isOpen=true}}`);

  assert.equal(findAll('div.slds-dropdown-trigger.slds-is-open').length, 1);
  assert.equal(find('div.slds-dropdown-trigger').getAttribute('aria-expanded'), 'true');
});

test('it renders with items', function(assert) {
  this.render(hbs`
    {{#slds-menu as |menu|}}
      {{#menu.dropdown as |dropdown|}}
        {{dropdown.item text="Overflow 1"}}
        {{dropdown.item text="Overflow 2"}}
        {{dropdown.item text="Overflow 3"}}
      {{/menu.dropdown}}
    {{/slds-menu}}
  `);

  assert.equal(findAll('li.slds-dropdown__item').length, 3);
});

test('it opens when clicked', async function(assert) {
  this.render(hbs`{{slds-menu}}`);

  await click('button');

  assert.equal(findAll('div.slds-dropdown-trigger.slds-is-open').length, 1);
});

test('it closes when clicked', async function(assert) {
  this.render(hbs`{{slds-menu isOpen=true}}`);

  await click('button');

  assert.equal(findAll('div.slds-dropdown-trigger.slds-is-open').length, 0);
});

test('it closes when item clicked', async function(assert) {
  this.set('clicked', message => {
    assert.equal(message, 'overflow1');
  });

  this.render(hbs`
    {{#slds-menu as |menu|}}
      {{menu.trigger}}
      {{#menu.dropdown as |dropdown|}}
        {{dropdown.item text="Overflow 1" clicked=(action clicked 'overflow1')}}
        {{dropdown.item text="Overflow 2" clicked=(action clicked 'overflow2')}}
        {{dropdown.item text="Overflow 3" clicked=(action clicked 'overflow3')}}
      {{/menu.dropdown}}
    {{/slds-menu}}
  `);

  await click('button');

  assert.equal(findAll('div.slds-dropdown-trigger.slds-is-open').length, 1);
  run(() => this.$('li.slds-dropdown__item:first a').click());
  assert.equal(findAll('div.slds-dropdown-trigger.slds-is-open').length, 0);
});
