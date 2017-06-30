// var apiKey = require('/./.env').apiKey;
var apiKey = "86fdbbdf4e570a36d261a26774e17f6384d6d822"
Person = function () {

}
Person.prototype.getRepos = function(){
    var info = $("#name").val()
  $.get('https://api.github.com/users/' + info + '?access_token=' + apiKey).then(function(response){
    // displayFunction(information, response);
    console.log(response.avatar_url);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.personModule = Person;
