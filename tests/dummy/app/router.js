import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('site-index');

  this.route('tests', function() {
    this.route('sustain');
    this.route('sustain-b');
    this.route('mobile-first');
    this.route('sustain-no-layout');
    this.route('sustain-labels');
    this.route('sustain-labels-2');
    this.route('sustain-hooks');
    this.route('sustain-classic-component');
  });

  this.route('docs', function() {
    this.route('index', { path: '/' });
    this.route('overview');
    this.route('sustain');
    this.route('installation');
    this.route('blueprints');
    this.route('settings');
  });

  this.route('guides', function() {
    this.route('overview', { path: '/' });
  });

  this.route('classic-layout-test');
  this.route('faq', function() {
    this.route('css-frameworks');
  });
});

export default Router;
