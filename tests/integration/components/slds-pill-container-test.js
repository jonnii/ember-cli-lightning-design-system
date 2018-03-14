import { findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-pill-container', 'Integration | Component | slds pill container', {
  integration: true
});

test('it renders with pills', function(assert) {
  this.render(hbs`
    {{#slds-pill-container as |container|}}
      {{container.pill}}
      {{container.pill}}
      {{container.pill}}
    {{/slds-pill-container}}
  `);

  assert.equal(findAll('.slds-pill').length, 3);
});
