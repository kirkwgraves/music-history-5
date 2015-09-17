define(function() {
	return {
		getSongs: function(fnRefFromMainJS) {
	    $.ajax({
	    	url:"https://scorching-heat-1482.firebaseio.com/.json"
	    }).done(

	    	function(firebaseObject) {
	  //  	console.log("songs array from firebase", firebaseObject);
	    		fnRefFromMainJS(firebaseObject);
	    	}
	  	);
			
		}
	};	
});