var twitter = require('twitter');
var jsonfile = require('jsonfile');

var file = 'C:\\Users\\chrisson.mascarenhas\\Development\\tweets\\nim2.json'

var client = new twitter({
  consumer_key: '0DKQvtHFoAYklMYzRzqB6kamG',
  consumer_secret: 'ebXP7LJWB35Uk2jW3GL9d2JlyekO7dwpq8medORfgFMaErtK4W',
  access_token_key: '4825586936-TgmNyVza7xKDs3kU5K6diwAkOGpOcKSf7OyrQIi',
  access_token_secret: '7oYyDrwR4jbMbPDRwIWlSif7HTr4ipjj5tdM36li8cYqd'
});


client.get('statuses/retweets/:id',{id:204650511553667073}, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
    jsonfile.writeFile(file, tweets, function (err) {
  		console.error(err);
	});
  }
  else{
    console.log(error);
  }
});


/*
jsonfile.writeFile(file, tweets, function (err) {
  console.error(err);
});
*/

