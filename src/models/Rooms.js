const { DataTypes, Model } = require('sequelize');
const sequelize = require("../sequelize_connection");


class Rooms extends Model { }

Rooms.init({

    name: {

        type: DataTypes.STRING,
        allowNull: false
    },
    capacity: {

        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    {
        sequelize,
        tableName: "rooms"
    });


module.exports = Rooms;