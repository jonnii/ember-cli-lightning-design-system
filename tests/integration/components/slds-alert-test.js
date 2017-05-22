import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-alert', 'Integration | Component | slds alert', {
  integration: true
});

test('it renders with text', function(assert) {
  this.render(hbs`{{slds-alert text='sorry not sorry'}}`);

  assert.equal(this.$('h2').text().trim(), 'sorry not sorry');
  assert.equal(this.$('.slds-notify').attr('role'), 'alert');
  assert.ok(this.$('.slds-theme_info').length);
  assert.equal(this.$('.slds-notify > .slds-assistive-text').text().trim(), 'info');
});

test('it renders with block', function(assert) {
  this.render(hbs`{{slds-alert text='sorry not sorry'}}`);

  assert.equal(this.$('h2').text().trim(), 'sorry not sorry');
});

test('it renders with theme error', function(assert) {
  this.render(hbs`{{slds-alert theme='error'}}`);

  assert.ok(this.$('.slds-theme_error').length);
});

test('it renders with close button', function(assert) {
  this.set('onClosed', message => {
    assert.equal(message, 'pressed');
  });

  this.render(hbs`{{slds-alert closed=onClosed}}`);

  assert.ok(this.$('.slds-notify__close').length);
});
