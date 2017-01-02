import Ember from 'ember';

//export default Ember.Component.extend({
//});

import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({

  responseMessage : '',

  errorMessage :'' ,

  filesDidChange: function(files) {

    const uploader = EmberUploader.Uploader.create({
      // url: this.get('url')
      url: 'http://localhost:8080/upload'

    });

    if (!Ember.isEmpty(files)) {
      // this second argument is optional and can to be sent as extra data with the upload
      uploader.upload(files[0]).then(data => {
        // Handle success
        console.log("File " + data.responseMessage + " has been loaded successfully: ");
        this.set('responseMessage' ,'File loaded ok.');
      }, error => {
        // Handle failure
        console.log("Error uploading file: " + files[0] +" "+ error.message + " " + error.name);
        this.set('errorMessage' ,'Not having it - file not loaded oh!');
      });

      // Handle any upload errors
      uploader.on('didError', (jqXHR, textStatus, errorThrown) => {
        // Handle unsuccessful upload
        console.error('jqXHR error:' + jqXHR.errorThrown + ' Error Status: ' + textStatus + ' Error Thrown: ' + errorThrown);
        console.error('THIS IS THE Error Message: ' + this.get('errorMessage') );
      });

      // Handle when upload has finished
      uploader.on('didUpload', e => {
        // Handle finished upload
        console.log('Finished uploading: ' + e.code);
      });

      // Progress
      uploader.on('progress', e => {
        // Handle progress changes
        // Use `e.percent` to get percentage
        console.info('Progress : ' + e.percent);
      });
    }
  }


});
