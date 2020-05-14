var express = require('express');
var router = express.Router();
var usercontroller=require('../controllers/userController')
/* GET users listing. */
router.get('/', usercontroller.index)
router.get('/register',usercontroller.register)
router.post('/DATA',usercontroller.infoUser)

module.exports = router;
