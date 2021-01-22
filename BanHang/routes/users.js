var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

router.get('/', userController.index);

router.get('/products-men' , userController.products_men);

router.get('/products-women' , userController.products_women);

router.get('/checkout', userController.checkout);

router.get('/checkout-final', userController.checkout_final);

// router.post('/login', userController.login_post);

router.get('/login', userController.login_get);


router.get('/register', userController.register);

router.get('/products-detail', userController.products_detail);

router.get('/products', userController.products);

router.post('/products/delete', userController.products_delete);

router.get('/try-clothes', userController.try_clothes);

router.get('/quick-buy', userController.quick_buy);

module.exports = router;
