
var expElement = document.getElementById('exp');
var clientElement = document.getElementById('client');
var channelElement = document.getElementById('channel');
var movieElement = document.getElementById('movie');


// Set an initial value for the counter
var counterValue = 0;



var expValue = 0;
var clientValue = 0;
var channelValue = 0;
var movieValue = 0;

function updateValues() {
    // Increase rates
    var expRate = 1;
    var clientRate = 5;
    var channelRate = 10;
    var movieRate = 20;

    // Maximum values
    var expMax = 2;
    var clientMax = 875;
    var channelMax = 2000;
    var movieMax = 6700;

    // Update values
    expValue = Math.min(expValue + expRate, expMax);
    clientValue = Math.min(clientValue + clientRate, clientMax);
    channelValue = Math.min(channelValue + channelRate, channelMax);
    movieValue = Math.min(movieValue + movieRate, movieMax);

    expElement.innerText = expValue;
    clientElement.innerText = clientValue;
    channelElement.innerText = channelValue;
    movieElement.innerText = movieValue;
}

setInterval(updateValues, 10); 