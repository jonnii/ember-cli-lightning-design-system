import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-menu-separator', 'Integration | Component | lds menu separator', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-menu-separator}}`);

  assert.equal(this.$().text().trim(), '');
});
