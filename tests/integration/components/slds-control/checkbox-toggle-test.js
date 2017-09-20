import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control/checkbox-toggle', 'Integration | Component | slds control/checkbox toggle', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-control/checkbox-toggle}}`);

  assert.ok(this.$('label.slds-checkbox_toggle.slds-grid').length);
  assert.equal(
    this.$('.slds-checkbox_on')
      .text()
      .trim(),
    'Enabled'
  );

  assert.equal(
    this.$('.slds-checkbox_off')
      .text()
      .trim(),
    'Disabled'
  );
});

test('it renders with custom option labels', function(assert) {
  this.render(hbs`{{slds-control/checkbox-toggle enabledText='Yes' disabledText='No'}}`);

  assert.equal(
    this.$('.slds-checkbox_on')
      .text()
      .trim(),
    'Yes'
  );

  assert.equal(
    this.$('.slds-checkbox_off')
      .text()
      .trim(),
    'No'
  );
});

test('it renders with disabled', function(assert) {
  this.render(hbs`{{slds-control/checkbox-toggle isDisabled=true}}`);

  assert.ok(this.$('input:disabled'));
});
