define(["populate-songs", "populate-filter-form"], function(populateSongs, filterForm) {
		return function(callback) {
    	
    	populateSongs.getSongs(function(songObject) {
      require(['hbs!../templates/songs'], function(songTemplate) {
        $("populateSongs").html(songTemplate(songObject));
      });

      filterForm(songObject);
     // callback(songObject);
    });
  };
});