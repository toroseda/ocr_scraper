// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',

  // isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  // We only want to allow emails within the corporate domain
  isValid: Ember.computed.match('emailAddress', /^.+@etisalat\.ae/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveAccessRequest(){

	// alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);

	const email = this.get('emailAddress');

	const newInvitation = this.store.createRecord('accessrequest', { email: email });
	newInvitation.save().then((response) => {
    this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
    this.set('emailAddress', '');
  });

	//this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
	//this.set('emailAddress', '');
    }
  }

});
