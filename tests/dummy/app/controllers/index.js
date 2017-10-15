import Controller from '@ember/controller';

export default Controller.extend({
  isFollowing: false,

  actions: {
    statefulButtonPressed() {
      this.toggleProperty('isFollowing');
    }
  }
});
