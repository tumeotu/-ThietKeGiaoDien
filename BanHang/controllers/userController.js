const productService = require('../models/productService');
const cartService = require('../models/cartService');
module.exports.index = async (req, res, next) => {
    const highlightProducts = await productService.lighlight_product_list();
    const topsaleProducts = await productService.topsale_product_list();
    const cartNumber = await cartService.cart_length();
    res.render('user/home', {layout: 'user',highlightProducts: highlightProducts, topsaleProducts: topsaleProducts, cartAmount: cartNumber });
}

module.exports.products_detail = async (req, res, next) => {
    if(req.query.add >= 1)
    {
        await cartService.add_cart(req.query.id, parseInt(req.query.add));
    }
    const product = await productService.product_detail(req.query.id);
    const relatedProduct1 = await productService.related_product_list();
    const relatedProduct2 = await productService.lighlight_product_list();
    const relatedProduct3 = await productService.topsale_product_list();
    const cartNumber = await cartService.cart_length();
    res.render('user/product-detail', {layout: 'user',product: product, relatedProduct1: relatedProduct1, relatedProduct2: relatedProduct2, relatedProduct3: relatedProduct3, cartAmount: cartNumber});
}

module.exports.checkout = async (req, res, next) => {
    const cartNumber = await cartService.cart_length();
    const selectedProducts = await cartService.cart_list();
    let costTotal = 0;
    selectedProducts.forEach(function (product){
        costTotal = costTotal + product.amount * product.price;
    })
    res.render('user/checkout', {layout: 'user', selectedProducts: selectedProducts, costTotal: costTotal, cartAmount: cartNumber });
}

module.exports.checkout_final = async (req, res, next) => {
    const cartNumber = await cartService.cart_length();
    const selectedProducts = await cartService.cart_list();
    let costTotal = 0;
    selectedProducts.forEach(function (product){
        costTotal = costTotal + product.amount * product.price;
    })
    res.render('user/checkout-final', {layout: 'user', selectedProducts: selectedProducts, costTotal: costTotal, cartAmount: cartNumber });
}


module.exports.products_men = async (req, res, next) => {
    const type = await req.query.type;
    const cartNumber = await cartService.cart_length();
    let maleProducts = await productService.male_product_list(type);
    if(req.query.type == '1')
        maleProducts = await productService.male_product_list_shirt();
    else if(req.query.type =='2')
        maleProducts = await productService.male_product_list_pants();
    res.render('user/products-men', {layout: 'user',maleProducts: maleProducts, cartAmount: cartNumber});
    
}

module.exports.products_women = async (req, res, next) => {
    const type = await req.query.type;
    const cartNumber = await cartService.cart_length();
    let femaleProducts = await productService.female_product_list(type);
    if(req.query.type == '1')
        femaleProducts = await productService.female_product_list_shirt()
    else if(req.query.type =='2')
        femaleProducts = await productService.female_product_list_pants();
    res.render('user/products-women', {layout: 'user',femaleProducts: femaleProducts, cartAmount: cartNumber});
}


module.exports.try_clothes = async (req, res, next) => {
    const cartNumber = await cartService.cart_length();
    const selectedProducts = await cartService.cart_list();
    if (req.query.id !== undefined) {
        await cartService.add_cart(req.query.id, 1);
        const newUrl = 'http://127.0.0.1:3000/try-clothes?gender=' + req.query.gender + '&&type=' + req.query.type;
        res.redirect(newUrl);
        return;
    }

    let listProduct = await productService.male_product_list_shirt();
    if (req.query.gender == '1' && req.query.type == '2')
        listProduct = await productService.male_product_list_pants();
    else if (req.query.gender == '2' && req.query.type == '1')
        listProduct = await productService.female_product_list_shirt();
    else if (req.query.gender == '2' && req.query.type == '2')
        listProduct = await productService.female_product_list_pants();
    if (req.query.gender == undefined && req.query.type == undefined) {
        req.query.gender = '2';
        req.query.type = '2';
    }

    if (req.query.product !== undefined) {
        const product = await productService.product_detail(req.query.product);
        res.render('layout', {
            partial_content: 'user/try-clothes',
            producted: product,
            products: listProduct,
            curGender: req.query.gender,
            curType: req.query.type,
            cartAmount: cartNumber,
            selectedProducts: selectedProducts
        });
        return;
    }

    res.render('layout', {
        partial_content: 'user/try-clothes',
        products: listProduct,
        curGender: req.query.gender,
        producted: undefined,
        curType: req.query.type,
        cartAmount: cartNumber,
        selectedProducts: selectedProducts
    });
}

module.exports.products = async (req, res, next) => {
    const cartNumber = await cartService.cart_length();
    res.render('user/products', { layout: 'user'});
}

module.exports.register = async (req, res, next) => {
    const cartNumber = await cartService.cart_length();
    res.render('user/register', { layout: 'user', cartAmount: cartNumber});
}

module.exports.login_get = async (req, res, next) => {
    const cartNumber = await cartService.cart_length();
    res.render('user/login', { layout: 'user', cartAmount: cartNumber});
}

// module.exports.login_post = async (req, res, next) => {
//     res.render('user/home', { layout: 'user'});
// }

module.exports.products_delete = async (req, res, next) => {
    const productId = req.body.id;
    await cartService.delete_cart(productId);
}

module.exports.quick_buy = async (req, res, next) => {
    await cartService.add_cart(req.query.id, parseInt(req.query.amount));
    const cartNumber = await cartService.cart_length();
    const selectedProducts = await cartService.cart_list();
    let costTotal = 0;
    selectedProducts.forEach(function (product){
        costTotal = costTotal + product.amount * product.price;
    })
    res.render('user/checkout', {layout: 'user', selectedProducts: selectedProducts, costTotal: costTotal, cartAmount: cartNumber });  
}
