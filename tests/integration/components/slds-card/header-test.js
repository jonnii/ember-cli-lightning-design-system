import { find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-card/header', 'Integration | Component | slds card/header', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{slds-card/header}}`);

  assert.equal(find('.slds-card__header').textContent.trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#slds-card/header}}
      template block text
    {{/slds-card/header}}
  `);

  assert.equal(find('.slds-card__header').textContent.trim(), 'template block text');
});
