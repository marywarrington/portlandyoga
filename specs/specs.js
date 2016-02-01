describe('Location', function() {
  it("create an object with the appropriate properties", function() {
    var testLocation = new Location("Yoga Union", "SE", "2305 SE 50th Ave", "http://www.yogaunioncwc.com");
    expect(testLocation.studioName).to.equal("Yoga Union");
    expect(testLocation.quadrant).to.equal("SE");
    expect(testLocation.streetAddress).to.equal("2305 SE 50th Ave");
    expect(testLocation.website).to.equal("http://www.yogaunioncwc.com");
  });
});

describe('Time', function() {
  it("create an object with the appropriate properties", function() {
    var testTime = new Time("Tuesday", 15);
    expect(testTime.day).to.equal("Tuesday");
    expect(testTime.hour).to.equal(15);
  });
});

describe('SessionsArray', function() {
  it("will create an array with the given values", function() {
  var testSessionsArray = new SessionsArray([]);
  expect(testSessionsArray.newArray).to.eql([]);
  });
});
