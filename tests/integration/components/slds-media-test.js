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

  assert.equal(this.$('.slds-media__figure').text().trim(), 'figure');
  assert.equal(this.$('.slds-media__body').text().trim(), 'body');
});
