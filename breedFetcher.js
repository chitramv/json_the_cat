const request = require('request');
const args = process.argv.slice(2);
const breed = 'q='+args;
const url = 'https://api.thecatapi.com/v1/breeds/search?' + breed;

request(url , (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  if(error=== null) {console.log("page not found"); return ;}
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the example homepage
  const data = JSON.parse(body);
  console.log(data);
console.log(data[0].description);
console.log(typeof data);
})
