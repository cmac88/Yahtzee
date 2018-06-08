var Scorecard = require('./scorecard.js');

module.exports = class Player {
    constructor (id, name) {
        this.id = id;
        this.name = name;
        this.scorecard = new Scorecard;
        this.dice = [];
    }
    
    // rollDice()

    // rerollDice()

    // passTurn()
}