const express=require('express');
const cors=require('cors');
// const {DBconnection}=require('../config/config');

class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usersPath='/api/users'
        this.productsPath='/api/products'

        // this.connectDB()
        this.middlewares();
        this.routes();
    }
    // async connectDB(){
    //     await DBconnection()
    // }
    middlewares(){
        //CORS
        this.app.use(cors());

        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use(this.usersPath, require('../routes/usersRoute'));
        this.app.use(this.productsPath, require('../routes/productsRoute'));
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server Started at port ${this.port}`);
        })
    }
}

module.exports=Server;