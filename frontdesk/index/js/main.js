$(function () {
    var a;
    $.ajax({
        url:"http://localhost:8080/xxmall/frontdesk/showProductType",
        type:"GET",
        async:false,
        success:function (data) {
            a = data.item.productType;
        }
    });

    alert(a[0].producttypename);
});