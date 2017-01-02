import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('ocrsession', params.ocrsession_id);
  },

  actions: {

    saveOcrSession(newOcrSession) {
      newOcrSession.save().then(() => this.transitionTo('sessions'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
