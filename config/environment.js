/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ocr-scraper',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

	  // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
       'script-src': "'self' 'unsafe-eval' apis.google.com",
       'frame-src': "'self' https://*.firebaseapp.com",
       'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com http://localhost:8080/ß"
     },

  // Initialize Firebase
	firebase: {
		apiKey: "AIzaSyDEQYE16RJen936BubOxU87nZPVEE4RrLs",
		authDomain: "ocr-scraper.firebaseapp.com",
		databaseURL: "https://ocr-scraper.firebaseio.com",
		storageBucket: "ocr-scraper.appspot.com",
		messagingSenderId: "382479633195"
	 }

  };

  if (environment === 'development') {
     // ENV.APP.LOG_RESOLVER = true;
     ENV.APP.LOG_ACTIVE_GENERATION = true;
     ENV.APP.LOG_TRANSITIONS = true;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
