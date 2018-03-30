import { find, findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-alert', 'Integration | Component | slds alert', {
  integration: true
});

test('it renders with text', function(assert) {
  this.render(hbs`{{slds-alert text='sorry not sorry'}}`);

  assert.equal(find('h2').textContent.trim(), 'sorry not sorry');
  assert.equal(find('.slds-notify').getAttribute('role'), 'alert');
  assert.ok(findAll('.slds-theme_info').length);
  assert.equal(find('.slds-notify > .slds-assistive-text').textContent.trim(), 'info');
});

test('it renders with block', function(assert) {
  this.render(hbs`{{slds-alert text='sorry not sorry'}}`);

  assert.equal(find('h2').textContent.trim(), 'sorry not sorry');
});

test('it renders with theme error', function(assert) {
  this.render(hbs`{{slds-alert theme='error'}}`);

  assert.ok(findAll('.slds-theme_error').length);
});

test('it renders with close button', function(assert) {
  this.set('onClosed', message => {
    assert.equal(message, 'pressed');
  });

  this.render(hbs`{{slds-alert closed=onClosed}}`);

  assert.ok(findAll('.slds-notify__close').length);
});
