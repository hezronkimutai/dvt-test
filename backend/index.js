const express = require('express');
const request = require('request');

const app = express();

app.get('/', (req, res, next) => {

    request('https://api.deezer.com/user/2529', function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });

    return res.status(200).json({
        message: "Success",
    })
});

app.listen(8080, () => { console.log("App running on port 8080"); })