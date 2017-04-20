import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-dropdown', 'Integration | Component | slds dropdown', {
  integration: true
});

test('it renders with nubbin', function(assert) {
  this.render(hbs`{{slds-dropdown nubbin='topRight'}}`);

  assert.ok(this.$('.slds-dropdown.slds-nubbin--top-right').length);
});
