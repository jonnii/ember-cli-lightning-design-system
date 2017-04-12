import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('slds-menu', 'Integration | Component | slds menu', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-menu}}`);
  
  assert.equal(this.$('button.slds-button:disabled').length, 0);
  assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 0);
  assert.equal(this.$('div.slds-dropdown-trigger').attr('aria-expanded'), 'false');
  assert.equal(this.$('.slds-dropdown').attr('class'), 'slds-dropdown slds-dropdown--left ember-view');
  assert.equal(this.$('.slds-button').attr('aria-haspopup'), 'true');
});

test('it renders with position', function(assert) {
  this.render(hbs`{{slds-menu position='bottomRight'}}`);
  
  assert.equal(this.$('.slds-dropdown').attr('class'), 'slds-dropdown slds-dropdown--bottom slds-dropdown--right ember-view');
});

test('it renders disabled', function(assert) {
  this.render(hbs`{{slds-menu disabled=true}}`);

  assert.equal(this.$('button.slds-button:disabled').length, 1);
});

test('it renders when open', function(assert) {
  this.render(hbs`{{slds-menu isOpen=true}}`);

  assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 1);
  assert.equal(this.$('div.slds-dropdown-trigger').attr('aria-expanded'), 'true');
});

test('it renders with items', function(assert) {
  this.render(hbs`
    {{#slds-menu as |menu|}}
      {{menu.item text="Overflow 1"}}
      {{menu.item text="Overflow 2"}}
      {{menu.item text="Overflow 3"}}
    {{/slds-menu}}
  `);

  assert.equal(this.$('li.slds-dropdown__item').length, 3);
});

test('it opens when clicked', function(assert) {
  this.render(hbs`{{slds-menu}}`);
  
  this.$('button').click();
  
  assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 1);
});

test('it closes when clicked', function(assert) {
  this.render(hbs`{{slds-menu isOpen=true}}`);
  
  this.$('button').click();
  
  assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 0);
});

test('it closes when item clicked', function(assert) {
  this.set('clicked', (message) => {
    assert.equal(message, 'overflow1');
  });

  this.render(hbs`
    {{#slds-menu as |menu|}}
      {{menu.item text="Overflow 1" clicked=(action clicked 'overflow1')}}
      {{menu.item text="Overflow 2" clicked=(action clicked 'overflow2')}}
      {{menu.item text="Overflow 3" clicked=(action clicked 'overflow3')}}
    {{/slds-menu}}
  `);

  this.$('button').click();

  assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 1);
  Ember.run(() => this.$('li.slds-dropdown__item:first a').click());
  assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 0);
});