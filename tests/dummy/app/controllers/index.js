import Ember from 'ember';

export default Ember.Controller.extend({
  isFollowing: false,

  actions: {
    statefulButtonPressed() {
      this.toggleProperty('isFollowing');
    }
  }
});
