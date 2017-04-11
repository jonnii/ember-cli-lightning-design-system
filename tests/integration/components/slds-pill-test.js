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

test('it renders with error', function(assert) {
  this.render(hbs`{{slds-pill isError=true}}`);

  assert.equal(this.$('.slds-pill').attr('class').trim(), 'slds-pill slds-has-error ember-view');
  assert.equal(this.$('.slds-icon_container').attr('class'), 'slds-icon_container slds-pill__icon_container slds-m-left--xx-small');
});
