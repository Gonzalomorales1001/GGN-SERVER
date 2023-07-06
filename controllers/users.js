const {request,response}=require('express');

const getUsers=(req=request,res=response)=>{
    res.json({
        "msg":"Get users Funcionando!!"
    });
}

const postUsers=(req=request,res=response)=>{
    res.json({
        "msg":"Post users Funcionando!!"
    });
}

const putUsers=(req=request,res=response)=>{
    res.json({
        "msg":"PUT users Funcionando!!"
    });
}

const deleteUsers=(req=request,res=response)=>{
    res.json({
        "msg":"delete users Funcionando!!"
    });
}

module.exports={
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
};