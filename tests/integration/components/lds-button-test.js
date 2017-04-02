import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lds-button', 'Integration | Component | lds button', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{lds-button}}`);
  assert.equal(this.$().text().trim(), 'Submit');
  assert.equal(this.$('button').attr('class').trim(), 'slds-button');
  assert.notOk(this.$('button').is('[disabled=disabled]'));
});

test('it renders with type brand', function(assert) {
  this.render(hbs`{{lds-button type='brand'}}`);
  assert.equal(this.$('button').attr('class').trim(), 'slds-button slds-button--brand');
});

test('it renders disabled', function(assert) {
  this.render(hbs`{{lds-button type='brand' disabled=true}}`);
  assert.ok(this.$('button:disabled'));
});

test('it is clickable', function(assert) {
  assert.expect(1);

  this.set('externalAction', (message) => {
    assert.equal(message, 'pressed');
  });

  this.render(hbs`{{lds-button type='brand' clicked=(action externalAction 'pressed')}}`);
  this.$('button').click();
});