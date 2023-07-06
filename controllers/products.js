const {request,response}=require('express');

const getProducts=(req=request,res=response)=>{
    res.json({
        "msg":"Get productos funcionando!!"
    });
}

const postProducts=(req=request,res=response)=>{
    res.json({
        "msg":"Post productos funcionando"
    });
}

const putProducts=(req=request,res=response)=>{
    res.json({
        "msg":"put productos funcionando"
    })
}

const deleteProducts=(req=request,res=response)=>{
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