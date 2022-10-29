class Tile1 extends Characters {
    // constructor(name, attack, defense) {
    //     this.name = ;
    //     this.attack = this.attack
    //     this.defense = this.defense
    //     this.sacrifice = this.sacrifice
    // }

    attack() {
        if (this.defense === 0) {
            return false;
        }
        return true;
    }

    reduceHealth() {
        this.defense -= oppAttack;

        if (this.defense < 0) {
            this.defense = 0;
        }
        return discard()
    }
    //discardPile = []

    attack() {
        this.att
    }

}
