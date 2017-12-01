define('final-project/helpers/kunal-logger', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.kunalLogger = kunalLogger;
  function kunalLogger(params /*, hash*/) {
    console.log('HELLO THERE');
    console.log(params);
    return params;
  }

  exports.default = Ember.Helper.helper(kunalLogger);
});