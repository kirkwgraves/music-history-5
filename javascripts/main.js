require(["jquery", "hbs", "populate-songs", "getUnique"], 
function($, Handlebars, populateSongs, unique) {
  var uniqueArtists;  
  var uniqueAlbums;  

  populateSongs.getSongs(function(firebaseObject){

    uniqueArtists = unique(firebaseObject.songs).uniqueArtists;
    uniqueAlbums = unique(firebaseObject.songs).uniqueAlbums;

    console.log('firebaseObject', firebaseObject);

    require(['hbs!../templates/songs'], function(songTemplate) {
      $("#populateSongs").html(songTemplate(firebaseObject));

      console.log('song template', songTemplate);
    });

    require(['hbs!../templates/artists'], function(artistTemplate) {
     console.log('uniqueArtists', uniqueArtists);

      $("#artistDrop").html(artistTemplate({artist: uniqueArtists}));

      console.log('artist template', artistTemplate);
    });

    require(['hbs!../templates/albums'], function(albumTemplate) {
      console.log('uniqueAlbums', uniqueAlbums);

      $("#albumDrop").html(albumTemplate({album: uniqueAlbums}));

      console.log('album template', albumTemplate);


    });

  });

});
