const app=require('express');
const {getProducts}=require('../controllers/products');

const router=app.Router();

router.get('/',getProducts);

module.exports=router;