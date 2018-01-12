$(function () {
    // 获取商品类型
    $.ajax({
        url:"http://localhost:8080/xxmall/frontdesk/showProductType",
        type:"GET",
        async:false,
        success:function (data) {
            var productType = data.item.productType;
            for(var i=0; i<16; i++){
                var html = "<li>\n" +
                    "                <a href=\"#\"></a> /\n" +
                    "                <a href=\"#\"></a> /\n" +
                    "                <a href=\"#\"></a>\n" +
                    "                <i class=\"iconfont\">&#xe6a7;</i>\n" +
                    "            </li>";
                var navMoreHtml = "<div>"+i+"</div>";
                $('#nav ul').append(html);
                $('#nav-more').append(navMoreHtml);
            }
            for(var i=0; i<productType.length; i++){
                $('#nav li a').eq(i).attr("href","http://localhost:8080/xxmall/productType?id="+productType[i].id);
                $('#nav li a').eq(i).text(productType[i].producttypename);
            }
        }
    });

    $('#nav li').hover(function () {
        $('#nav-more').css("display","block");
        $('#nav-more div').eq($(this).index()).css("display","block");
    },function () {
        $('#nav-more').css("display","none");
        $('#nav-more div').eq($(this).index()).css("display","none");
    });
});