// var apiKey = require('/./.env').apiKey;
var apiKey = "ed45430676946096b5d28100794ddfa6a1c8cc8d"
var userInput = $("#name").val("");

exports.getRepos = function(information, displayFunction){
  $.get('https://api.github.com/users/daneden?access_token=' + userInput + '&appid=' + apiKey).then(function(response){
    displayFunction(information, response.);
    console.log(response);
  }).fail(function(error){
    $(). (error)
    console.log(error.responseJSON.message);
  });
}

exports.
