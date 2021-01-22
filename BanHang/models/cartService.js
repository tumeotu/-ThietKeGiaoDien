const productService = require('../models/productService');


let cart = [
    {
        _id: 1,
        name: "HANOI TEE",
        amount: 1,
        price: 249000,
        images: ["https://cdn.leanservices.work/wp-content/uploads/2020/09/hanoiteeLB.jpg",
        "https://cdn.leanservices.work/wp-content/uploads/2020/09/hanoiteeFL2.jpg",
        "https://cdn.leanservices.work/wp-content/uploads/2020/09/hanoiteeFL.jpg",
        "https://cdn.leanservices.work/wp-content/uploads/2020/09/hanoiteeLB.jpg"]
    },
    {
        _id: 2,
        name: "SIGHT TEE",
        amount: 2,
        price: 280000,
        images: ["https://cdn.leanservices.work/wp-content/uploads/2020/08/SightTee-xam.jpg",
        "https://cdn.leanservices.work/wp-content/uploads/2020/08/SightTee-vang.jpg",
        "https://cdn.leanservices.work/wp-content/uploads/2020/08/SightTee-be.jpg",
        "https://cdn.leanservices.work/wp-content/uploads/2020/08/SightTee-nau.jpg"]
    },
    {
        _id: 3,
        name: "SSS' WIDE PANTS",
        amount: 1,
        price: 449000,
        images: ["https://ssstutter.com/wp-content/uploads/2020/12/WidePants_Xam_PT_2.jpg",
        "https://ssstutter.com/wp-content/uploads/2020/12/WidePants_Xam_FL_1.jpg",
        "https://ssstutter.com/wp-content/uploads/2020/12/WidePants_Den_FL_1.jpg",
        "https://ssstutter.com/wp-content/uploads/2020/12/WidePants_Nau_FL_1.jpg"]
    }

]

module.exports.cart_list = async() => {
    return cart;
}

module.exports.add_cart = async(id, amount) => {
    console.log(id);
    let product = await productService.product_detail(id);

    const exist = cart.findIndex(x => x._id == id);

    if(exist != -1)
    {
        cart[exist].amount += amount;
        return;
    }

    let record = {
        _id: product._id,
        amount : amount,
        name: product.name,
        price: product.price,
        images: product.images
    }
    cart.push(record);
}

module.exports.cart_length = async() =>{
    let cartAmount = 0;
    cart.forEach(function (product){
        cartAmount = cartAmount + product.amount;
    })
    return cartAmount;
}


module.exports.delete_cart = async(id) => {
    console.log(id);

    const exist = cart.findIndex(x => x._id == id);

    if(exist != -1)
    {
        cart = cart.filter((function (product){
            return product._id != id;
        }))
        return;
    }
}