define(["hbs",
        "hbs!../templates/songs",
        "hbs!../templates/artists",
        "hbs!../templates/albums"], 
function(Handlebars, songTemplate, artistTemplate, albumTemplate) {

	//console.log("templates", Handlebars);

  var templates = {};
  // Create empty object to contain my hbs templates
  templates.songs = songTemplate;
  // Assign the key of songs to my object and set it equal to the value of my songs template
  templates.artists = artistTemplate;
  // Assign the key of songs to my object and set it equal to the value of my artist template
  templates.albums = albumTemplate;
  // Assign the key of songs to my object and set it equal to the value of my album template
  return templates;
});