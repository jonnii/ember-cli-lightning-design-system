import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-button-group', 'Integration | Component | lds button group', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  this.render(hbs`{{lds-button-group}}`);

  // assert.equal(this.$().text().trim(), 'More Actions');

  // Template block usage:
  this.render(hbs`
    {{#lds-button-group}}
      template block text
    {{/lds-button-group}}
  `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
