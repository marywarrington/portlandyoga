var idCounter = 0;

var Session = function(studio, level, style, className, instructor) {
  this.studio = studio;
  this.level = level;
  this.style = style;
  this.className = className;
  this.instructor = instructor;
  idCounter++;
  this.id = idCounter;
}

Session.prototype.displayInfo = function() {
  return this.studio + ", " + this.className + ", with " + this.instructor;

}

var User = function(fullName, emailAddress){
  this.fullName = fullName;
  this.emailAddress = emailAddress;
}

// User.prototype.acknowledge =

var Quiz = function(quizArray) {
  this.quizArray = quizArray;
}

Quiz.prototype.quizResult = function() {
  var aLetter = 0;
  var bLetter = 0;
  var cLetter = 0;
  var dLetter = 0;

  for(var i = 0; i < this.quizArray.length; i++) {
    if (this.quizArray[i] === "a") {
      aLetter++;
    } else if (this.quizArray[i] === "b") {
      bLetter++;
    } else if (this.quizArray[i] === "c") {
      cLetter++;
    } else if (this.quizArray[i] === "d") {
      dLetter++;
    }
  }
  var newArray = [aLetter, bLetter, cLetter, dLetter];
  var max = newArray[0];
  var maxIndex = 0;

  for (var i = 1; i < newArray.length; i++) {
    if (newArray[i] > max) {
      maxIndex = i;
      max = newArray[i];
    }

  }
  if (maxIndex === 0) {
    this.winningLetter = "a";
  } else if (maxIndex === 1) {
    this.winningLetter = "b";
  } else if (maxIndex === 2) {
    this.winningLetter = "c";
  } else {
    this.winningLetter = "d";
  }

  return this.winningLetter;
  }


$(document).ready(function(){

  $("#signUp").click(function() {
    //  debugger;
    $("div#signUpForm").show();
    $("#signUp").hide();
  });

  $("form#addSession").submit(function(event){
    event.preventDefault();
    var studio = $("select#inputStudio").val();
    var level = $("select#inputLevel").val();
    var style = $("select#inputStyle").val();
    var className = $("input#inputClassName").val();
    var instructor = $("input#inputInstructor").val();

    var newSession = new Session(studio, level, style, className, instructor);
    $("#classTable").append("<tr class='sessionItem' id='sessionItem_" + newSession.id + "'>" + "<td>" + newSession.studio + "</td>" + "<td>" + newSession.className + "</td>" + "<td>" + newSession.instructor + "</td>" + "</tr>");

  // $("ul#result").append("<li class='sessionItem'>" + newSession.displayInfo() + "</li>");
    $(".sessionItem").last().click(function() {
      //launch modal upon click
      $('#myModal').modal('toggle');
      $('#signUp').show();
      $("div#acknowledgement").hide();

      //  $('#myModal').addClass('modal-backdrop');
      $("#fullInfo").show(); //within the modal, show #fullInfo
      $("#studio").text(newSession.studio); //within the modal, populate #studio
      $("#level").text(newSession.level); //within the modal, populate #level
      $("#style").text(newSession.style); //within the modal, populate #style
      $("#className").text(newSession.className); //within the modal, populate #className
      $("#instructor").text(newSession.instructor); //within the modal, populate #instructor
      $("#ackButton").off();
      $("#ackButton").click(function() {
        var fullName = $("input#inputFullName").val();
        var emailAddress = $("input#inputEmailAddress").val();
        var newUser = new User(fullName, emailAddress);
        $("#sessionItem_" + newSession.id).last().addClass('success');
        $("div#acknowledgement").show();
        $("#ackName").text(newUser.fullName);
        $("#ackClass").text(newSession.className);
        $("#ackStudio").text(newSession.studio);
        $("div#signUpForm").hide();
        $("div#fullInfo").hide();
      });
    });


    $("#addSession").each(function(){
      this.reset();
    });
  });

  $("form#styleQuiz").submit(function(event) {
    event.preventDefault();
  //Add variable for array collected from quiz
    var quest1 = $("#question1 input[type='radio']:checked").val();
    var quest2 = $("#question2 input[type='radio']:checked").val();
    var quest3 = $("#question3 input[type='radio']:checked").val();
    var quest4 = $("#question4 input[type='radio']:checked").val();
    var quest5 = $("#question5 input[type='radio']:checked").val();
    var quest6 = $("#question6 input[type='radio']:checked").val();

    var answerArray = [quest1, quest2, quest3, quest4, quest5, quest6];
    console.log(answerArray);
    // debugger;
    for (var i = 0; i < answerArray.length; i++) {
      if (answerArray[i] === undefined) {
        alert("Please be sure every field in the form has an answer.");
        return false;
      }
    }
    var newQuiz = new Quiz(answerArray);

    if (newQuiz.quizResult() === "a") {
      $("#result1").show();
    } else if (newQuiz.quizResult() === "b") {
      $("#result2").show();
    } else if (newQuiz.quizResult() === "c") {
      $("#result3").show();
    } else if (newQuiz.quizResult() === "d"){
     $("#result4").show();
   } else {
     alert("I'm Broken!")
   }
  });
});
