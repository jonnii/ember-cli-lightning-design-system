import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-menu', 'Integration | Component | lds menu', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);
  this.render(hbs`{{lds-menu}}`);
  // assert.equal(this.$().text().trim(), '');
});
