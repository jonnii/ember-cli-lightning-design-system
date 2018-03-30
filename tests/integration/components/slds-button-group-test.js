import { findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-button-group', 'Integration | Component | slds button group', {
  integration: true
});

test('it renders with button group options', function(assert) {
  this.render(hbs`
    {{#slds-button-group as |group|}}
      {{group.button text='Option1'}}
      {{group.button text='Option2'}}
      {{group.button text='Option3'}}
    {{/slds-button-group}}
  `);

  assert.equal(findAll('button').length, 3);
});

test('it renders with menu', function(assert) {
  this.render(hbs`
    {{#slds-button-group as |group|}}
      {{group.button text='Option1'}}
      {{group.button text='Option2'}}
      {{group.button text='Option3'}}
      {{#group.menu as |menu|}}
        {{#menu.dropdown as |dropdown|}}
          {{dropdown.item text='option1'}}
        {{/menu.dropdown}}
      {{/group.menu}}
    {{/slds-button-group}}
  `);

  assert.equal(findAll('.slds-dropdown-trigger').length, 1);
  assert.ok(findAll('.slds-button--last.slds-dropdown-trigger.slds-dropdown-trigger--click').length);
  assert.ok(findAll('.slds-dropdown.slds-dropdown--right').length);
});
