import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-alert', 'Integration | Component | lds alert', {
  integration: true
});

test('it renders with text', function(assert) {
  this.render(hbs`{{lds-alert text='sorry not sorry'}}`);

  assert.equal(this.$('h2').text().trim(), 'sorry not sorry');
});

test('it renders with block', function(assert) {
  this.render(hbs`{{lds-alert text='sorry not sorry'}}`);

  assert.equal(this.$('h2').text().trim(), 'sorry not sorry');
});
