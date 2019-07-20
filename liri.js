require("dotenv").config();

//Requires for each category
var concerts = require("./concert");
var spotifySearch = require("./spotify");
var movieSearch = require("./movie");
var doWhatItSays = require("./do-what-it-says");

var type = process.argv[2];
var title = process.argv[3];


switch(type){
    case "concert-this": 
    console.log("You chose a concert")
    concerts(title);
    break;

    case "spotify-this-song": 
    console.log("You chose a song title")
    spotifySearch(title);
    break;

    case "movie-this": 
    console.log("You chose a movie")
    movieSearch(title);
    break;

    default :
        doWhatItSays();
    break;

};