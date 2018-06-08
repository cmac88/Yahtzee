module.exports = class Die {
    constructor() {
        this.value = Math.floor(Math.random()*6)+1;  // random integer from 1 to 6
        this.keep = false;
        switch(this.value){
            case 1: this.path = '/1.png'; break;
            case 2: this.path = '/2.png'; break;
            case 3: this.path = '/3.png'; break;
            case 4: this.path = '/4.png'; break;
            case 5: this.path = '/5.png'; break;
            case 6: this.path = '/6.png'; break;
        }

    }
}