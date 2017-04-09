import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-card', 'Integration | Component | slds card', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-card}}`);
  assert.expect(0);

  // assert.equal(this.$().text().trim(), '');

  // // Template block usage:
  // this.render(hbs`
  //   {{#slds-card}}
  //     template block text
  //   {{/slds-card}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
