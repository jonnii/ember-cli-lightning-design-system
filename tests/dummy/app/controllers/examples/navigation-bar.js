import Controller from '@ember/controller';

export default Controller.extend({
  numTimesClicked: 0,

  actions: {
    clicked() {
      this.incrementProperty('numTimesClicked');
    }
  }
});
