var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin/dashboard', { title: 'Trang chủ',layout: 'admin' });
});
router.get('/general_statistics.html', function(req, res, next) {
    res.render('admin/general_statistics', { title: 'Thống kê chung',layout: 'admin' });
});
router.get('/detail_statistics.ejs', function(req, res, next) {
    res.render('admin/detail_statistics.ejs', { title: 'Thống kê chi tiết',layout: 'admin' });
});
module.exports = router;