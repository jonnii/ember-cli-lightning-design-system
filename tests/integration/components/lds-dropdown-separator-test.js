import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-dropdown-separator', 'Integration | Component | lds dropdown separator', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-dropdown-separator}}`);

  assert.equal(this.$().text().trim(), '');
});
