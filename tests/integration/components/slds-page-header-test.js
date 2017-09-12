import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-page-header', 'Integration | Component | slds page header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#slds-page-header}}
      template block text
    {{/slds-page-header}}
  `);

  assert.ok(this.$('.slds-page-header').length);
});
