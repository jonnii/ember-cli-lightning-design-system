import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-progress-bar', 'Integration | Component | slds progress bar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-progress-bar}}`);

  assert.equal(this.$('.slds-assistive-text').text().trim(), 'Progress: 0%');
});

test('it renders with value', function(assert) {
  this.render(hbs`{{slds-progress-bar value=80}}`);

  assert.equal(this.$('.slds-assistive-text').text().trim(), 'Progress: 80%');
});
