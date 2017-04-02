import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-navigation-action', 'Integration | Component | lds navigation action', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lds-navigation-action}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lds-navigation-action}}
      template block text
    {{/lds-navigation-action}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
