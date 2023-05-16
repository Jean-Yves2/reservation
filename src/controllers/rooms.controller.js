const {Rooms}=require('../models/index.model')


module.exports= {

    getOneRoom: async (req,res)=>{
        try {
            const {id} = req.params;
            const room = await Rooms.findByPk(id)

            res.json(room)
            
        } catch (error) {
            console.log(error)
        }
    }
}