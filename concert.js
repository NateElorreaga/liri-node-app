var axios = require("axios");
var fs = require("fs");
var moment = require("moment");

var Concerts = function(input){
    var bandsInTown = 'https://rest.bandsintown.com/artists/' + input + '/events?app_id=codingbootcamp';
    axios.get(bandsInTown)
    .then(function(response){
       for(var i = 0; i < response.data.length; i++){
        var venue = response.data[i].venue.name;
        var location = response.data[i].venue.city;
        var time = response.data[i].datetime
        var formattedTime = moment(time).format('MMMM Do YYYY, hh:mm a');
        var results = venue + " | " + location + " | " + formattedTime;
       console.log("________________________________");
        //console.log(response);
        console.log("Venue Name: " + venue);
        console.log("City: " + location);
        console.log("Date & Time: " + formattedTime);

        fs.appendFile("log.txt", results, function(err){
            if(err) throw err; 
        });
       }
    })
};

module.exports = Concerts;