var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

router.get('/', userController.index);

router.get('/products-men' , userController.products_men);

router.get('/products-women' , userController.products_women);


router.get('/checkout', userController.checkout);

router.get('/login', function(req, res, next) {
  res.render('user/login', { title: 'Đăng nhập' ,layout: 'user'});
});
router.get('/register', function(req, res, next) {
  res.render('user/register', { title: 'Đăng ký',layout: 'user' });
});

router.get('/products-detail', userController.products_detail);

router.get('/products', function(req, res, next) {
  res.render('user/products', { title: 'Sản phẩm' ,layout: 'user'});
});

router.get('/try-clothes', userController.try_clothes);

module.exports = router;
