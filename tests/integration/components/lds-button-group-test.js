import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-button-group', 'Integration | Component | lds button group', {
  integration: true
});

test('it renders with button group options', function(assert) {
  this.render(hbs`
    {{#lds-button-group as |group|}}
      {{group.button text='Option1'}}
      {{group.button text='Option2'}}
      {{group.button text='Option3'}}
    {{/lds-button-group}}
  `);

  assert.equal(this.$('button').length, 3);
});

test('it renders with menu', function(assert) {
  this.render(hbs`
    {{#lds-button-group as |group|}}
      {{group.button text='Option1'}}
      {{group.button text='Option2'}}
      {{group.button text='Option3'}}
      {{#group.menu as |menu|}}
        {{menu.item text='option1'}}
      {{/group.menu}}
    {{/lds-button-group}}
  `);

  assert.equal(this.$('.slds-dropdown-trigger').length, 1);
  assert.equal(this.$('.slds-dropdown-trigger').attr('class'), 'slds-dropdown-trigger slds-dropdown-trigger--click slds-button--last');
  assert.equal(this.$('.slds-dropdown').attr('class'), 'slds-dropdown slds-dropdown--right');
});
