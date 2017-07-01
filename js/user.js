var apiKey = "86fdbbdf4e570a36d261a26774e17f6384d6d822"
// var apiKey = require('/./.env').apiKey;
Person = function() {

}
// Repo = function() {
//
// }
Person.prototype.getRepos = function() {
  var info = $("#name").val();
  $.get('https://api.github.com/users/' + info + 'access_token=' + apiKey).then(function(picture) {
    $("#display").html(<img src="${picture.avatar_url}" alt="github avatar here" class='img-responsive'> );
    console.log(picture.avatar_url);

  }).fail(function(error) {
    console.log("errorname");
  });
  $.get('https://api.github.com/users/' + info + '/repos?access_token=' + apiKey).then(function(response) {
    for (var i = 0; i < response.length; i++) {
      $('#repos').append('<li>' + response[i].name + '</li>')
      console.log(response[i]);
    }
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + info + '?access_token=' + apiKey).then(function(answer) {
    $("#avat").text(answer.login);
    console.log(answer.login);

  }).fail(function(error) {
    console.log("errorname");
  });


};

exports.personModule = Person;
