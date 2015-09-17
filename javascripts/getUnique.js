define(['lodash'], function(_) {
	return function(allSongsArray) {

		var uniqueArtists = _.chain(allSongsArray).uniq('artist').pluck('artist')	.value();

  	var uniqueAlbums = _.chain(allSongsArray).uniq('album').pluck('album').value();

  	return {
  		uniqueArtists: uniqueArtists,
  		uniqueAlbums: uniqueAlbums
  	};

	};

});