const {Sequelize} = require('sequelize');


const sequelize = new Sequelize(process.env.PG_URL, {
define: {
    createdAt: "created_at", // Pour TOUS nos modèles, on modifie le mapping par défaut du created_at
    updatedAt: "updated_at"
}
});


sequelize.authenticate().then(() => { console.log("OK");}).catch((error) => { console.error(error);});

module.exports=sequelize;