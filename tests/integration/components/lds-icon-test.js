import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-icon', 'Integration | Component | lds icon', {
  integration: true
});

test('it renders default icon', function(assert) {
  this.render(hbs`{{lds-icon}}`);
  const icon = this.$('span.slds-icon_container');
  
  assert.equal(icon.attr('class').trim(), 'slds-icon_container slds-icon-standard-default');
  assert.notOk(icon.attr('title'));
  assert.equal(this.$('span.slds-assistive-text').length, 0);
});

test('it renders with description', function(assert) {
  this.render(hbs`{{lds-icon description='fancy description'}}`);
  const icon = this.$('span.slds-icon_container');
  
  assert.equal(icon.attr('class').trim(), 'slds-icon_container slds-icon-standard-default');
  assert.equal(icon.attr('title'), 'fancy description');
  assert.equal(this.$('.slds-assistive-text').text().trim(), 'fancy description');
});
