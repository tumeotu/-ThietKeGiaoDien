const productService = require('../models/productService');

module.exports.index = async (req, res, next) => {
    const highlightProducts = await productService.lighlight_product_list();
    const topsaleProducts = await productService.topsale_product_list();
    // res.render('layout', { partial_content: 'user/home', highlightProducts: highlightProducts, topsaleProducts: topsaleProducts});
    // res.render('user/home', {layout: 'user'});
    res.render('layout', { partial_content: 'user/home', highlightProducts: highlightProducts, topsaleProducts: topsaleProducts});
}

module.exports.products_detail = async (req, res, next) => {
    const product = await productService.product_detail(req.query.id);
    const relatedProduct1 = await productService.related_product_list();
    const relatedProduct2 = await productService.lighlight_product_list();
    const relatedProduct3 = await productService.topsale_product_list();
    res.render('layout', { partial_content: 'user/product-detail', product: product, relatedProduct1: relatedProduct1, relatedProduct2: relatedProduct2, relatedProduct3: relatedProduct3});
}

module.exports.checkout = async (req, res, next) => {
    const selectedProducts = await productService.selected_product_list();
    let costTotal = 0;
    selectedProducts.forEach(function (product){
        costTotal = costTotal + product.price;
    })
    res.render('layout', {partial_content: 'user/checkout', selectedProducts: selectedProducts, costTotal: costTotal });
}

module.exports.products_men = async (req, res, next) => {
    const maleProducts = await productService.male_product_list();
    res.render('layout', {partial_content: 'user/products-men', maleProducts: maleProducts});
}

module.exports.products_women = async (req, res, next) => {
    const femaleProducts = await productService.female_product_list();
    res.render('layout', {partial_content: 'user/products-women', femaleProducts: femaleProducts });
}


module.exports.try_clothes = async (req, res, next) => {
    res.render('layout', {partial_content: 'user/try-clothes' });
}



