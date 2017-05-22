import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-toast', 'Integration | Component | slds toast', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-toast}}`);

  assert.equal(this.$('.slds-notify').attr('role'), 'alert');
});
