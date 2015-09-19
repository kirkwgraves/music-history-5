define(["jquery"], function($) {
  return function(dataObj) {
    console.log("Populate artist list select");
    require(['hbs!../templates/artists'], function(template) {
      $("#artistDrop").append(template(dataObject));
      console.log('dataObject for artistDrop', dataObject);
    });
    console.log("Populate album list select");
    require(['hbs!../templates/albums'], function(tmpl) {
      $("#albumDrop").append(template(dataObject));
    console.log('dataObject for albumDrop', dataObject);
    });
  };
});