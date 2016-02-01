var Location = function(studioName, quadrant, streetAddress, website) {
  this.studioName = studioName;
  this.quadrant = quadrant;
  this.streetAddress = streetAddress;
  this.website = website;
}

var Time = function(day, hour) {
  this.day = day;
  this.hour = hour;
}

var SessionsArray = function(newArray) {
    this.newArray = [];
}

var sessionsArray = [
  {
    Location.studioName: "Yoga Union",
    Location.quadrant: "SE",
    style: "Yin",
    Time.day:"Tuesday",
    Time.hour: 13
  },
  {
    Location.studioName: "Yoga Pearl",
    Location.quadrant: "NW",
    style: "Vinyasa",
    Time.day:"Wednesday",
    Time.hour: 15
  },
  {
    Location.studioName: "Yoga on Yamhill",
    Location.quadrant: "SW",
    style: "Hatha",
    Time.day:"Friday",
    Time.hour: 9
  },
  {
    Location.studioName: "Love Hive Yoga",
    Location.quadrant: "NE",
    style: "Yin",
    Time.day:"Sunday",
    Time.hour: 18
  },
];
