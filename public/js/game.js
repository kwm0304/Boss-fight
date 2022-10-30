

// const Player = require("../../models/Player");

// const Opponent = require("../../models/Opponent");

// $(document ).ready(function() {
//     let deck = [
//         {
//             tier: 'E',
//             name: 'OffCenterDiv',
//             attack: 5,
//             defense: 1,
//             sacrifice: 0 
//         },
//         {
//             tier: 'E',
//             name: 'Jester',
//             attack: 4,
//             defense: 2,
//             sacrifice: 0 
//         },
//         {
//             tier: 'E',
//             name: 'CTRLALTDELETE',
//             attack: 3,
//             defense: 3,
//             sacrifice: 0 
//         },
//         {
//             tier: 'D',
//             name: 'StackOverflowing',
//             attack: 6,
//             defense: 2,
//             sacrifice: 0 
//         },
//         {
//             tier: 'D',
//             name: 'forEach',
//             attack: 7,
//             defense: 1,
//             sacrifice: 0 
//         },
//         {
//             tier: 'D',
//             name: 'Terminal',
//             attack: 4,
//             defense: 4,
//             sacrifice: 0 
//         },
//         {
//             tier: 'D',
//             name: 'GoogleFu',
//             attack: 5,
//             defense: 3,
//             sacrifice: 0 
//         },
//         {
//             tier: 'C',
//             name: 'Gitsome',
//             attack: 5,
//             defense: 5,
//             sacrifice: 0 
//         },
//         {
//             tier: 'C',
//             name: 'GrimRepo',
//             attack: 8,
//             defense: 2,
//             sacrifice: 0 
//         },
//         {
//             tier: 'C',
//             name: 'Gitbasher',
//             attack: 2,
//             defense: 8,
//             sacrifice: 0 
//         },
//         {
//             tier: 'C',
//             name: 'CascadingSamuraiStars',
//             attack: 7,
//             defense: 3,
//             sacrifice: 0 
//         },
//         {
//             tier: 'C',
//             name: 'ErrorCatcher',
//             attack: 1,
//             defense: 9,
//             sacrifice: 0 
//         },
//         {
//             tier: 'C',
//             name: 'BranchSwitcher',
//             attack: 3,
//             defense: 7,
//             sacrifice: 0 
//         },
//         {
//             tier: 'C',
//             name: 'FourOhFour',
//             attack: 4,
//             defense: 6,
//             sacrifice: 0 
//         },
//         {
//             tier: 'C',
//             name: 'Refactorer',
//             attack: 6,
//             defense: 4,
//             sacrifice: 0 
//         },
//         {
//             tier: 'C',
//             name: 'CTRLV',
//             attack: 9,
//             defense: 1,
//             sacrifice: 0 
//         },
//         {
//             tier: 'C',
//             name: 'Iterator',
//             attack: 10,
//             defense: 0,
//             sacrifice: 1 
//         },
//         {
//             tier: 'C',
//             name: 'Bootstrapped',
//             attack: 0,
//             defense: 10,
//             sacrifice: 1 
//         },
//         {
//             tier: 'B',
//             name: 'destroyEnemy(you)',
//             attack: 8,
//             defense: 4,
//             sacrifice: 1 
//         },
//         {
//             tier: 'B',
//             name: 'DeathNode',
//             attack: 9,
//             defense: 3,
//             sacrifice: 1 
//         },
//         {
//             tier: 'B',
//             name: 'EventListener',
//             attack: 2,
//             defense: 10,
//             sacrifice: 1 
//         },
//         {
//             tier: 'B',
//             name: 'JSONFoorhees',
//             attack: 11,
//             defense: 1,
//             sacrifice: 1 
//         },
//         {
//             tier: 'A',
//             name: 'FatalError',
//             attack: 9,
//             defense: 5,
//             sacrifice: 2 
//         },
//         {
//             tier: 'A',
//             name: 'TheCompiler',
//             attack: 12,
//             defense: 2,
//             sacrifice: 3 
//         },
//         {
//             tier: 'A',
//             name: 'FullyStacked',
//             attack: 13,
//             defense: 1,
//             sacrifice: 4 
//         }

