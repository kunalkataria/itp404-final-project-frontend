define('final-project/router', ['exports', 'final-project/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('search');
    this.route('map');
    this.route('favorite-list');
  });

  exports.default = Router;
});