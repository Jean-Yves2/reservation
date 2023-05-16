const Reservations = require('./Reservations');
const Roles = require('./Roles');
const Rooms = require('./Rooms');
const Users = require('./Users')



Rooms.hasMany(Reservations,{
    foreignKey:"rooms_id",
    as: "roomsReservations"
});
Reservations.belongsTo(Rooms,{
    foreignKey:"rooms_id",
    as: "reservationsRooms"
});

Roles.hasMany(Users,{
    foreignKey:"roles_id",
    as: ""
});
Users.belongsTo(Roles,{
    foreignKey:"roles_id",
    as: "usersRoles"
});

Users.hasMany(Reservations,{
    foreignKey:"reservations_id",
    as: "usersReservations"
});
Reservations.belongsTo(Users,{
    foreignKey:"reservations_id",
    as: "reservationsUsers"
});



module.exports = { Reservations, Roles, Rooms, Users }