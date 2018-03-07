
const express = require('express');

//creating app
const app = express();
module.exports = app;

const request = require('request');
var bodyParser = require('body-parser');
var jsonminify = require("jsonminify");
var rp = require('request-promise');
var cors = require('cors');
var path = require('path');

// Parse JSON (uniform resource locators)
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client')); 
app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use('/slick', express.static(__dirname + '/../slick'));

port = process.env.PORT || 9000
app.listen(9000 , function() {
    console.log('Application is listening on 9000');
});

// this code sends a call to Expedia's API if it succeeds the data will be send to front end 
var hotels;
app.get('/data/hotels', function(req, res) {

    //defining configs for data request
    var options = {
        uri: 'https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel',
        json: true
    };

    rp(options)
    .then(function(body) {
        //sending the data back
        hotels = JSON.stringify(body.offers.Hotel);
        res.send(hotels);
    })
    .catch(function(err) {
        console.log("An Error Occured: ", err);
    });
});

app.get('/', function(req, res){
    //sending the main screen
    res.sendFile(path.join(__dirname + '/../client/main.html'));
})
