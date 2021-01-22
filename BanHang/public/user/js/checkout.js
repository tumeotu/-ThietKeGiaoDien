function deleteProduct(id, price) {
    const deletedProductFinder = '#'+ id + 'DIV';
    const deletedProductAmountFinder = '#'+ id + 'AMOUNT';
    $(document).ready(async function () {
        $.ajax({
            type: "POST",
            url: "/products/delete",
            data: "id=" + id
            }
        );
        console.log("Hello");
        let costTotal = parseFloat($('#costTotal').text()) - parseFloat(price) * parseInt($(deletedProductAmountFinder).val());
        $('#costTotal').text(costTotal);
        $('#costTotal1').text(costTotal.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+" đ");
        $('#costTotal2').text(costTotal.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+" đ");
        $(deletedProductFinder).css('display', 'none');

        //Xóa số lượng sản phẩm đã chọn xóa trên Cart
        const oldProductAmount = $('[name = "productAmount"]').first().text();
        const newProductAmount = parseFloat(oldProductAmount) - parseInt($(deletedProductAmountFinder).val());
        $('[name = "productAmount"]').text(newProductAmount);
    })
}

function addOne(id, price){
    $(document).ready(async function () {
        //Cập nhật số lượng sản phẩm trên Cart
        const deletedProductAmountFinder = '#'+ id + 'AMOUNT';
        const oldValue = $(deletedProductAmountFinder).val().trim();
        const newVal = parseInt(oldValue) + 1;
        $(deletedProductAmountFinder).val(newVal);


        let costTotal = parseFloat($('#costTotal').text()) + parseFloat(price);
        $('#costTotal').text(costTotal);
        $('#costTotal1').text(costTotal.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+" đ");
        $('#costTotal2').text(costTotal.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+" đ");


        //Tăng số lượng sản phẩm đã chọn xóa trên Cart
        const oldProductAmount = $('[name = "productAmount"]').first().text();
        const newProductAmount = parseFloat(oldProductAmount) + 1;
        $('[name = "productAmount"]').text(newProductAmount);
    })
}

function subOne(id, price){
    $(document).ready(async function () {
        //Cập nhật số lượng sản phẩm trên Cart
        const deletedProductAmountFinder = '#'+ id + 'AMOUNT';
        const oldValue = $(deletedProductAmountFinder).val().trim();
        if(oldValue == 1){
            return;
        }
        const newVal = parseInt(oldValue) - 1;
        $(deletedProductAmountFinder).val(newVal);


        let costTotal = parseFloat($('#costTotal').text()) - parseFloat(price);
        $('#costTotal').text(costTotal);
        $('#costTotal1').text(costTotal.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+" đ");
        $('#costTotal2').text(costTotal.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+" đ");

        //Giảm số lượng sản phẩm đã chọn xóa trên Cart
        const oldProductAmount = $('[name = "productAmount"]').first().text();
        const newProductAmount = parseFloat(oldProductAmount) - 1;
        $('[name = "productAmount"]').text(newProductAmount);
    })
}

function Checkout_final(cartAmount){
    if(cartAmount>0)
    {
        let url = 'http://127.0.0.1:3000/checkout-final';
        return window.location= url;
    }
    else
    {
        alert("Giỏ hàng trống!!!");
    }
}