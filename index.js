const Server = require('./models/server');
require('dotenv').config();
const SERVER= new Server();
SERVER.listen();


//testing
// const express=require('express');
// const app=express();
// app.get('/',(req,res)=>{
//     res.send("Hola!");
// });
// app.get('/paginita',(req,res)=>{
//     res.sendFile(__dirname + "\\public\\page.html");
// });
// app.use(express.static('public'));
// app.listen(4000);