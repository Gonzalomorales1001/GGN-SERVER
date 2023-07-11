const multer=require('multer');
const path = require('path');
const {v4:uuidv4}= require('uuid');

const storage = multer.diskStorage({
    filename: (req, file, callback)=>{
        const originalnameArray=file.originalname.split('.')
        const filename=originalnameArray[0]+'-'+uuidv4()+'.'+originalnameArray[1];
        callback(null, filename);
    },
    destination: 'uploads',
})

const uploadIMG= multer({
    storage,
    dest: 'uploads',
    limits: {
        fileSize: 8000000,
    },
    fileFilter: (req,file,callBack)=>{
        const imgTypes=/jpg|jpeg|png|gif/;
        const isImgMimeType=imgTypes.test(file.mimetype);
        const extName=imgTypes.test(path.extname(file.originalname));
        if (isImgMimeType||extName) {
            return callBack(null,true);
        } else {
            return callBack("File type not supported, please upload an image file!")
        }
    }
});


module.exports={
    uploadIMG
};