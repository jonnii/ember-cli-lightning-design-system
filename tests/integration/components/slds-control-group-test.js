import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control-group', 'Integration | Component | slds control group', {
  integration: true
});

test('it renders legend', function(assert) {
  this.render(hbs`{{slds-control-group legend='choose your fate'}}`);

  assert.equal(this.$('legend').text().trim(), 'choose your fate');
  assert.notOk(this.$('.slds-required').length);
});

test('it renders required', function(assert) {
  this.render(hbs`{{slds-control-group isRequired=true}}`);

  assert.ok(this.$('.slds-required').length);
});

test('it renders checkbox checked', function(assert) {
  this.render(hbs`
    {{#slds-control-group label='choose your fate' as |input|}}
      {{input.checkbox isChecked=true}}
    {{/slds-control-group}}
  `);

  assert.ok(this.$('input:checked'));
});

test('it renders checkbox with name', function(assert) {
  this.render(hbs`
    {{#slds-control-group name='fates' as |input|}}
      {{input.checkbox isChecked=true}}
    {{/slds-control-group}}
  `);

  assert.equal(this.$('input').attr('name'), 'fates');
});

test('it renders radio', function(assert) {
  this.render(hbs`
    {{#slds-control-group name='fates' as |input|}}
      {{input.radio}}
    {{/slds-control-group}}
  `);

  assert.equal(this.$('input').attr('name'), 'fates');
});

test('it renders radio with error', function(assert) {
  this.render(hbs`
    {{#slds-control-group name='fates' isError=true errorMessage='you fell over' as |input|}}
      {{input.radio}}
    {{/slds-control-group}}
  `);

  assert.equal(this.$('.slds-form-element__help').text().trim(), 'you fell over');
});
