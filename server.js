const express = require('express');
const app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/static'));



// server logic & math

const Player = require('./static/player.js');
const Scorecard = require('./static/scorecard.js');
const Die = require('./static/die.js');

let alan = new Player('Alan')
console.log(alan);
alan.dice = [new Die(), new Die(), new Die(), new Die(), new Die()];
console.log(alan.dice);
alan.scorecard.setOnes(alan.dice);
console.log(alan.scorecard);


// socket handling



// routing

app.all('/', function(req, res){
    res.render('index');
});