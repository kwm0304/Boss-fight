const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Player Model
class Player extends Model {
    
    constructor(deck) {
        this.name = username;
        this.health = 20;
        this.hand = generateHand(4);
        this.deck = deck
        this.board = new Array(4)
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
            hand.push(draw());
        }}

    draw() {
        var index = Math.floor(Math.random()*deck.length-1)
            return deck.splice(index, 1)
            }}


//Need to separate relevant game info and login info and join the 2
Player.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isUsername: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        },
        health: {
            type: DataTypes.INTEGER
        },
        wins: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        losses: {
            type: DataTypes.INTEGER,
            allowNull: true
        }    
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'Player'
    }
)

module.exports = Player;