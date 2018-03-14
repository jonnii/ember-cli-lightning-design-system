import { find, findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control', 'Integration | Component | slds control', {
  integration: true
});

test('it renders with input', function(assert) {
  this.render(hbs`
    {{#slds-control label='Required Field' as |control|}}
      {{control.input placeholder='placeholder text'}}
    {{/slds-control}}
  `);

  assert.equal(
    find('.slds-form-element label.slds-form-element__label').getAttribute('for'),
    find('input.slds-input').id
  );
});

test('it renders with textarea', function(assert) {
  this.render(hbs`
    {{#slds-control label='Required Field' as |control|}}
      {{control.textarea}}
    {{/slds-control}}
  `);

  assert.ok(findAll('div.slds-form-element .slds-form-element__control textarea.slds-textarea').length);
});

test('it renders with checkbox', function(assert) {
  this.render(hbs`
    {{#slds-control as |control|}}
      {{control.checkbox label='check'}}
    {{/slds-control}}
  `);

  assert.equal(findAll('.slds-form-element__label').length, 1, 'should only have one label');
  assert.ok(findAll('div.slds-form-element .slds-form-element__control .slds-checkbox input').length);
  assert.equal(find('input').getAttribute('type'), 'checkbox');
});

test('it renders with checkbox required', function(assert) {
  this.render(hbs`
    {{#slds-control isRequired=true as |control|}}
      {{control.checkbox label='check'}}
    {{/slds-control}}
  `);

  assert.ok(findAll('div.slds-form-element .slds-form-element__control .slds-checkbox input').length);
  assert.equal(find('input').getAttribute('type'), 'checkbox');
  assert.equal(findAll('.slds-required').length, 1, 'should show required marker');
});

test('it renders with checkbox toggle', function(assert) {
  this.render(hbs`
    {{#slds-control as |control|}}
      {{control.checkbox-toggle label='check'}}
    {{/slds-control}}
  `);

  assert.equal(findAll('.slds-form-element__label').length, 1, 'should only have one label');
  assert.ok(findAll('div.slds-form-element .slds-checkbox_toggle').length);
});

test('it renders with combobox', function(assert) {
  this.render(hbs`
    {{#slds-control label='label' as |control|}}
      {{control.combobox}}
    {{/slds-control}}
  `);

  assert.equal(findAll('.slds-form-element__label').length, 1, 'should only have one label');
  assert.ok(findAll('div.slds-form-element .slds-form-element__control .slds-combobox_container').length);
});