//     ];

    
    // var player = new Gameplayer(deck, 'Kenan', true);
    
    // player.generateHand(4);
    // console.log(player.hand)
    // console.log(player.deck)
    
    // var opponent = new Gameplayer(deck, 'opponent', false);
    // opponent.generateHand(4)
    // console.log(opponent.hand );
    // console.log(opponent.deck)
    
    // var drawButton = $('#draw')
    // var placeCardButton = $('#placeCard')
    // var handSlotName = $('.handslot')
    // var currentCardEl = $('.currentCard')
    //Hand slots
    
    // drawButton.on("click",drawCard)
    //targets hand slot based on currentCard and places its properties on the slot
//     handSlotName.on("click", function() {
//         var selectedTile = $(this).children().eq(0).val()
//         console.log("tile", selectedTile)
//         switch (selectedTile) {
//             case '0': 
//             $(this).children().eq(1).text(player.currentCard[0].name)
//             $(this).children().eq(2).text(player.currentCard[0].attack)
//             $(this).children().eq(3).text(player.currentCard[0].defense)

//             case '1': 
//             $(this).children().eq(1).text(player.currentCard[0].name)
//             $(this).children().eq(2).text(player.currentCard[0].attack)
//             $(this).children().eq(3).text(player.currentCard[0].defense)

//             case '2': 
//             $(this).children().eq(1).text(player.currentCard[0].name)
//             $(this).children().eq(2).text(player.currentCard[0].attack)
//             $(this).children().eq(3).text(player.currentCard[0].defense)
//             case '3': 
//             $(this).children().eq(1).text(player.currentCard[0].name)
//             $(this).children().eq(2).text(player.currentCard[0].attack)
//             $(this).children().eq(3).text(player.currentCard[0].defense)
//         }
//     })
//     function drawCard () {
//        if (player.isPlayerTurn) {
//         player.draw()
//         console.log(player.currentCard[0].name)
//         currentCardEl.text(player.currentCard[0].name) 
//        } else {
//         opponent.draw()
//        } 
//        drawButton.addClass('hidden')
       
    
//     }
//     function placeCard() {
//         if (player.isPlayerTurn) {
//             player.currentCard
            
//            } else {
//             opponent.draw()
//            } 
//     }

    
// });

// const Characters = require("../../models/Characaters");
// const Player = require("../../models/Player")
// const Opponent = require("../../models/Opponent")
// import { Player } from "../../models/Player";
//timer
// var turnTimer = document.getElementById('timer')
// var timeLeft;
//Buttons
// const startButton = document.getElementById('start-btn')
// const doneButton = document.getElementById('done-btn')
// const nextButton = document.getElementById('next-btn')
//Decks
// const playerDeck = document.getElementById('deck')
// const AIDeckEl = document.getElementById('AIDeck')
//Hand slots
// let hand_1 = document.getElementById('Hand1')
// let hand_2 = document.getElementById('Hand2')
// let hand_3 = document.getElementById('Hand3')
// let hand_4 = document.getElementById('Hand4')
//Game board slots
// const tile_1 = document.getElementById('tile1')
// const tile_2 = document.getElementById('tile2')
// const tile_3 = document.getElementById('tile3')
// const tile_4 = document.getElementById('tile4')
//Opponents hand/tiles
// var AIhand_1 = document.getElementById('AIHand1')
// var AIhand_2 = document.getElementById('AIHand2')
// var AIhand_3 = document.getElementById('AIHand3')
// var AIhand_4 = document.getElementById('AIHand4')
// var AItile_1 = document.getElementById('AItile1')
// var AItile_2 = document.getElementById('AItile2')
// var AItile_3 = document.getElementById('AItile3')
// var AItile_4 = document.getElementById('AItile4')

//Buttons
// startButton.addEventListener('click', startGame)
// doneButton.addEventListener('click', endTurn)
// nextButton.addEventListener('click', fight)




// let hand = [];
// let oppHand = [];


