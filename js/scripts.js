// Business Logic for Places

function Places() {
  this.destinations = []
  // this.currentId = 0
}

Places.prototype.addDestination = function(destination) {
  // destination.id = this.assignId();
  this.destinations.push(destination)
}

// Places.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// };

// Business Logic for Destination

function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes
}

//UI Logic

$(document).ready(function() {
  var places = new Places();

  $("form").submit(function(event) {
    event.preventDefault();

    var locationInput = $("input#location").val();
    var landmarksInput = $("input#landmarks").val();
    var timeOfYearInput = $("input#timeOfYear").val();
    var notesInput = $("input#notes").val();

    var logOutput = new Destination(locationInput, landmarksInput, timeOfYearInput, notesInput);

    places.addDestination(logOutput);

    console.log(places);

    $("#log").append("<li>" + logOutput.location + "</li>");
    $("#log").append("<ul><li>" + logOutput.landmarks + "</li></ul>");
    $("#log").append("<ul><li>" + logOutput.timeOfYear + "</li></ul>");
    $("#log").append("<ul><li>" + logOutput.notes + "</li></ul>");

  });
});
