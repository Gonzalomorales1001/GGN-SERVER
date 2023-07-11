const express=require('express');
const cors=require('cors');
const {DBconnection}=require('../config/config');

// const uploads=require('../middlewares/upload');

// const multer=require('multer');
// const path=require('path');

class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usersPath='/api/users'
        this.productsPath='/api/products'

        this.connectDB()
        this.middlewares();
        this.routes();
    }
    async connectDB(){
        await DBconnection();       
    }
    middlewares(){
        //CORS
        this.app.use(cors());

        this.app.use(express.json());
        this.app.use(express.static('public'));
        // this.app.use(multer({dest:'files'}).single('image'));
        // this.app.use(uploads);
    }
    routes(){
        this.app.use(this.usersPath, require('../routes/usersRoute'));
        this.app.use(this.productsPath, require('../routes/productsRoute'));
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server Started at port ${this.port}`);
            console.log('Connecting to database...');
        });
    }
}

module.exports=Server;