import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    buttonClicked(option) {
      alert(`clicked it: ${option}`);
    }
  }
});
