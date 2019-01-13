
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD6YUV9h59oAhyChLxKtQeuyCOhOtM0DbE",
    authDomain: "trainschedule-d29dd.firebaseapp.com",
    databaseURL: "https://trainschedule-d29dd.firebaseio.com",
    projectId: "trainschedule-d29dd",
    storageBucket: "trainschedule-d29dd.appspot.com",
    messagingSenderId: "1045388852130"
};

firebase.initializeApp(config);

var database = firebase.database();

// Initialize Moment
// var moment = require('moment');
// moment().format();


$("#submitButton").on("click", function (e) {
    e.preventDefault();

    // Global Variables to Hold User Input & Add Data to Firebase
    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrainTime = $("#first-train-time").val().trim();
    var frequency = $("#frequency").val().trim();

    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);


    database.ref().set({
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency
      });


    alert("Submission Successful.");

    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train-time").val("");
    $("#frequency").val("");

})


database.ref().on("value", function(snapshot) {

    console.log(snapshot);

    console.log(snapshot.val().trainName + " : This train is pulled from Firebase");

    var printTrain = snapshot.val().trainName;
    var printTrainDest = snapshot.val().destination;
    var firstArrival = snapshot.val().firstTrainTime;

    $("#trainName").text("Train Name : " + printTrain);
    $("#trainArrival").text("Train Destination : " + printTrainDest);
    $("#trainArrivalTime").text("Train Arrival Time : " + firstArrival);
  
    // If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });



