// var apiKey = require('./../.env').apiKey;
var apiKey = "ed45430676946096b5d28100794ddfa6a1c8cc8d"

var info = $("#name").val("")
$(document).ready(function() {
  // var currentInfo = new getRepos();
  $("#name").on('keyup', function(event) {
    console.log(event.target.value);
    $("#info").hide();
    $("").prepend();
  })

});
