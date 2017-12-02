import DS from 'ember-data';
import config from 'final-project/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.apiHOST,
  namespace: api,

});
