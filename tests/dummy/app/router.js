import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('examples', function() {
    this.route('navigation');
    this.route('lookup');
    this.route('notification');
    this.route('navigation-bar');
    this.route('button');
  });
});

export default Router;
