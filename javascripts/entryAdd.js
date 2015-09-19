requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
  },

  shim: {
    'bootstrap': ['jquery'],
  }
});

require(['jquery', 'hbs', 'bootstrap', 'loadSongs'], function($, Handlebars, bootstrap, loadSongs) {

	$("#addSong").click(function(e) {

		console.log('button is clicked');

	  var newSong = {
	    "name": $("#songName").val(),
	    "artist": $("#artistName").val(),
	    "album": 	$("#albumName").val(),
	    "year":  parseInt($("#albumYear").val(), 10)
	   };

    console.log("newSong",newSong);

    $.ajax({
	      url: "https://scorching-heat-1482.firebaseio.com/songs.json",
	      method: "POST",
	      data: JSON.stringify(newSong)
    	}).done(function(addedSong) {      
      console.log("Your new song is", addedSong);
      });
  	});


});