import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-navigation-section', 'Integration | Component | lds navigation section', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lds-navigation-section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lds-navigation-section}}
      template block text
    {{/lds-navigation-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
