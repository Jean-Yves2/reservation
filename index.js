require('dotenv').config();
const PORT =process.env.PORT;
const router = require('./src/router')
const express =require('express');
const app=express();


app.use(express.json());

app.use(express.urlencoded({ extended:true}));

app.use(router);

app.listen(PORT ,()=>{
    console.log(`Listening on http://localhost:${PORT}`);
});
