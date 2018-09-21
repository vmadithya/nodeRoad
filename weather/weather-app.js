var request = require ('request');
var yargs = require ('yargs');

const geocode = require('../geocode/geocode');

const argv = yargs.options({
a:{
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
}
}).help().alias('help', 'h').argv;

var encodedParam = encodeURIComponent(argv.a);

console.log(encodedParam);

geocode.geocodeAddress(encodedParam, (errorMessage, results) => {
if(errorMessage){
    console.log(errorMessage);
} else {
    console.log(JSON.stringify(results, undefined, 2));
}
});

