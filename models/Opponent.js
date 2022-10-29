const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Opponent extends Player {
    constructor (name = '') {
    this.name = //Whatever we call it;
    this.health = 20;
}

isAlive() {
    if (this.health === 0) {
        return false;
    }
    return true;
}

reduceHealth(health) {
    this.health -= this.health;

    if (this.health < 0) {
        this.health = 0;
    }
}
}

Opponent.init (
    {
    health: {
    type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'Opponent'
    }
)

module.exports = Opponent;