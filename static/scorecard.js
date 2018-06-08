module.exports = class Scorecard {
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
            for (let each of dice) { 
                console.log(each.value);
                if(each.value == 1) {
                    this.ones += each.value;
    }}}}

    setTwos(dice) {
        if(this.twos == 0){
            for (let each of dice) { 
                console.log(each.value);
                if(each.value == 2) {
                    this.ones += each.value;
    }}}}

    setThrees(dice) {
        if(this.threes == 0){
            for (let each of dice) { 
                console.log(each.value);
                if(each.value == 3) {
                    this.ones += each.value;
    }}}}
    
    setFours(dice) {
        if(this.fours == 0){
            for (let each of dice) { 
                console.log(each.value);
                if(each.value == 4) {
                    this.ones += each.value;
    }}}}

    setFives(dice) {
        if(this.fives == 0){
            for (let each of dice) { 
                console.log(each.value);
                if(each.value == 5) {
                    this.ones += each.value;
    }}}}

    setSixes(dice) {
        if(this.sixes == 0){
            for (let each of dice) { 
                console.log(each.value);
                if(each.value == 6) {
                    this.ones += each.value;
    }}}}

    // and all the other setThisThing
}