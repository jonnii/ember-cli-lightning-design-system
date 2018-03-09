import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    toggleBanner() {
      this.controller.toggleProperty('showBanner');
    }
  }
});
