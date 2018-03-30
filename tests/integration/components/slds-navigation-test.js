import { findAll } from 'ember-native-dom-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slds-navigation', 'Integration | Component | slds navigation', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{slds-navigation}}`);

  assert.ok(findAll('.slds-grid.slds-grid--vertical.slds-navigation-list--vertical').length);
});

test('it renders inverse', function(assert) {
  this.render(hbs`{{slds-navigation type='inverse'}}`);

  assert.ok(
    findAll('.slds-grid.slds-grid--vertical.slds-navigation-list--vertical.slds-navigation-list--vertical-inverse')
      .length
  );
});
