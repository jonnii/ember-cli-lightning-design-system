import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-data-table', 'Integration | Component | slds data table', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#slds-data-table}}
      template block text
    {{/slds-data-table}}
  `);

  assert.ok(this.$('table.slds-table').length, 'template block text');
});

test('it renders with properties', function(assert) {
  this.render(hbs`
    {{#slds-data-table bordered=true cellBuffer=true striped=true}}
      template block text
    {{/slds-data-table}}
  `);

  assert.ok(
    this.$('table.slds-table.slds-table_bordered.slds-table_cell-buffer.slds-table_striped').length,
    'template block text'
  );
});
