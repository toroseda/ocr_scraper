import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');

  this.route('admin', function() {
    this.route('accessrequests');
  });

  this.route('sessions', function() {
    this.route('new');
    this.route('edit', { path: '/:ocrsession_id/edit' });
  });
});

export default Router;
