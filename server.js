const express = require('express');
const app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/static'));

const Player = require('./static/player.js');
const Scorecard = require('./static/scorecard.js');
const Die = require('./static/die.js');

var numberOfPlayers = 0;
var arrayOfPlayers = [];
var activePlayer;
var serverState = 0;
    // state 1:  waiting for roll instruction
    // state 2:  having rolled, wait for re-roll info
    // state 3:  having re-rolled, wait for scoring category

// let alan = new Player('Alan')
// console.log(alan);
// alan.dice = [new Die(), new Die(), new Die(), new Die(), new Die()];
// console.log(alan.dice);
// alan.scorecard.setOnes(alan.dice);
// console.log(alan.scorecard);



// server logic & math

// function gameLoop(){
//     let playerTurn = 0;

//     while(gameOn){
//         activePlayer = arrayOfPlayers[playerTurn];
//         let turnActive = true;

//         while(turnActive){
//         // inside each turn:
//             // announce start of turn
//             io.emit('startOfTurn', {player : playerTurn, msg : "It is Player "+playerTurn+"'s turn"});
//             serverState = 1;
//             console.log('server state '+serverState);
//             // client will 'rollDice'
//             // server will roll dice and respond, then update state to 2
//             while(serverState != 2){
//                 continue;
//             }
//             console.log('server state '+serverState);
//             // client will 'rerollDice', send dice-held info
//             // server will reroll dice and send new dice info to client, then update state to 3
//             while(serverState != 3){
//                 continue;
//             }
//             console.log('server state '+serverState);
//             // client will 'scoreDice', send scoring category info
//             // server accept scoring category from client, process and end turn, make next player activePlayer
//             while(serverState != 4){

//             }
//             console.log('server state '+serverState);
//             turnActive = false;
//         }
//         playerTurn = (playerTurn+1) % numberOfPlayers;
//         serverState = 1;
//     }

// }



// socket handling

var playerTurn = 0;


io.on('connection', function(socket){

    // new connections
    console.log('New connection established');
    numberOfPlayers++;
    // refuse connections if too many players
    if(numberOfPlayers>4){
        socket.emit('Too many players - disconnecting');
        numberOfPlayers--;
        socket.disconnect();
    }
    let thisPlayer = new Player(numberOfPlayers);
    console.log(thisPlayer);
    arrayOfPlayers.push(thisPlayer);
    socket.emit('confirm');

    // on disconnect, if game not started, remove player from arrayOfPlayers

    // starting game
    socket.on('startGame', function(data){
        console.log('heard startGame');
        gameOn = true;
        io.emit('gameStarting');
        activePlayer = arrayOfPlayers[0];
        console.log(activePlayer);
        io.emit('startOfTurn', {player : playerTurn, msg : "It is Player "+playerTurn+"'s turn"});
        console.log('server state 1');
    });

    socket.on('rollDice', function(data){
        console.log('heard rollDice');
        activePlayer.rollDice();
        socket.emit('diceRolled', {dice : activePlayer.dice});
        console.log(activePlayer.dice);
        console.log('server state 2')
    });

    socket.on('rerollDice', function(data){
        // activePlayer.dice[3].keep = true;
        // activePlayer.dice[4].keep = true;
        activePlayer.rerollDice(activePlayer.dice);
        // respond
        console.log(activePlayer.dice);
        console.log('server state 3');
    });
    
    socket.on('scoreDice', function(data){
        // do scoring thing
        // respond
        playerTurn = (playerTurn+1) % numberOfPlayers;
        io.emit('endOfTurn');
        io.emit('startOfTurn', {player : playerTurn, msg : "It is Player "+playerTurn+"'s turn"});
    });








});

// routing

app.all('/', function(req, res){
    res.render('index', {playerNumber: numberOfPlayers});
});