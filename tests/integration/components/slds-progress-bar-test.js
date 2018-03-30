import { find, findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-progress-bar', 'Integration | Component | slds progress bar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-progress-bar}}`);

  assert.equal(find('.slds-assistive-text').textContent.trim(), 'Progress: 0%');
  assert.equal(find('.slds-progress-bar').getAttribute('aria-valuemin'), 0);
  assert.equal(find('.slds-progress-bar').getAttribute('aria-valuemax'), 100);
  assert.equal(find('.slds-progress-bar').getAttribute('aria-valuenow'), 0);
  assert.equal(find('.slds-progress-bar').getAttribute('role'), 'progressbar');
});

test('it renders with value', function(assert) {
  this.render(hbs`{{slds-progress-bar value=80}}`);

  assert.equal(find('.slds-assistive-text').textContent.trim(), 'Progress: 80%');
  assert.equal(find('.slds-assistive-text').textContent.trim(), 'Progress: 80%');
  assert.equal(find('.slds-progress-bar').getAttribute('aria-valuenow'), 80);
});

test('it renders with custom min max', function(assert) {
  this.render(hbs`{{slds-progress-bar minValue=20 maxValue=400}}`);

  assert.equal(find('.slds-progress-bar').getAttribute('aria-valuemin'), 20);
  assert.equal(find('.slds-progress-bar').getAttribute('aria-valuemax'), 400);
});

test('it renders with height', function(assert) {
  this.render(hbs`{{slds-progress-bar height='x-small'}}`);

  assert.ok(findAll('.slds-progress-bar.slds-progress-bar_x-small').length);
});

test('it renders with border', function(assert) {
  this.render(hbs`{{slds-progress-bar border='circular'}}`);

  assert.ok(findAll('.slds-progress-bar.slds-progress-bar_circular').length);
});
