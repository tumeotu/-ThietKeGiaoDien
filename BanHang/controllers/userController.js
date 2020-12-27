const productService = require('../models/productService');

module.exports.index = async (req, res, next) => {
    const highlightProducts = await productService.lighlight_product_list();
    const topsaleProducts = await productService.topsale_product_list();
    res.render('user/home', {layout: 'user',highlightProducts: highlightProducts, topsaleProducts: topsaleProducts });
}

module.exports.products_detail = async (req, res, next) => {
    const product = await productService.product_detail(req.query.id);
    const relatedProduct1 = await productService.related_product_list();
    const relatedProduct2 = await productService.lighlight_product_list();
    const relatedProduct3 = await productService.topsale_product_list();
    res.render('user/product-detail', {layout: 'user',product: product, relatedProduct1: relatedProduct1, relatedProduct2: relatedProduct2, relatedProduct3: relatedProduct3});
}

module.exports.checkout = async (req, res, next) => {
    const selectedProducts = await productService.selected_product_list();
    let costTotal = 0;
    selectedProducts.forEach(function (product){
        costTotal = costTotal + product.price;
    })
    res.render('user/checkout', {layout: 'user', selectedProducts: selectedProducts, costTotal: costTotal });
}

module.exports.products_men = async (req, res, next) => {
    const type = await req.query.type;
    const maleProducts = await productService.male_product_list(type);
    res.render('user/products-men', {layout: 'user',maleProducts: maleProducts});
}

module.exports.products_women = async (req, res, next) => {
    const type = await req.query.type;
    const femaleProducts = await productService.female_product_list(type);
    res.render('user/products-women', {layout: 'user',femaleProducts: femaleProducts});
}


module.exports.try_clothes = async (req, res, next) => {
    res.render('user/try-clothes', {layout: 'user' });
}

module.exports.products = async (req, res, next) => {
    res.render('user/products', { layout: 'user'});
}

module.exports.register = async (req, res, next) => {
    res.render('user/register', { layout: 'user'});
}

module.exports.login_get = async (req, res, next) => {
    res.render('user/login', { layout: 'user'});
}

// module.exports.login_post = async (req, res, next) => {
//     res.render('user/home', { layout: 'user'});
// }



