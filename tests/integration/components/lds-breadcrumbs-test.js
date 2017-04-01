import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-breadcrumbs', 'Integration | Component | lds breadcrumbs', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lds-breadcrumbs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lds-breadcrumbs}}
      template block text
    {{/lds-breadcrumbs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
