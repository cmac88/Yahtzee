module.exports = {
    player : Player,
    scorecard : Scorecard,
    die : Die
};

class Player {
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

var Scorecard = class Scorecard {
    constructor() {
        this.ones = 0;
        this.twos = 0;
        this.threes = 0;
        this.fours = 0;
        this.fives = 0;
        this.sixes = 0;
        this.threeOf = 0;
        this.fourOf = 0;
        this.straight = 0;
        this.chance = 0;
        this.yahtzee = 0;
    }

    setOnes(dice) {
        if(this.ones == 0){
            for (each in dice) { 
                if(each.value == 1) {
                    this.ones += each.value;
    }}}}
}

var Die = class Die {
    constructor() {
        this.value = Math.floor(Math.random()*6)+1;  // random integer from 1 to 6
        this.keep = false;
    }
}