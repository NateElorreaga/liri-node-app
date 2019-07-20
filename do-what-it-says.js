var fs = require("fs");
var spotifySearch = require("./spotify");

var DoWhatItSays = function() {
    fs.readFile("random.txt", "utf8", function(error, data) {

   
      var dataArr = data.split(",");
      console.log(dataArr);

      var title = dataArr[1];
      spotifySearch(title);
   
    //   if (dataArr.length === 2) {
    //     pick(dataArr[0], dataArr[1]);
    //   } else if (dataArr.length === 1) {
    //     pick(dataArr[0]);
    //   }
    });
   };

   module.exports = DoWhatItSays;