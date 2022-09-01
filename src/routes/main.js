const express = require ('express');
const router = express.Router();
const {main, about, login, processLogin, register, processRegister} = require('../controllers/mainController')

router.get('/', main) ;
router.get('/about', about) ;

router.get('/login', login) ;
router.post('/login', processLogin) ;

router.post('/register', register) ;
router.get('/register', processRegister) ;

module.exports = router