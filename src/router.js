const express = require('express');
const router = express.Router();

const userController = require('./controllers/Users.controllers')
const roomController = require('./controllers/rooms.controller')

router.get('/',(req,res)=>{
    res.send('hello')
})

router.get('/room/:id',roomController.getOneRoom)
module.exports=router;