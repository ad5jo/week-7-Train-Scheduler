// Dave Durkee
// 12.10.2016
// Firebase to store data: https://ddurkee0-train.firebaseio.com/
// GitHub to backup your project, 
// and Heroku to host your finished site

// Initial Values
var train-name = "";
var destination = "";
var first-train-time = 0;
var train-frequency = "";


src="https://www.gstatic.com/firebasejs/3.6.4/firebase.js"

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8fP7Z1VVH8sJLlOQzEYjiBSFJyP-eKjA",
    authDomain: "ddurkee0-train.firebaseapp.com",
    databaseURL: "https://ddurkee0-train.firebaseio.com",
    storageBucket: "ddurkee0-train.appspot.com",
    messagingSenderId: "382896722508"
  };

  firebase.initializeApp(config);
      firebase.initializeApp(config);

      // Create a variable to reference the database
      var database = firebase.database();





$(document).ready(function(){
  function_init();
});



$("#id-button-submit").click(
      function(){
        $("#debug").append("<div id=" + "game_status" + ">" + "Hello" + "</div>");
        // $("#message_missed").remove();
        // $("#thebody").append("<div id=" + "game_status" + ">" + "You will have 30 seconds" + "</div>");
      });

      // Capture Button Click
      $("#id-button-submit").on("click", 
        function() {

        // YOUR TASK!!!
        // Code in the logic for storing and retrieving the most recent user.
        // Don't forget to provide initial data to your Firebase database.
        train-name = $("#n-train-name").val().trim();
        destination = $("#n-destination").val().trim();
        first-train-time = $("#n-first-train-time").val().trim();
        train-frequency = $("#n-train-frequency").val().trim();


        database.ref().set({
          train-name: train-name,
          destination: destination,
          first-train-time: first-train-time,
          train-frequency: train-frequency
        });

        // Don't refresh the page!
        return false;
      });




  function function_init ()
  {
        $("#button_begin").click(
        function(){
          $("#q1").remove();
          $("#a1").remove();
          $("#play_again_button").remove();
          $("#game_status").remove();
          $("#correct_answer_id").remove();
          $("#message_missed").remove();
          $("#thebody").append("<div id=" + "game_status" + ">" + "You will have 30 seconds to answer each question" + "</div>");
      });


  function_next();
  }
//////////////////////////////////////////////////////////////////////////////////////////////


  


function function_next()
{
  // 1. 
  o_timer = 0;
} // end function next 






function function_reset_variables()
{
  o_timer = 0;
}


