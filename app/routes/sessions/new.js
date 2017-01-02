import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('ocrsession');
  },

  actions: {

    saveOcrSession(newOcrSession) {
      newOcrSession.save().then(() => this.transitionTo('sessions'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
