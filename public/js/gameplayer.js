
//Player Model
class Gameplayer {
    
    constructor(deck, username = '', isPlayerTurn) {
        this.name = username;
        this.health = 20;
        this.hand = []
        this.deck = deck.slice()
        this.board = new Array(4)
        this.isPlayerTurn = isPlayerTurn
        this.currentCard = ''
    
    }

    isAlive() {
        if (this.health === 0) {
            return false;
        }
        return true;
    }

    reduceHealth(health) {
        this.health -= cleaveDamage;

        if (this.health < 0) {
            this.health = 0;
        }
    }

    generateHand(num) {
        for (var i = 0; i < num; i++) {
            this.hand.push(this.draw());
        }
    }

    draw() {
        var index = Math.floor(Math.random()*this.deck.length-1)
        this.currentCard = this.deck.splice(index, 1)
        return this.currentCard
     }
}

