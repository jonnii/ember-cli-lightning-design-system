import Ember from 'ember';

export default Ember.Mixin.create({
  formElementId: Ember.computed('elementId', function() {
    let elementId = this.get('elementId');
    return `${elementId}-field`;
  }),

  errorElementId: Ember.computed('elementId', function() {
    let elementId = this.get('elementId');
    return `${elementId}-error`;
  })
});
