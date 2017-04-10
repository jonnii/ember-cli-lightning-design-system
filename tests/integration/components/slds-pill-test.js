import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-pill', 'Integration | Component | slds pill', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-pill}}`);

  assert.equal(this.$('button').attr('class').trim(), 'slds-pill__remove slds-button slds-button--icon ember-view');
  assert.equal(this.$('a').text().trim(), 'Label');
});

test('it renders with label', function(assert) {
  this.render(hbs`{{slds-pill label='awesome label'}}`);

  assert.equal(this.$('button').attr('class').trim(), 'slds-pill__remove slds-button slds-button--icon ember-view');
  assert.equal(this.$('a').text().trim(), 'awesome label');
});
