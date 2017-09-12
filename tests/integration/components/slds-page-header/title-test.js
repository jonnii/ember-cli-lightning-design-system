import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-page-header/title', 'Integration | Component | slds page header/title', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#slds-page-header/title}}
      template block text
    {{/slds-page-header/title}}
  `);

  assert.equal(
    this.$('h1.slds-page-header__title')
      .text()
      .trim(),
    'template block text'
  );
});
