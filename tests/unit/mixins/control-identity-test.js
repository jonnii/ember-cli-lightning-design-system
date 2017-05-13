import Ember from 'ember';
import ControlIdentityMixin from 'ember-cli-lightning-design-system/mixins/control-identity';
import { module, test } from 'qunit';

module('Unit | Mixin | control identity');

// Replace this with your real tests.
test('it works', function(assert) {
  let ControlIdentityObject = Ember.Object.extend(ControlIdentityMixin);
  let subject = ControlIdentityObject.create();
  assert.ok(subject);
});
