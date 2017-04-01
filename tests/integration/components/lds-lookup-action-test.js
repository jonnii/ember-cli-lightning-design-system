import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-lookup-action', 'Integration | Component | lds lookup action', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lds-lookup-action}}`);

  assert.equal(this.$().text().trim(), '');

  // // Template block usage:
  // this.render(hbs`
  //   {{#lds-lookup-action}}
  //     template block text
  //   {{/lds-lookup-action}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
