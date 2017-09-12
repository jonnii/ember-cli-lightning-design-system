import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-avatar', 'Integration | Component | slds avatar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-avatar}}`);

  assert.ok(this.$('span.slds-avatar.slds-avatar--medium').length);
  assert.equal(this.$('img').attr('src'), '/assets/images/avatar2.jpg');
  assert.equal(this.$('img').attr('alt'), 'default avatar');
});

test('it renders with type', function(assert) {
  this.render(hbs`{{slds-avatar type='circle'}}`);

  assert.ok(this.$('span.slds-avatar.slds-avatar--medium.slds-avatar--circle').length);
});

test('it renders with size', function(assert) {
  this.render(hbs`{{slds-avatar type='circle' size='small'}}`);

  assert.ok(this.$('span.slds-avatar.slds-avatar--small.slds-avatar--circle').length);
});

test('it renders with custom image', function(assert) {
  this.render(hbs`
    {{#slds-avatar}}
      <img src='bob'/>
    {{/slds-avatar}}
  `);

  assert.equal(this.$('img').attr('src'), 'bob');
});

test('it renders with name', function(assert) {
  this.render(hbs`{{slds-avatar name='Bobby Jenkins'}}`);

  assert.equal(this.$('abbr').attr('title'), 'Bobby Jenkins');
  assert.equal(
    this.$('abbr')
      .text()
      .trim(),
    'BJ'
  );
  assert.equal(this.$('abbr').attr('class'), 'slds-avatar__initials slds-icon-standard-account');
});

test('it renders with name with middlename', function(assert) {
  this.render(hbs`{{slds-avatar name='Bobby Tom Jenkins'}}`);

  assert.equal(this.$('abbr').attr('title'), 'Bobby Tom Jenkins');
  assert.equal(
    this.$('abbr')
      .text()
      .trim(),
    'BJ'
  );
});

test('it renders with company name', function(assert) {
  this.render(hbs`{{slds-avatar name='Megacorp'}}`);

  assert.equal(this.$('abbr').attr('title'), 'Megacorp');
  assert.equal(
    this.$('abbr')
      .text()
      .trim(),
    'Me'
  );
});

test('it renders with color', function(assert) {
  this.render(hbs`{{slds-avatar name='Bobby Jenkins' sprite='utility' icon='refresh'}}`);

  assert.equal(this.$('abbr').attr('class'), 'slds-avatar__initials slds-icon-utility-refresh');
});
