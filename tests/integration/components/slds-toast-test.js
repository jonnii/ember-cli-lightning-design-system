import { find, findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-toast', 'Integration | Component | slds toast', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-toast}}`);

  assert.equal(find('.slds-notify').getAttribute('role'), 'alert');
  assert.ok(findAll('.slds-theme_info').length);
  assert.equal(find('.slds-notify > .slds-assistive-text').textContent.trim(), 'info');
});

test('it renders success theme', function(assert) {
  this.render(hbs`{{slds-toast theme='success'}}`);

  assert.ok(findAll('.slds-theme_success').length);
  assert.equal(find('.slds-notify > .slds-assistive-text').textContent.trim(), 'success');
});

test('it renders warning theme', function(assert) {
  this.render(hbs`{{slds-toast theme='warning'}}`);

  assert.ok(findAll('.slds-theme_warning').length);
});

test('it renders error theme', function(assert) {
  this.render(hbs`{{slds-toast theme='error'}}`);

  assert.ok(findAll('.slds-theme_error').length);
});
