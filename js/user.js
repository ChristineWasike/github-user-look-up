// var apiKey = require('/./.env').apiKey;
var apiKey = "86fdbbdf4e570a36d261a26774e17f6384d6d822"
Person = function() {

}
Repo = function() {

}
Person.prototype.getRepos = function() {
  var info = $("#name").val()
  $.get('https://api.github.com/users/' + info + '/repos?access_token=' + apiKey).then(function(response) {
    for (var i = 0; i < response.length; i++) {
      $('#repos').append('<li>'+response[i].name+'</li>')
      console.log(response[i]);
    }
    // displayFunction(information, response);
    //console.log(response);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
}

exports.personModule = Person;
