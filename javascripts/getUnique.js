define(['lodash'], function(_) {
	return function(allSongsArray) {

	var uniqueArtists = _.chain(allSongsArray).pluck('artist').uniq().value();

  var uniqueAlbums = _.chain(allSongsArray).pluck('album').uniq().value();

  	return {
  		uniqueArtists: uniqueArtists,
  		uniqueAlbums: uniqueAlbums
  	};

	};

});