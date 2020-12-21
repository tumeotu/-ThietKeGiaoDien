var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('user/home', {layout: 'user' });
});

router.get('/products-men' , (rep,res,next)=>{
  res.render('user/products-men',{layout: 'user'});
});

router.get('/products-women' , (rep,res,next)=>{
  res.render('user/products-women',{layout: 'user'});
});


router.get('/checkout.html', function(req, res, next) {
  res.render('user/checkout', { title: 'Thanh toán',layout: 'user' });
});

router.get('/login.html', function(req, res, next) {
  res.render('user/login', { title: 'Đăng nhập' ,layout: 'user'});
});
router.get('/register.html', function(req, res, next) {
  res.render('user/register', { title: 'Đăng ký',layout: 'user' });
});

router.get('/products-detail.html', function(req, res, next) {
  res.render('user/product-detail', { title: 'Sản phẩm' ,layout: 'user'});
});

router.get('/products.html', function(req, res, next) {
  res.render('user/products', { title: 'Sản phẩm' ,layout: 'user'});
});

router.get('/try-clothes.html', function(req, res, next) {
  res.render('user/try-clothes', { title: 'Thử đồ' ,layout: 'user'});
});

module.exports = router;
