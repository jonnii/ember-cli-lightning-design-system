import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-tabs', 'Integration | Component | slds tabs', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
  {{#slds-tabs as |tabs|}}
    {{#tabs.nav as |nav|}}
      {{nav.item}}
    {{/tabs.nav}}
    {{tabs.content}}
  {{/slds-tabs}}
  `);

  assert.ok(this.$('div.slds-tabs_default').length, 'has container');
  assert.ok(this.$('div.slds-tabs_default ul.slds-tabs_default__nav').length, 'has nav');
  assert.ok(this.$('div.slds-tabs_default ul.slds-tabs_default__nav[role=tablist]').length, 'has role tablist');
});
