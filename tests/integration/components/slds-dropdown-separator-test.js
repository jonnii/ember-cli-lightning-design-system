import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-dropdown-separator', 'Integration | Component | slds dropdown separator', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-dropdown-separator}}`);

  assert.equal(this.$().text().trim(), '');
});
