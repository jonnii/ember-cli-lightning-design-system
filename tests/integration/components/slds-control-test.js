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
    this.$('.slds-form-element label.slds-form-element__label').attr('for'),
    this.$('input.slds-input').attr('id')
  );
});

test('it renders with checkbox', function(assert) {
  this.render(hbs`
    {{#slds-control as |control|}}
      {{control.checkbox label='check'}}
    {{/slds-control}}
  `);

  assert.equal(this.$('.slds-form-element__label').length, 1, 'should only ahve one label');
  assert.ok(this.$('div.slds-form-element .slds-form-element__control .slds-checkbox input').length);
  assert.equal(this.$('input').attr('type'), 'checkbox');
});

test('it renders with checkbox required', function(assert) {
  this.render(hbs`
    {{#slds-control isRequired=true as |control|}}
      {{control.checkbox label='check'}}
    {{/slds-control}}
  `);

  assert.ok(this.$('div.slds-form-element .slds-form-element__control .slds-checkbox input').length);
  assert.equal(this.$('input').attr('type'), 'checkbox');
  assert.equal(this.$('.slds-required').length, 1, 'should show required marker');
});

test('it renders with checkbox toggle', function(assert) {
  this.render(hbs`
    {{#slds-control as |control|}}
      {{control.checkbox-toggle label='check'}}
    {{/slds-control}}
  `);

  assert.equal(this.$('.slds-form-element__label').length, 1, 'should only ahve one label');
  // assert.ok(this.$('div.slds-form-element .slds-form-element__control .slds-checkbox input').length);
  // assert.equal(this.$('input').attr('type'), 'checkbox');
});
