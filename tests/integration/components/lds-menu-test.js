import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-menu', 'Integration | Component | lds menu', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-menu}}`);
  
  assert.equal(this.$('button.slds-button:disabled').length, 0);
  assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 0);
  assert.equal(this.$('.slds-dropdown').attr('class'), 'slds-dropdown slds-dropdown--left');
});

test('it renders with position', function(assert) {
  this.render(hbs`{{lds-menu position='bottomRight'}}`);
  
  assert.equal(this.$('.slds-dropdown').attr('class'), 'slds-dropdown slds-dropdown--bottom slds-dropdown--right');
});

test('it renders disabled', function(assert) {
  this.render(hbs`{{lds-menu disabled=true}}`);

  assert.equal(this.$('button.slds-button:disabled').length, 1);
});

test('it renders when open', function(assert) {
  this.render(hbs`{{lds-menu isOpen=true}}`);

  assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 1);
});

test('it renders with items', function(assert) {
  this.render(hbs`
    {{#lds-menu as |menu|}}
      {{menu.item text="Overflow 1"}}
      {{menu.item text="Overflow 2"}}
      {{menu.item text="Overflow 3"}}
    {{/lds-menu}}
  `);

  assert.equal(this.$('li.slds-dropdown__item').length, 3);
});

test('it opens when clicked', function(assert) {
  this.render(hbs`{{lds-menu}}`);
  
  this.$('button').click();
  
  assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 1);
});

test('it closes when clicked', function(assert) {
  this.render(hbs`{{lds-menu isOpen=true}}`);
  
  this.$('button').click();
  
  assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 0);
});

test('it closes when item clicked', function(assert) {
  this.set('clicked', (message) => {
    assert.equal(message, 'overflow1');
    
    // TODO: figure out how to check this after runloop has run
    // assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 0);
  });

  this.render(hbs`
    {{#lds-menu as |menu|}}
      {{menu.item text="Overflow 1" clicked=(action clicked 'overflow1')}}
      {{menu.item text="Overflow 2" clicked=(action clicked 'overflow2')}}
      {{menu.item text="Overflow 3" clicked=(action clicked 'overflow3')}}
    {{/lds-menu}}
  `);

  this.$('button').click();

  assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 1);

  this.$('li.slds-dropdown__item:first a').click();
});