requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
  },

  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

require(
	//Try changing that ^ require to define to see if it makes a difference 
  ["jquery", "lodash", "firebase", "bootstrap", "getUnique",
   "getTemplates"], 
   function($, _, firebase, bootstrap, unique, templates) {
    var allSongsObject = {};
    var allSongsArray = [];
    var originalSongsArray = [];



    // Create a reference to your Firebase database
    var myFirebaseRef = new Firebase("https://scorching-heat-1482.firebaseio.com");

    // Listen for when anything changes on the "songs" key
    myFirebaseRef.child("songs").on("value", function(snapshot) {

    	// console.log('snapshot.val()', snapshot.val());

    	// Store the entire songs key in a local variable
    	var songs = snapshot.val();

      // Empty out the module-level song array
      allSongsArray = [];

      // Convert Firebase's object of objects into an array of objects
      for (var currentKey in songs) {
        allSongsArray[allSongsArray.length] = songs[currentKey];
      }

      // Now create my base object that will get bound to the 
      // song list Handlebar template (Handlebar templates
      // always need objects)
      allSongsObject = { songs: allSongsArray };

      /*
        Create a copy of the allSongsArray so that when
        the user clicks the "Clear Filter" button, we can 
        set it back to the original data.
       */
      originalSongsArray = allSongsArray.slice();

      // Bind the song object to the song list template
      $("#populateSongs").html(templates.songs(allSongsObject));
      // console.log('allSongsObject', allSongsObject);

      // Make an array of unique artist names
      var uniqueArtists = unique(allSongsArray).uniqueArtists;

      // console.log('uniqueArtists', uniqueArtists);

      // Bind the unique artists to the filteredArtists template
      $("#artistDrop").html(templates.artists({artists: uniqueArtists }));

      console.log('{artists: uniqueArtists', {artists: uniqueArtists});

      // Make an array of unique album names
      var uniqueAlbums = unique(allSongsArray).uniqueAlbums;

      // console.log('uniqueAlbums', uniqueAlbums);

      // Bind the unique albums to the filteredAlbums template
      $("#albumDrop").html(templates.albums({albums: uniqueAlbums }));  

      // console.log('{albums: uniqueAlbums', {albums: uniqueAlbums});

  });

});

