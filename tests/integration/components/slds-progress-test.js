import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-progress', 'Integration | Component | slds progress', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-progress}}`);
  
  assert.equal(this.$('.slds-progress-bar .slds-assistive-text').text().trim(), 'Progress: 0%');
});

test('it renders with progress', function(assert) {
  this.render(hbs`{{slds-progress value=80}}`);
  
  assert.equal(this.$('.slds-progress-bar .slds-assistive-text').text().trim(), 'Progress: 80%');
});
