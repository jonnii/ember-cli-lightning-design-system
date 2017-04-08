import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-input', 'Integration | Component | slds input', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  this.render(hbs`{{slds-input}}`);

  // assert.equal(this.$().text().trim(), '');

  // // Template block usage:
  // this.render(hbs`
  //   {{#slds-input}}
  //     template block text
  //   {{/slds-input}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
