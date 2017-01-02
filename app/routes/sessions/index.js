import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ocrsession');
  },

  actions: {

    deleteOcrSession(ocrsession) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        ocrsession.destroyRecord();
      }
    }
  }
});
