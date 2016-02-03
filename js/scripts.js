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


var User = function(fullName, emailAddress){
  this.fullName = fullName;
  this.emailAddress = emailAddress;
}

// User.prototype.acknowledge =

$(document).ready(function(){
  $("form#addSession").submit(function(event){
    event.preventDefault();
  var studio = $("select#inputStudio").val();
  var level = $("select#inputLevel").val();
  var style = $("select#inputStyle").val();
  var className = $("input#inputClassName").val();
  var instructor = $("input#inputInstructor").val();

  var newSession = new Session(studio, level, style, className, instructor);
  $("ul#result").append("<li class='sessionItem'>" + newSession.displayInfo() + "</li>");
   $(".sessionItem").last().click(function() {
     //launch modal upon click

     $('#myModal').modal('toggle');
    //  $('#myModal').addClass('modal-backdrop');
     $("#fullInfo").show(); //within the modal, show #fullInfo
     $("#studio").text(newSession.studio); //within the modal, populate #studio
     $("#level").text(newSession.level); //within the modal, populate #level
     $("#style").text(newSession.style); //within the modal, populate #style
     $("#className").text(newSession.className); //within the modal, populate #className
     $("#instructor").text(newSession.instructor); //within the modal, populate #instructor
     $("#signUp").click(function() {
       $("div#signUpForm").show();
       //breaks here
       $("#ackButton").click(function() {
         var fullName = $("input#inputFullName").val();
         var emailAddress = $("input#inputEmailAddress").val();
         var newUser = new User(fullName, emailAddress);

         $("div#acknowledgement").show();
         $("#ackName").text(newUser.fullName);
         $("#ackClass").text(newSession.className);
         $("#ackStudio").text(newSession.studio);
         $("div#signUpForm").hide();
         $("div#fullInfo").hide();
       });
     });
   });
  });
});

// $(document).on('click', function(event) {
//   if (!$(event.target).closest('#myModal').length) {
//     $('#myModal').modal('hide');
//   }
// });



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
