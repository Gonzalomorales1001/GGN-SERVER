const app=require('express');
const {getUsers}=require('../controllers/users');

const router=app.Router();

router.get('/',getUsers);

module.exports=router;