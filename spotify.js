//require Spotify
var Spotify = require('node-spotify-api');
var fs = require("fs");

var keys = require("./keys");
var spotify = new Spotify(keys.spotify);




//spotify request
var SpotifySearch = function(input){
    var getArtists = function(artist){
        return artist.name;
    }
   spotify.search({
       type: 'track',
       query: input
   },function(err, data){
       if(err){
           console.log("Error Occured: " + err);
           return;
       }
       let songs = data.tracks.items;


       for(var i = 0; i < songs.length; i++){
           var name = songs[i].name;
           var artist = songs[i].artists.map(getArtists)
           var album = songs[i].album.name
           var preview = songs[i].preview_url
           var songResults = name + " | " + artist + " | " + album + " | " + preview;
           console.log("______________________________________");
            console.log("Artist: " + artist);
            console.log('Song Name: ' + name);
            console.log('Album: ' + album);
            console.log('Song Preview: ' + preview);

            fs.appendFile("log.txt", songResults, function(err){
                if(err) throw err; 
            });
        }
   });

};

module.exports = SpotifySearch;