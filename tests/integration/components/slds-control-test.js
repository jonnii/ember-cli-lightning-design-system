import { find, findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds control', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with input', async function(assert) {
    await render(hbs`
      {{#slds-control label='Required Field' as |control|}}
        {{control.input placeholder='placeholder text'}}
      {{/slds-control}}
    `);

    assert.dom('.slds-form-element label.slds-form-element__label').hasAttribute('for', find('input.slds-input').id);
  });

  test('it renders with textarea', async function(assert) {
    await render(hbs`
      {{#slds-control label='Required Field' as |control|}}
        {{control.textarea}}
      {{/slds-control}}
    `);

    assert.ok(findAll('div.slds-form-element .slds-form-element__control textarea.slds-textarea').length);
  });

  test('it renders with checkbox', async function(assert) {
    await render(hbs`
      {{#slds-control as |control|}}
        {{control.checkbox label='check'}}
      {{/slds-control}}
    `);

    assert.dom('.slds-form-element__label').exists({ count: 1 }, 'should only have one label');
    assert.ok(findAll('div.slds-form-element .slds-form-element__control .slds-checkbox input').length);
    assert.dom('input').hasAttribute('type', 'checkbox');
  });

  test('it renders with checkbox required', async function(assert) {
    await render(hbs`
      {{#slds-control isRequired=true as |control|}}
        {{control.checkbox label='check'}}
      {{/slds-control}}
    `);

    assert.ok(findAll('div.slds-form-element .slds-form-element__control .slds-checkbox input').length);
    assert.dom('input').hasAttribute('type', 'checkbox');
    assert.dom('.slds-required').exists({ count: 1 }, 'should show required marker');
  });

  test('it renders with checkbox toggle', async function(assert) {
    await render(hbs`
      {{#slds-control as |control|}}
        {{control.checkbox-toggle label='check'}}
      {{/slds-control}}
    `);

    assert.dom('.slds-form-element__label').exists({ count: 1 }, 'should only have one label');
    assert.ok(findAll('div.slds-form-element .slds-checkbox_toggle').length);
  });

  test('it renders with combobox', async function(assert) {
    await render(hbs`
      {{#slds-control label='label' as |control|}}
        {{control.combobox}}
      {{/slds-control}}
    `);

    assert.dom('.slds-form-element__label').exists({ count: 1 }, 'should only have one label');
    assert.ok(findAll('div.slds-form-element .slds-form-element__control .slds-combobox_container').length);
  });

  test('it renders with select required and errored', async function(assert) {
    await render(hbs`
      {{#slds-control label='Awesome select (required)' isRequired=true isError=true errorMessage='select a friend' as |control|}}
        {{control.select
          options=(array 'bob' 'jeff' 'tim')
          selected='tim'
        }}
      {{/slds-control}}
    `);

    assert.dom('.slds-form-element.slds-has-error').exists('has errored element');
  });
});
