const {request,response}=require('express');
const Product= require('../models/product');

const getProducts=async(req=request,res=response)=>{
    res.sendFile('C:\\Users\\pasita\\Desktop\\programacion\\GGN Projects\\Server\\public\\test.html');
    // res.json({
    //     "msg":"Get productos funcionando!!"
    // });
}

const postProducts=async(req=request,res=response)=>{
    // const {name,description,price}=req.body;

    // const newProduct=new Product();

    const img=req.files;

    res.json(img);
}

const putProducts=async(req=request,res=response)=>{
    res.json({
        "msg":"put productos funcionando"
    })
}

const deleteProducts=async(req=request,res=response)=>{
    res.json({
        "msg":"delete productos funcionando!"
    })
}

module.exports={
    getProducts,
    postProducts,
    putProducts,
    deleteProducts
}