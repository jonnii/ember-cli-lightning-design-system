import { findAll } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slds card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
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

    assert.ok(findAll('article.slds-card').length);
    assert.ok(findAll('article.slds-card .slds-card__header').length, 'has header');
    assert.ok(findAll('article.slds-card .slds-card__body.slds-card__body_inner').length, 'has body');
    assert.ok(findAll('article.slds-card footer.slds-card__footer').length, 'has footer');
  });
});
