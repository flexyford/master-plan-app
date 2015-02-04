import Ember from 'ember';
import data from '../data/data';

export default Ember.Route.extend({

  model: function() {
    this.store.pushPayload('event', data);
    return this.store.all('event');
  },

  actions: {
    search: function(query){
      var _this = this;
      var store = this.store;
      var location = query.location;
      store.find('event', query)
      .then(function(result){
        _this.set("model", result);
        alert('Requested Events for ' + location + '!');
      })
      .catch(function(){
        alert('Failed to request Events for ' + location + '!');
      });
    }
  }
});
