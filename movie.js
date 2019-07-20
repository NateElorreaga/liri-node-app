var axios = require("axios");
var fs = require("fs");

var MovieSearch = function(input){
    axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy")
    .then(function(response){
        var title = response.data.Title;
        var plot = response.data.Plot;
        var movieActors = response.data.Actors;
        var releaseDate = response.data.Year;
        var rated = response.data.Rated;
        var imdbRating = response.data.imdbRating;
        var rottenTomatoes = response.data.Ratings[1].Value;
        var movieLanguage = response.data.Language;
        var movieResults =  title + " | " + plot + " | " + movieActors + " | " + releaseDate + " | " + rated + " | " + imdbRating + " | " + rottenTomatoes + " | " + movieLanguage;

        console.log("______________________________________");
        console.log('Title: ' + title);
        console.log('Description: ' + plot);
        console.log('Actors: ' + movieActors);
        console.log('Release Date: ' + releaseDate  );
        console.log('Rated: ' + rated);
        console.log('IMDB Rating: ' + imdbRating + '/10');
        console.log('Rotten Tomatoes Rating: ' + rottenTomatoes);
        console.log('Language: ' + movieLanguage);
        console.log(movieResults);

        fs.appendFile("log.txt", movieResults, function(err){
            if(err) throw err; 
        });
    })
    
};

module.exports = MovieSearch;