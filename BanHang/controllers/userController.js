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
    let maleProducts = await productService.male_product_list(type);
    if(req.query.type == '1')
        maleProducts = await productService.male_product_list_shirt();
    else if(req.query.type =='2')
        maleProducts = await productService.male_product_list_pants();
    res.render('user/products-men', {layout: 'user',maleProducts: maleProducts});
}

module.exports.products_women = async (req, res, next) => {
    const type = await req.query.type;
    let femaleProducts = await productService.female_product_list(type);
    if(req.query.type == '1')
        femaleProducts = await productService.female_product_list_shirt()
    else if(req.query.type =='2')
        femaleProducts = await productService.female_product_list_pants();
    res.render('user/products-women', {layout: 'user',femaleProducts: femaleProducts});
}


module.exports.try_clothes = async (req, res, next) => {

    let listProduct = await productService.male_product_list_shirt();
    if(req.query.gender == '1' && req.query.type == '2')
        listProduct = await productService.male_product_list_pants();
    else if(req.query.gender == '2' && req.query.type == '1')
        listProduct = await productService.female_product_list_shirt();
    else if(req.query.gender == '2' && req.query.type == '2')
        listProduct = await productService.female_product_list_pants();
    if(req.query.gender == undefined && req.query.type == undefined)
    {
        req.query.gender = '2';
        req.query.type = '2';
    }

    res.render('layout', {partial_content: 'user/try-clothes', products: listProduct, curGender: req.query.gender, curType: req.query.type});
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



