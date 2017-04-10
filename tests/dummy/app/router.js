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
    this.route('icon');
    this.route('breadcrumb');
    this.route('button-group');
    this.route('button-icon');
    this.route('menu');
    this.route('form');
    this.route('global-header');
    this.route('image');
    this.route('progress');
    this.route('popover');
    this.route('form-horizontal');
    this.route('form-controls');
    this.route('card');
    this.route('pill');
  });
});

export default Router;
