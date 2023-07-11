const app=require('express');
const {getProducts,postProducts,putProducts,deleteProducts}=require('../controllers/products');
const {uploadIMG}=require('../middlewares/upload');

const router=app.Router();

router.get('/',getProducts);

router.post('/',[
    uploadIMG.array('image',[5]),
],postProducts);

router.put('/:id',putProducts);

router.delete('/:id',deleteProducts);

module.exports=router;