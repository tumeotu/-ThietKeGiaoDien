const products = [{
    _id: 1,
    name: "HANOI TEE",
    price: 249000,
    gender: "Male",
    category: "Áo",
    type: 't-shirt',
    images: ["https://cdn.leanservices.work/wp-content/uploads/2020/09/hanoiteeLB.jpg",
        "https://cdn.leanservices.work/wp-content/uploads/2020/09/hanoiteeFL2.jpg",
        "https://cdn.leanservices.work/wp-content/uploads/2020/09/hanoiteeFL.jpg",
        "https://cdn.leanservices.work/wp-content/uploads/2020/09/hanoiteeLB.jpg"]
},
    {
        _id: 2,
        name: "SIGHT TEE",
        price: 280000,
        gender: "Male",
        category: "Áo",
        type: 't-shirt',
        images: ["https://cdn.leanservices.work/wp-content/uploads/2020/08/SightTee-xam.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/08/SightTee-vang.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/08/SightTee-be.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/08/SightTee-nau.jpg"]
    },
    {
        _id: 3,
        name: "WIDE PANTS",
        price: 449000,
        gender: "Male",
        category: "Quần",
        type: 'quan-tay',
        images: ["https://ssstutter.com/wp-content/uploads/2020/12/WidePants_Xam_PT_2.jpg",
            "https://ssstutter.com/wp-content/uploads/2020/12/WidePants_Xam_FL_1.jpg",
            "https://ssstutter.com/wp-content/uploads/2020/12/WidePants_Den_FL_1.jpg",
            "https://ssstutter.com/wp-content/uploads/2020/12/WidePants_Nau_FL_1.jpg"]
    },
    {
        _id: 4,
        name: "GENTLE PANTS",
        price: 450000,
        gender: "Male",
        category: "Quần",
        type: 'quan-tay',
        images: ["https://cdn.leanservices.work/wp-content/uploads/2020/08/EASY-PANTS-DEN.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/08/EASY-PANTS-BE.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/08/EASY-PANTS-01.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/08/EASY-PANTS-XANH-NAVY.jpg"]
    },
    {
        _id: 5,
        name: "WRAP SKIRT",
        price: 319000,
        gender: "Female",
        category: "Quần",
        type: "quan-short",
        images: ["https://cdn.leanservices.work/wp-content/uploads/2020/12/WrapSkirt_Trang_FL_2.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/12/WrapSkirt_nau_FL_3.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/12/WrapSkirt_nau_FL_2.jpg",
            "https://ssstutter.com/wp-content/uploads/2020/12/WrapSkirt_Trang_FL_2.jpg"]
    },
    {
        _id: 6,
        name: "NATY JEANS",
        price: 449000,
        gender: "Female",
        category: "Quần",
        type: "quan-jean",
        images: ["https://cdn.leanservices.work/wp-content/uploads/2020/12/NattyJeans_Nhat_PT_2.jpg",
            "https://ssstutter.com/wp-content/uploads/2020/12/NattyJeans_Nhat_FL_1.jpg",
            "https://ssstutter.com/wp-content/uploads/2020/12/NattyJeans_Dam_PT_1.jpg",
            "https://ssstutter.com/wp-content/uploads/2020/12/NattyJeans_Dam_PT_2.jpg"]
    },
    {
        _id: 7,
        name: "GAME TEA",
        price: 249000,
        gender: "Female",
        category: "Áo",
        type: "t-shirt",
        images: ["https://cdn.leanservices.work/wp-content/uploads/2020/09/GameStart_Den_PT_1.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/09/GameStart_Navy_PT_1.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/09/GameStart_Trang_PT_2.jpg",
            "https://ssstutter.com/wp-content/uploads/2020/09/GameStart_Den_PT_2.jpg"]
    },
    {
        _id: 8,
        name: "SLIM JEANS",
        price: 499000,
        gender: "Male",
        category: "Quần",
        type: 'quan-jean',
        images: ["https://cdn.leanservices.work/wp-content/uploads/2020/09/slimjeans_xanhnhat_pt_1.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/09/slimjeans_den_pt_2.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/09/slimjeans_xanhnhat_pt_4.jpg",
            "https://ssstutter.com/wp-content/uploads/2020/09/slimjeans_den_fl.jpg"]
    },
    {
        _id: 9,
        name: "BOX SHORTS",
        price: 499000,
        gender: "Male",
        category: "Quần",
        type: 'quan-short',
        images: ["https://cdn.leanservices.work/wp-content/uploads/2020/12/boxshorts-nau-pt-1.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/12/boxshorts-den-fl-1.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/12/boxshorts-nau-fl-1.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/12/boxshorts-be-fl-1.jpg"]
    },
    {
        _id: 10,
        name: "JOY SHORTS",
        price: 349000,
        gender: "Female",
        category: "Quần",
        type: "quan-short",
        images: ["https://cdn.leanservices.work/wp-content/uploads/2020/09/JoyShorts_Den_PT_3.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/09/JoyShorts_Nau_PT_2.jpg",
            "https://cdn.leanservices.work/wp-content/uploads/2020/09/JoyShorts_Xam_PT_2.jpg",
            "https://ssstutter.com/wp-content/uploads/2020/09/JoyShorts_Den_PT_4.jpg"]
    },
]

module.exports.product_list = async () => {
    return products;
}

module.exports.lighlight_product_list = async () => {
    return products.slice(0, 4);
}

module.exports.topsale_product_list = async () => {
    return products.slice(3, 7);
}

module.exports.related_product_list = async () => {
    return products.slice(5, 9);
}

module.exports.product_detail = async (id) => {
    return products.find(p => p._id == id);
}

module.exports.selected_product_list = async (id) => {
    return products.slice(0, 5);
}

module.exports.male_product_list = async (type) => {
    if(type === undefined) 
    {
        const list =  products.filter(product => 
            product.gender === "Male"
        );
        return list;
    }
    return products.filter(product => product.gender === 'Male' && product.type === type);
}

module.exports.female_product_list = async (type) => {
    if(type === undefined) 
    {
        const list =  products.filter(product => 
            product.gender === "Female"
        );
        return list;
    }
    return products.filter(product => product.gender === 'Female' && product.type === type);
}
module.exports.male_product_list_shirt = async () => {
    return products.filter(function (product){
        return product.gender == 'Male' && product.category == 'Áo';
    });
}

module.exports.male_product_list_pants = async () => {
    return products.filter(function (product){
        return product.gender == 'Male' && product.category == 'Quần';
    });
}

module.exports.female_product_list_shirt = async () => {
    return products.filter(function (product){
        return product.gender == 'Female' && product.category == 'Áo';
    });
}

module.exports.female_product_list_pants = async () => {
    return products.filter(function (product){
        return product.gender == 'Female' && product.category == 'Quần';
    });
}