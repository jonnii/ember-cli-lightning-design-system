import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-lookup-action', 'Integration | Component | slds lookup action', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{slds-lookup-action}}`);

  assert.equal(this.$().text().trim(), '');

  // // Template block usage:
  // this.render(hbs`
  //   {{#slds-lookup-action}}
  //     template block text
  //   {{/slds-lookup-action}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
