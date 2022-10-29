

const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Characters extends Model {
    constructor(name, attack, defense) {
        this.name = name;
        this.attack = attack
        this.defense = defense
       
    }

    isAlive() {
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

Characters.init(
    {
        //define id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tier: {
            type: DataTypes.INTEGER,
            notNull: true,
            validate: {
                len: [1]
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isName: true
            }
        },
        attack: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sacrifice: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'characters'
    }
);

module.exports = Characters;