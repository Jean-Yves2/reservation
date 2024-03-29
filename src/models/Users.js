const { DataTypes,Model } = require('sequelize');
const sequelize = require("../sequelize_connection");


class Users extends Model{}

Users.init({

    first_name: {

        type:DataTypes.STRING,
        allowNull:false
    },
    last_name: {

        type:DataTypes.STRING,
        allowNull:false
    },password: {

        type:DataTypes.STRING,
        allowNull:false
    },
    roles_id: {

        type:DataTypes.INTEGER,
        allowNull:false
    },
    reservations_id: {

        type:DataTypes.INTEGER,
        allowNull:false
    },
},
    {
        sequelize,
        tableName:"users"
    });


module.exports= Users;
