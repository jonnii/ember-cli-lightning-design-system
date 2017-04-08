import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-textarea', 'Integration | Component | slds textarea', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  this.render(hbs`{{slds-textarea}}`);

  // assert.equal(this.$().text().trim(), '');

  // // Template block usage:
  // this.render(hbs`
  //   {{#slds-textarea}}
  //     template block text
  //   {{/slds-textarea}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