//Strategy Phase
// function countDown() {
//     var timeInterval = setInterval(function() {
//         timeLeft--;
//         turnTimer.textContent=timeLeft;
//         if (timeLeft <=0 ) {
//             clearInterval(timeInterval)
//             endTurn()
//         }
//     }, 1000)
//     console.log(timeLeft)
// }



//Draw card w/ Oppcard array 
//The new deck w/ splice is no longer array of objects, cant use 'this'
// function oppDraw() {
//     var index = Math.floor(Math.random()*oppCards.length-1)
//         return oppCards.splice(index, 1)
// }

// function generateAIHand(num) {
//     for (var i = 0; i < num; i++) {
//         oppHand.push(oppDraw());
//     }
//     //For initial turn: Places first 4 drawn cards onto board
    // AItile_1 = oppCards[0][0].name
    // AItile_2 = oppCards[1][0].name
    // AItile_3 = oppCards[2][0].name
    // AItile_4 = oppCards[3][0].name
//     //Next 4 drawn cards are in their hand
//     AIhand_1 = oppCards[4]
//     AIhand_2 = oppCards[5]
//     AIhand_3 = oppCards[6]
//     AIhand_4 = oppCards[7]

    // console.log(oppHand)
// }

//Attack logic
// function attack () {
    //select card
    //place card in 1tile
    //that tile interacts with AI_tile directly across
    //
// }
//draws specific number of cards (4) and pushes to hand array
// function 
//     console.log(hand)
//     console.log(deck)

        
//     //assigning drawn cards to hand slots
//     // var attack = (hand[0][0].defense) - (hand[1][0].attack);
//     // hand_1.innerHTML = ;

//     hand_2.innerHTML = hand[1][0].name;
//     hand_3.innerHTML = hand[2][0].name;
//     hand_4.innerHTML = hand[3][0].name;


//draws one card and removes it from array 


// function startGame() {
//          timeLeft = 60;
//         countDown();
//     //     startButton.classList.add('hidden')
//     //     doneButton.classList.remove('hidden')
//     //     nextButton.classList.remove('hidden')
        // generateHand(4)
        // generateAIHand(4)
//         // generateAIPlacement()
    
    //  }
// function placeCard () {
// hand_1Button.addEventListener('click', select())

//selectedCard
// }
// function attack() {

    //var damageInflicted = hand[x][0].defense - hand[y][0].attack;
    //if (damageInflicted < 0) {let playerDamage = (Player.health - (Math.abs(damageInflicted)}
// }

// function cleaveDamage(attack) {
    
// }
// var tile1attack
// var userDamage1 = 0; 

// function aiAttack() {
//     userDamage1 = tile_1.defense - AItile_1.attack
// }
// function endTurn() {
//  if (!isAlive
// }
// function fight()
// module.exports = Card;
//WORKS
//draw
//genHand
//Timer (counts at least)
//attack know how it 

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
//Need to make currentCharacter/enemy = placed character
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
        this.hand.forEach(makeCharacterObject())
    }
    
    generateHand(num) {
        for (var i = 0; i < num; i++) {
            hand.push(draw());
        }
        this.hand.forEach(makeCharacterObject())}

//Creates array as objects(hopefully)
    makeCharacterObject() {
        this.cards.forEach(element => {
            this.cards[index] = new Character(name, attack, defense)
        });
    }
    makeOpponentObject() {
        this.oppCards.forEach(element => {
            this.oppCards[index] = new Opponent(name, attack, defense)
        })
    }
   
    start() {
        // //Player hand
        placeCards()
        //Hitting done button
        endTurn()
        this.battle ()
        checkEndGame()
        //opp turn
        //if oppCharacter.attack > currentCharacter1.defense. -> place card 
        
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

    oppTurn() {
    //THEY PLACE CARD    
        //var isCardHere = ....
        //if (AIF1 == '') { AIB1}
    //ONCE CARDS PLACED TURN ENDS (hit bell)
    //if (AIboardslots == true) {endTurn()}    
    }    
}

module.exports= Game;