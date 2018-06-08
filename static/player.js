var Scorecard = require('./scorecard.js');
var Die = require('./die.js');

module.exports = class Player {
    constructor (id) {
        this.id = id;
        this.scorecard = new Scorecard;
        this.dice = [];
    }
    
    rollDice() {
        console.log('rolling dice');
        this.dice = [new Die(), new Die(), new Die(), new Die(), new Die()];
    }

    rerollDice(dice) {
        console.log('rerolling dice');
        for(let each in dice){
            console.log(dice[each].keep);
            if(dice[each].keep == false) {
                console.log('overwriting this die')
                dice[each] = new Die();
            }
        }
    }

    // passTurn()
}