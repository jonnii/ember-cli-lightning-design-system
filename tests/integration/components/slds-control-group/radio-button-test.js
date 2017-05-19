import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-control-group/radio-button', 'Integration | Component | slds control group/radio button', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{slds-control-group/radio-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#slds-control-group/radio-button}}
      template block text
    {{/slds-control-group/radio-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
