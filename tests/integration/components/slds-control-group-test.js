import { find, findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds control group', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders legend', async function(assert) {
    await render(hbs`{{slds-control-group legend='choose your fate'}}`);

    assert.equal(find('legend').textContent.trim(), 'choose your fate');
    assert.notOk(findAll('.slds-required').length);
  });

  test('it renders required', async function(assert) {
    await render(hbs`{{slds-control-group isRequired=true}}`);

    assert.ok(findAll('.slds-required').length);
  });

  test('it renders checkbox checked', async function(assert) {
    await render(hbs`
      {{#slds-control-group label='choose your fate' as |input|}}
        {{input.checkbox isChecked=true}}
      {{/slds-control-group}}
    `);

    assert.ok(findAll('input:checked').length);
    assert.ok(findAll('fieldset.slds-form-element .slds-form-element__control .slds-checkbox input').length);
    assert.ok(findAll('input:not([aria-describedby])').length, 'should not have aria description');
  });

  test('it renders checkbox with name', async function(assert) {
    await render(hbs`
      {{#slds-control-group name='fates' as |input|}}
        {{input.checkbox isChecked=true}}
      {{/slds-control-group}}
    `);

    assert.equal(find('input').getAttribute('name'), 'fates');
  });

  test('it renders checkbox with error', async function(assert) {
    await render(hbs`
      {{#slds-control-group name='fates' isError=true errorMessage='you fell over' as |input|}}
        {{input.checkbox}}
      {{/slds-control-group}}
    `);

    assert.equal(find('.slds-form-element__help').textContent.trim(), 'you fell over');

    // assert.ok(this.$('input[aria-describedby]').length, 'has aria description');
    // assert.equal(this.$('input').attr('aria-describedby'), this.$('.slds-form-element__help').attr('id'));
  });

  test('it renders radio', async function(assert) {
    await render(hbs`
      {{#slds-control-group name='fates' as |input|}}
        {{input.radio}}
      {{/slds-control-group}}
    `);

    assert.ok(findAll('input:not([aria-describedby])').length, 'should not have aria description');
    assert.equal(find('input').getAttribute('name'), 'fates');
  });

  test('it renders radio with error', async function(assert) {
    await render(hbs`
      {{#slds-control-group name='fates' isError=true errorMessage='you fell over' as |input|}}
        {{input.radio}}
      {{/slds-control-group}}
    `);

    assert.equal(find('.slds-form-element__help').textContent.trim(), 'you fell over');

    assert.ok(findAll('input[aria-describedby]').length, 'has aria description');
    assert.equal(find('input').getAttribute('aria-describedby'), find('.slds-form-element__help').id);
  });
});
