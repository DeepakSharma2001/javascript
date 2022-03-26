const request = require('request');     //by this we request any server to have the response from any website
                                        //Due to this we can find whole html from the website  

request('http://www.google.com', cb);

function cb(error, response, body) {
    if(error)
        console.error('error:', error); // Print the error if one occurred
    else{
        console.log('body:', body); // Print the HTML for the Google homepage.
    }
}