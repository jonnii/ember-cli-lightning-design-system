import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    navigateTo(route) {
      this.transitionTo(route);
    }
  }
});
