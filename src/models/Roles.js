const { DataTypes, Model } = require('sequelize');
const sequelize = require("../sequelize_connection");


class Roles extends Model { }

Roles.init({

    name: {

        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        sequelize,
        tableName: "roles"
    }
);


module.exports = Roles;