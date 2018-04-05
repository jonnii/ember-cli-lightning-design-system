import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds control/input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{slds-control/input}}`);
    assert.ok(findAll('.slds-form-element__control').length, 'renders control element');
    assert.ok(findAll('.slds-form-element__control input').length, 'renders input');
  });

  test('it renders with icon (left)', async function(assert) {
    await render(hbs`{{slds-control/input icon='left'}}`);
    assert.ok(findAll('.slds-form-element__control.slds-input-has-icon.slds-input-has-icon_left input').length);
  });

  test('it renders with icon (right)', async function(assert) {
    await render(hbs`
      {{#slds-control/input icon='right' as |input|}}
        {{input.icon-left}}
        {{input.textbox}}
      {{/slds-control/input}}
    `);

    assert.ok(findAll('.slds-form-element__control.slds-input-has-icon.slds-input-has-icon_right input').length);
    assert.ok(
      findAll('.slds-form-element__control.slds-input-has-icon .slds-input__icon.slds-input__icon--left').length
    );
  });
});
