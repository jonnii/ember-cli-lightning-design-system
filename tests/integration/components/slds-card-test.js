import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-card', 'Integration | Component | slds card', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#slds-card as |card|}}
      {{#card.header}}
        header
      {{/card.header}}
      {{#card.body}}
        body
      {{/card.body}}
      {{#card.footer}}
        footer
      {{/card.footer}}
    {{/slds-card}}
  `);

  assert.ok(this.$('article.slds-card').length);
  assert.ok(this.$('article.slds-card .slds-card__header').length, 'has header');
  assert.ok(this.$('article.slds-card .slds-card__body.slds-card__body_inner').length, 'has body');
  assert.ok(this.$('article.slds-card footer.slds-card__footer').length, 'has footer');
});
