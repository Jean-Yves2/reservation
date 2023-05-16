const { DataTypes, Model } = require('sequelize');
const sequelize = require("../sequelize_connection");


class Reservations extends Model { }

Reservations.init({

    start_time: {

        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {

        type: DataTypes.DATE,
        allowNull: false
    },
    rooms_id: {

        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        sequelize,
        tableName: "reservations"
    });


module.exports = Reservations;