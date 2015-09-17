define(["hbs", "hbs!../templates/songs", "hbs!../templates/artists", "hbs!../templates/albums"],
function(handlebars, songTemplate, artistTemplate, albumTemplate) {

	return {
		songTemplate: function(firebaseObject) {
			// console.log("song template returned");
			return songTemplate(firebaseObject);
		},
		artistTemplate: function(firebaseObject) {
			// console.log("artist template returned");
			return artistTemplate(firebaseObject);
		},
		albumTemplate: function (firebaseObject) {
			// console.log("album template returned");
			return albumTemplate(firebaseObject);
		}
	};

});