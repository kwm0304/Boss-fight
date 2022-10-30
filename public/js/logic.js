
class Game {
    constructor() {
        this.isPlayerTurn = true;
        this.player;
        this.opponent;
        //For placed opponents cards
        this.currentOpponent1;
        this.currentOpponent2;
        this.currentOpponent3;
        this.currentOpponent4;
        //Player cards in play
        this.currentCharacter1;
        this.currentCharacter2;
        this.currentCharacter3;
        this.currentCharacter4;
        //Arrays
        this.hand = []
        this.oppHand = []
        this.cards = [
            {
                tier: 'E',
                name: 'OffCenterDiv',
                attack: 5,
                defense: 1,
                sacrifice: 0 
            },
            {
                tier: 'E',
                name: 'Jester',
                attack: 4,
                defense: 2,
                sacrifice: 0 
            },
            {
                tier: 'E',
                name: 'CTRLALTDELETE',
                attack: 3,
                defense: 3,
                sacrifice: 0 
            },
            {
                tier: 'D',
                name: 'StackOverflowing',
                attack: 6,
                defense: 2,
                sacrifice: 0 
            },
            {
                tier: 'D',
                name: 'forEach',
                attack: 7,
                defense: 1,
                sacrifice: 0 
            },
            {
                tier: 'D',
                name: 'Terminal',
                attack: 4,
                defense: 4,
                sacrifice: 0 
            },
            {
                tier: 'D',
                name: 'GoogleFu',
                attack: 5,
                defense: 3,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'Gitsome',
                attack: 5,
                defense: 5,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'GrimRepo',
                attack: 8,
                defense: 2,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'Gitbasher',
                attack: 2,
                defense: 8,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'CascadingSamuraiStars',
                attack: 7,
                defense: 3,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'ErrorCatcher',
                attack: 1,
                defense: 9,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'BranchSwitcher',
                attack: 3,
                defense: 7,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'FourOhFour',
                attack: 4,
                defense: 6,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'Refactorer',
                attack: 6,
                defense: 4,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'CTRLV',
                attack: 9,
                defense: 1,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'Iterator',
                attack: 10,
                defense: 0,
                sacrifice: 1 
            },
            {
                tier: 'C',
                name: 'Bootstrapped',
                attack: 0,
                defense: 10,
                sacrifice: 1 
            },
            {
                tier: 'B',
                name: 'destroyEnemy(you)',
                attack: 8,
                defense: 4,
                sacrifice: 1 
            },
            {
                tier: 'B',
                name: 'DeathNode',
                attack: 9,
                defense: 3,
                sacrifice: 1 
            },
            {
                tier: 'B',
                name: 'EventListener',
                attack: 2,
                defense: 10,
                sacrifice: 1 
            },
            {
                tier: 'B',
                name: 'JSONFoorhees',
                attack: 11,
                defense: 1,
                sacrifice: 1 
            },
            {
                tier: 'A',
                name: 'FatalError',
                attack: 9,
                defense: 5,
                sacrifice: 2 
            },
            {
                tier: 'A',
                name: 'TheCompiler',
                attack: 12,
                defense: 2,
                sacrifice: 3 
            },
            {
                tier: 'A',
                name: 'FullyStacked',
                attack: 13,
                defense: 1,
                sacrifice: 4 
            }
        ];
        this.oppCards = [
            {
                tier: 'E',
                name: 'OffCenterDiv',
                attack: 5,
                defense: 1,
                sacrifice: 0 
            },
            {
                tier: 'E',
                name: 'Jester',
                attack: 4,
                defense: 2,
                sacrifice: 0 
            },
            {
                tier: 'E',
                name: 'CTRLALTDELETE',
                attack: 3,
                defense: 3,
                sacrifice: 0 
            },
            {
                tier: 'D',
                name: 'StackOverflowing',
                attack: 6,
                defense: 2,
                sacrifice: 0 
            },
            {
                tier: 'D',
                name: 'forEach',
                attack: 7,
                defense: 1,
                sacrifice: 0 
            },
            {
                tier: 'D',
                name: 'Terminal',
                attack: 4,
                defense: 4,
                sacrifice: 0 
            },
            {
                tier: 'D',
                name: 'GoogleFu',
                attack: 5,
                defense: 3,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'Gitsome',
                attack: 5,
                defense: 5,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'GrimRepo',
                attack: 8,
                defense: 2,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'Gitbasher',
                attack: 2,
                defense: 8,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'CascadingSamuraiStars',
                attack: 7,
                defense: 3,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'ErrorCatcher',
                attack: 1,
                defense: 9,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'BranchSwitcher',
                attack: 3,
                defense: 7,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'FourOhFour',
                attack: 4,
                defense: 6,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'Refactorer',
                attack: 6,
                defense: 4,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'CTRLV',
                attack: 9,
                defense: 1,
                sacrifice: 0 
            },
            {
                tier: 'C',
                name: 'Iterator',
                attack: 10,
                defense: 0,
                sacrifice: 1 
            },
            {
                tier: 'C',
                name: 'Bootstrapped',
                attack: 0,
                defense: 10,
                sacrifice: 1 
            },
            {
                tier: 'B',
                name: 'destroyEnemy(you)',
                attack: 8,
                defense: 4,
                sacrifice: 1 
            },
            {
                tier: 'B',
                name: 'DeathNode',
                attack: 9,
                defense: 3,
                sacrifice: 1 
            },
            {
                tier: 'B',
                name: 'EventListener',
                attack: 2,
                defense: 10,
                sacrifice: 1 
            },
            {
                tier: 'B',
                name: 'JSONFoorhees',
                attack: 11,
                defense: 1,
                sacrifice: 1 
            },
            {
                tier: 'A',
                name: 'FatalError',
                attack: 9,
                defense: 5,
                sacrifice: 2 
            },
            {
                tier: 'A',
                name: 'TheCompiler',
                attack: 12,
                defense: 2,
                sacrifice: 3 
            },
            {
                tier: 'A',
                name: 'FullyStacked',
                attack: 13,
                defense: 1,
                sacrifice: 4 
            }
        ];
    }

