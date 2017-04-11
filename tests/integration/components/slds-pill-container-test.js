import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-pill-container', 'Integration | Component | slds pill container', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{slds-pill-container}}`);
  assert.expect(0);

  // assert.equal(this.$().text().trim(), '');

  // // Template block usage:
  // this.render(hbs`
  //   {{#slds-pill-container}}
  //     template block text
  //   {{/slds-pill-container}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
