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
    {{#slds-control label='check' as |control|}}
      {{control.checkbox}}
    {{/slds-control}}
  `);

  assert.equal(this.$('input').attr('type'), 'checkbox');
});
