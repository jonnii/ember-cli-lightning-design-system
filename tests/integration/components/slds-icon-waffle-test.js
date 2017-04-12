import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-icon-waffle', 'Integration | Component | slds icon waffle', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-icon-waffle}}`);

  assert.equal(this.$('.slds-icon-waffle').length, 1);
});
