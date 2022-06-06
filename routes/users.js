var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller');

/* GET users listing. */
router.get('/',userController.getInfo);
router.get('/l',userController.getDate);
router.post('/',userController.postInfo);

module.exports = router;
