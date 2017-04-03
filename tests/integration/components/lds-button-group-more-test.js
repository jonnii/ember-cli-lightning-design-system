import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-button-group-more', 'Integration | Component | lds button group more', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-button-group-more}}`);
  
  assert.equal(this.$('button.slds-button:disabled').length, 0);
  assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 0);
});

test('it renders disabled', function(assert) {
  this.render(hbs`{{lds-button-group-more disabled=true}}`);

  assert.equal(this.$('button.slds-button:disabled').length, 1);
});

test('it renders when open', function(assert) {
  this.render(hbs`{{lds-button-group-more open=true}}`);

  assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 1);
});

test('it renders with items', function(assert) {
  this.render(hbs`
    {{#lds-button-group-more as |more|}}
      {{more.item text="Overflow 1"}}
      {{more.item text="Overflow 2"}}
      {{more.item text="Overflow 3"}}
    {{/lds-button-group-more}}
  `);

  assert.equal(this.$('li.slds-dropdown__item').length, 3);
});

test('it opens when clicked', function(assert) {
  this.render(hbs`{{lds-button-group-more}}`);
  
  this.$('button').click();
  
  assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 1);
});

test('it closes when clicked', function(assert) {
  this.render(hbs`{{lds-button-group-more open=true}}`);
  
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
    {{#lds-button-group-more as |more|}}
      {{more.item text="Overflow 1" clicked=(action clicked 'overflow1')}}
      {{more.item text="Overflow 2" clicked=(action clicked 'overflow2')}}
      {{more.item text="Overflow 3" clicked=(action clicked 'overflow3')}}
    {{/lds-button-group-more}}
  `);

  this.$('button').click();

  assert.equal(this.$('div.slds-dropdown-trigger.slds-is-open').length, 1);

  this.$('li.slds-dropdown__item:first a').click();
});