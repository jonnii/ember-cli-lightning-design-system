import { find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-card/footer', 'Integration | Component | slds card/footer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{slds-card/footer}}`);

  assert.equal(find('.slds-card__footer').textContent.trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#slds-card/footer}}
      template block text
    {{/slds-card/footer}}
  `);

  assert.equal(find('.slds-card__footer').textContent.trim(), 'template block text');
});
