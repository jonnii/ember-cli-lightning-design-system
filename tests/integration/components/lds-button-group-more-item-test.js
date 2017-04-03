import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-button-group-more-item', 'Integration | Component | lds button group more item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-button-group-more-item}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#lds-button-group-more-item}}
      template block text
    {{/lds-button-group-more-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
