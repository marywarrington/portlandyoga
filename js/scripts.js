var Session = function(studio, level, style, className, instructor) {
  this.studio = studio;
  this.level = level;
  this.style = style;
  this.className = className;
  this.instructor = instructor;
}

Session.prototype.displayInfo = function() {
  return this.studio + ", " + this.className + ", " + this.instructor;
}

var Quiz = function(quizArray) {
  this.quizArray = quizArray;
}

Quiz.prototype.quizResult = function() {
  var aLetter = 0;
  var bLetter = 0;
  var cLetter = 0;
  var dLetter = 0;

  for(i = 0; i < this.quizArray.length(); i++) {
    if (i === "a") {
      aLetter += 1;
    }else if (i === "b") {
      bLettter += 1;
    }else if (i === "c") {
      cLetter += 1;
    }else {
      dLetter += 1;
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
}


$(document).ready(function(){
  $("form#addSession").submit(function(event){
    event.preventDefault();
  var studio = $("select#inputStudio").val();
  var level = $("select#inputLevel").val();
  var style = $("select#inputStyle").val();
  var className = $("input#inputClassName").val();
  var instructor = $("input#inputInstructor").val();
debugger;
  var newSession = new Session(studio, level, style, className, instructor);
  $("ul#result").append("<li class='sessionItem'>" + newSession.displayInfo() + "</li>");
   $(".sessionItem").last().click(function() {
     $("#fullInfo").show();
     $("#studio").text(newSession.studio);
     $("#level").text(newSession.level);
     $("#style").text(newSession.style);
     $("#className").text(newSession.className);
     $("#instructor").text(newSession.instructor);
  });
 });
});

// quiz page

// var Time = function(day, hour) {
//   this.day = day;
//   this.hour = hour;
// }
//
// var SessionsArray = function(newArray) {
//     this.newArray = [];
// }
//
// var sessionsArray = [
//   {
//     Location.studioName: "Yoga Union",
//     Location.quadrant: "SE",
//     style: "Yin",
//     Time.day:"Tuesday",
//     Time.hour: 13
//   },
//   {
//     Location.studioName: "Yoga Pearl",
//     Location.quadrant: "NW",
//     style: "Vinyasa",
//     Time.day:"Wednesday",
//     Time.hour: 15
//   },
//   {
//     Location.studioName: "Yoga on Yamhill",
//     Location.quadrant: "SW",
//     style: "Hatha",
//     Time.day:"Friday",
//     Time.hour: 9
//   },
//   {
//     Location.studioName: "Love Hive Yoga",
//     Location.quadrant: "NE",
//     style: "Yin",
//     Time.day:"Sunday",
//     Time.hour: 18
//   },
// ];
