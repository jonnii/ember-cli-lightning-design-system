import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-card', 'Integration | Component | slds card', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-card}}`);

  assert.ok(this.$('header.slds-media.slds-media--center').length);
});
