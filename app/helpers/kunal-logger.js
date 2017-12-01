import Ember from 'ember';

export function kunalLogger(params/*, hash*/) {
  console.log('HELLO THERE');
  console.log(params);
  return params;
}

export default Ember.Helper.helper(kunalLogger);
