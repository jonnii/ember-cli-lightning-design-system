import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-menu-heading', 'Integration | Component | lds menu heading', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lds-menu-heading}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lds-menu-heading}}
      template block text
    {{/lds-menu-heading}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
