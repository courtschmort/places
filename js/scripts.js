function Place(location, landmarks, timeOfYear, notes) {
  this.location = location,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes
}

var place = new Place("Los Angeles", ["Hollywood", "Beverly Hills", "Theme Parks"], "Summer", "Give yourself about a week to explore the various areas of the city, from the beach to the inner city!")
var place2 = new Place("Las Vegas", ["The Vegas Blvd Strip", "Various Casinos", "Shows", "Venues", "Restaurants"], "Summer", "If you aren't a gambler skip the casinos and head to some shows or check out the many areas to shop. Be sure to pack some HOT weather attire.")
var place3 = new Place("Portugal", ["Porto", "Lisbon", "Faro District"], "Anytime", "Take in the beautiful coastline of Portugal as you venture through cobblestone streets filled with colorful tiles and friendly locals.")
