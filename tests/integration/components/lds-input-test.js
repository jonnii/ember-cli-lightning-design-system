import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-input', 'Integration | Component | lds input', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  this.render(hbs`{{lds-input}}`);

  // assert.equal(this.$().text().trim(), '');

  // // Template block usage:
  // this.render(hbs`
  //   {{#lds-input}}
  //     template block text
  //   {{/lds-input}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
