module.exports = class Die {
    constructor() {
        this.value = Math.floor(Math.random()*6)+1;  // random integer from 1 to 6
        this.keep = false;
    }
}