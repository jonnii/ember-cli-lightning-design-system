import { findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-form', 'Integration | Component | slds form', {
  integration: true
});

test('it renders stacked', function(assert) {
  this.render(hbs`{{slds-form}}`);

  assert.ok(findAll('.slds-form.slds-form_stacked').length);
});

test('it renders horizontal', function(assert) {
  this.render(hbs`{{slds-form type='horizontal'}}`);

  assert.ok(findAll('.slds-form.slds-form_horizontal').length);
});
