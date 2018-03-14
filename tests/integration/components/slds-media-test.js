import { findAll, find } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-media', 'Integration | Component | slds media', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#slds-media as |media|}}
      {{#media.figure}}figure{{/media.figure}}
      {{#media.body}}body{{/media.body}}
    {{/slds-media}}
  `);

  assert.equal(find('.slds-media__figure').textContent.trim(), 'figure');
  assert.equal(find('.slds-media__body').textContent.trim(), 'body');
});

test('it renders centered', function(assert) {
  this.render(hbs`
    {{#slds-media alignment='center' as |media|}}
      {{#media.figure}}figure{{/media.figure}}
      {{#media.body}}body{{/media.body}}
    {{/slds-media}}
  `);

  assert.ok(findAll('.slds-media.slds-media--center').length);
});
