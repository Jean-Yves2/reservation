const { DataTypes, Model } = require('sequelize');
const sequelize = require("../sequelize_connection");


class Role extends Model { }

Role.init({

    name: {

        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        sequelize,
        tableName: "role"
    }
);


module.exports = Role;