var request = require ('request');

var geocodeAddress = (a, callback) => {
    console.log(`Procedure Param: ${a}`);
    request({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        json: true
    },(error,response,body)=>{
        if (response.statusCode === 200){
            //console.log(JSON.stringify(body,undefined, 2));
            callback(undefined,body);
        };
        if(error || response.statusCode !== 200){
            callback('Some errors');
        };
    
        console.log(response.statusCode );
    
       
    });
};

module.exports = {
    geocodeAddress
};