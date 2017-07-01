// var apiKey = require('./../.env').apiKey;
var apiKey = "86fdbbdf4e570a36d261a26774e17f6384d6d822"
var Person = require('./../js/user.js').personModule;
$(document).ready(function() {
  var avatar = new Person();
  $("#button").on('click', function(event) {
    // $("#info").hide();
    event.preventDefault();
    var info = $("#name").val()
    var getX = avatar.getRepos(info);
    console.log(event.target.value);
    // $("#info").prepend("The user's name is" + getX + ":)");
  })

});
