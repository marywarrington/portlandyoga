describe('Session', function() {
  it('will create an object with session properties', function() {
    var newSession = new Session("Yoga Union", "beginner", "yin", "Yin Yoga", "Dave Fink");
    expect(newSession.studio).to.equal("Yoga Union");
    expect(newSession.level).to.equal("beginner");
    expect(newSession.style).to.equal("yin");
    expect(newSession.className).to.equal("Yin Yoga");
    expect(newSession.instructor).to.equal("Dave Fink");
  });

  it('will return the abbreviated class information', function() {
    var newSession = new Session("Yoga Union", "beginner", "yin", "Yin Yoga", "Dave Fink");
    expect(newSession.displayInfo()).to.equal("Yoga Union, Yin Yoga, Dave Fink");
  });
});

describe('User', function() {
  it('will create an object with the user\'s properties', function(){
    var newUser = new User("Carl McCoy", "carl@oneofthemccoys.com");
    expect(newUser.fullName).to.equal("Carl McCoy");
    expect(newUser.emailAddress).to.equal("carl@oneofthemccoys.com");
  });
});







// describe('Location', function() {
//   it("create an object with the appropriate properties", function() {
//     var testLocation = new Location("Yoga Union", "SE", "2305 SE 50th Ave", "http://www.yogaunioncwc.com");
//     expect(testLocation.studioName).to.equal("Yoga Union");
//     expect(testLocation.quadrant).to.equal("SE");
//     expect(testLocation.streetAddress).to.equal("2305 SE 50th Ave");
//     expect(testLocation.website).to.equal("http://www.yogaunioncwc.com");
//   });
// });
//
// describe('Time', function() {
//   it("create an object with the appropriate properties", function() {
//     var testTime = new Time("Tuesday", 15);
//     expect(testTime.day).to.equal("Tuesday");
//     expect(testTime.hour).to.equal(15);
//   });
// });
//
// describe('SessionsArray', function() {
//   it("will create an array with the given values", function() {
//   var testSessionsArray = new SessionsArray([]);
//   expect(testSessionsArray.newArray).to.eql([]);
//   });
// });