    initializeGame() {
        this.player = new Player(username);
        player.generateHand(4);
        opponent.generateOppHand(8);
        //However placing cards will work
        // //First 4 cards of hand placed on board
        // let AIF1 = oppHand[0]
        // let AIF2 = oppHand[1]
        // let AIF3 = oppHand[2]
        // let AIF4 = oppHand[3]
        // //Next 4 cards showing opponents hand
        // let AIB1 = oppHand[4]
        // let AIB2 = oppHand[5]
        // let AIB3 = oppHand[6]
        // let AIB4 = oppHand[7]
        this.start()
    }
    oppDraw() {
        var index = Math.floor(Math.random()*oppCards.length-1)
            return oppCards.splice(index, 1)
    }

    draw() {
        var index = Math.floor(Math.random()*cards.length-1)
            return cards.splice(index, 1)
    }

    generateAIHand(num) {
        for (var i = 0; i < num; i++) {
            oppHand.push(oppDraw());
        }
        this.hand.forEach(makeCharacterObject)
    }
    
    generateHand(num) {
        for (var i = 0; i < num; i++) {
            hand.push(draw());
        }
        this.hand.forEach(makeCharacterObject)}
//Creates array as objects(hopefully)
    makeCharacterObject() {
        this.cards.forEach(element => {
            this.cards[index] = new Character(name, attack, defense)
        });
    }
   
    start() {
        // //Player hand
        placeCards()
        //Hitting done button
        endTurn()
        this.battle ()
        checkEndGame()
    }

    battle() {
        if (this.isPlayerTurn) {
            const damage1 = this.currentCharacter1.attack
            const damage2 = this.currentCharacter2.attack
            const damage3 = this.currentCharacter3.attack
            const damage4 = this.currentCharacter4.attack
            (this.currentOpponent1.reduceHealth(damage1))
            (this.currentOpponent2.reduceHealth(damage2))
            (this.currentOpponent3.reduceHealth(damage3))
            (this.currentOpponent4.reduceHealth(damage4))
        } 
        if (currentOpponent1.defense < 0) {
            (Opponent.health - (Math.abs(currentOpponent1.defense)))
        return discardPile.push(currentOpponent1)
        }
        if (currentOpponent2.defense < 0) {
            (Opponent.health - (Math.abs(currentOpponent2.defense)))
        return discardPile.push(currentOpponent2)
        }
        if (currentOpponent3.defense < 0) {
            (Opponent.health - (Math.abs(currentOpponent3.defense)))
        return discardPile.push(currentOpponent3)
        }
        if (currentOpponent4.defense < 0) {
            (Opponent.health - (Math.abs(currentOpponent4.defense)))
        return discardPile.push(currentOpponent4)
        } else if (!this.isPlayerTurn) {
            const oppdamage1 = this.currentCharacter1.attack
            const oppdamage2 = this.currentCharacter2.attack
            const oppdamage3 = this.currentCharacter3.attack
            const oppdamage4 = this.currentCharacter4.attack
            (this.currentCharacter1.reduceHealth(oppdamage1))
            (this.currentCharacter2.reduceHealth(oppdamage2))
            (this.currentCharacter3.reduceHealth(oppdamage3))
            (this.currentCharacter4.reduceHealth(oppdamage4))
        } 
        if (currentCharacter1.defense < 0) {
            (Player.health - (Math.abs(currentCharacter1.defense)))
        return discardPile.push(currentCharacter1)
        }
        if (currentCharacter2.defense < 0) {
            (Player.health - (Math.abs(currentCharacter2.defense)))
        return discardPile.push(currentCharacter2)
        }
        if (currentCharacter3.defense < 0) {
            (Player.health - (Math.abs(currentCharacter3.defense)))
        return discardPile.push(currentCharacter3)
        }
        if (currentCharacter4.defense < 0) {
            (Player.health - (Math.abs(currentCharacter4.defense)))
        return discardPile.push(currentCharacter4)
        }
    }

    checkEndGame() {
        if (this.Player.isAlive() && this.Opponent.isAlive()) {
          this.isPlayerTurn = !this.isPlayerTurn;
          this.battle();
        } else if (this.Player.isAlive() && !this.Opponent.isAlive()) {
          console.log(`you won!`);
        } else (console.log('Game Over'))
        } 
}