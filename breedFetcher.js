const request = require('request');


// refactoring request using a function
const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
request(url , (error, response, body) => {
  //if(error) return error;
 //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the example homepage
  const data = JSON.parse(body);
  //console.log(data);
let desc;
  if(data[0] == undefined) {
    error = true;
    desc = null;
    callback(error,desc);
    return;
  }
  desc = data[0].description;

callback(error,desc);

})

}
module.exports = { fetchBreedDescription };
