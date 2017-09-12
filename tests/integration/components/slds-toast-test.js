import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-toast', 'Integration | Component | slds toast', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-toast}}`);

  assert.equal(this.$('.slds-notify').attr('role'), 'alert');
  assert.ok(this.$('.slds-theme_info').length);
  assert.equal(
    this.$('.slds-notify > .slds-assistive-text')
      .text()
      .trim(),
    'info'
  );
});

test('it renders success theme', function(assert) {
  this.render(hbs`{{slds-toast theme='success'}}`);

  assert.ok(this.$('.slds-theme_success').length);
  assert.equal(
    this.$('.slds-notify > .slds-assistive-text')
      .text()
      .trim(),
    'success'
  );
});

test('it renders warning theme', function(assert) {
  this.render(hbs`{{slds-toast theme='warning'}}`);

  assert.ok(this.$('.slds-theme_warning').length);
});

test('it renders error theme', function(assert) {
  this.render(hbs`{{slds-toast theme='error'}}`);

  assert.ok(this.$('.slds-theme_error').length);
});
