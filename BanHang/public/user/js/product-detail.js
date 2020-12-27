$(document).click('.number-spinner button', function () {
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


$(document).ready(function(){
    $("#btn-size-1").click(function(){
        $("#span-size").text($("#btn-size-1").val());
        $("#btn-size-1").addClass("isSelected");
        $("#btn-size-2").removeClass("isSelected");
        $("#btn-size-3").removeClass("isSelected");
    });
    $("#btn-size-2").click(function(){
        $("#span-size").text($("#btn-size-2").val());
        $("#btn-size-2").addClass("isSelected");
        $("#btn-size-1").removeClass("isSelected");
        $("#btn-size-3").removeClass("isSelected");
    });
    $("#btn-size-3").click(function(){
        $("#span-size").text($("#btn-size-3").val());
        $("#btn-size-3").addClass("isSelected");
        $("#btn-size-2").removeClass("isSelected");
        $("#btn-size-1").removeClass("isSelected");

    });

    $("#btn-color-1").click(function(){
        $("#span-color").text($("#btn-color-1").val());
        $("#btn-color-1").addClass("isSelected");
        $("#btn-color-2").removeClass("isSelected");
        $("#btn-color-3").removeClass("isSelected");
    });
    $("#btn-color-2").click(function(){
        $("#span-color").text($("#btn-color-2").val());
        $("#btn-color-2").addClass("isSelected");
        $("#btn-color-1").removeClass("isSelected");
        $("#btn-color-3").removeClass("isSelected");
    });
    $("#btn-color-3").click(function(){
        $("#span-color").text($("#btn-color-3").val());
        $("#btn-color-3").addClass("isSelected");
        $("#btn-color-2").removeClass("isSelected");
        $("#btn-color-1").removeClass("isSelected");

    });
});