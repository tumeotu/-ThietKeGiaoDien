$(document).onclick('.number-spinner button', function () {
    var btn = $(this),
        oldValue = btn.closest('.number-spinner').find('input').val().trim(),
        newVal = 0;
    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    btn.closest('.number-spinner').find('input').val(newVal);
});

function deleteProduct(id, price) {
    const deletedProductFinder = '#'+ id + 'DIV';
    const deletedProductAmountFinder = '#'+ id + 'AMOUNT';
    $(document).ready(async function () {
        let costTotal = parseFloat($('#costTotal1').text()) - parseFloat(price) * parseInt($(deletedProductAmountFinder).val());
        $('#costTotal1').text(costTotal + 'đ');
        $('#costTotal2').text(costTotal + 'đ');
        $(deletedProductFinder).css('display', 'none');
    })
}

function addOne(price){
    $(document).ready(async function () {
        let costTotal = parseFloat($('#costTotal1').text()) + parseFloat(price);
        $('#costTotal1').text(costTotal + 'đ');
        $('#costTotal2').text(costTotal + 'đ');
    })
}

function subOne(price){
    $(document).ready(async function () {
        let costTotal = parseFloat($('#costTotal1').text()) - parseFloat(price);
        $('#costTotal1').text(costTotal + 'đ');
        $('#costTotal2').text(costTotal + 'đ');
    })
}