const { DataTypes, Model } = require('sequelize');
const sequelize = require("../sequelize_connection");


class Reservation extends Model { }

Reservation.init({

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
        tableName: "reservation"
    });


module.exports = Reservation;