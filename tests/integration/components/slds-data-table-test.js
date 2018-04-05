import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds data table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{#slds-data-table}}
        template block text
      {{/slds-data-table}}
    `);

    assert.ok(findAll('table.slds-table').length, 'template block text');
  });

  test('it renders with properties', async function(assert) {
    await render(hbs`
      {{#slds-data-table bordered=true cellBuffer=true striped=true}}
        template block text
      {{/slds-data-table}}
    `);

    assert.ok(
      findAll('table.slds-table.slds-table_bordered.slds-table_cell-buffer.slds-table_striped').length,
      'template block text'
    );
  });
});
