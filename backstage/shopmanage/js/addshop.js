var validatebl = new Array(3);

function ajaxValidateShopOfUsername(obj) {
    var value = $(obj).val();
    if(value == ""){
        alert("用户名不能为空。");
        validatebl[0] = false;
    }else if(value.length<5 || value.length>20){
        alert("账号必须在5~20个字之间(包含5、20)。");
        validatebl[0] = false;
    }else{
        var dataJson = {"username":$(obj).val()};
        var url = "http://localhost:8080/xxmall/backstage/shopManage/shopQuery/queryUsername";
        var meassage = ajaxBaseOfValidateMessage(dataJson,url);
        if(meassage != "200"){
            alert(meassage);
            validatebl[0] = false;
        }else{
            validatebl[0] = true;
        }
    }
    validateForBlOfShop(validatebl);
}

function ajaxValidateShopOfShopName(obj) {
    var value = $(obj).val();
    if(value == ""){
        alert("店铺名不能为空。");
        validatebl[1] = false;
    }else if(value.length<2 || value.length>15){
        alert("店铺名必须在2~15个字之间(包含2、15)。");
        validatebl[1] = false;
    }else {
        var dataJson = {"shopName": $(obj).val()};
        var url = "http://localhost:8080/xxmall/backstage/shopManage/shopQuery/queryShopName";
        var meassage = ajaxBaseOfValidateMessage(dataJson, url);
        if (meassage != "200") {
            alert(meassage);
            validatebl[1] = false;
        }else{
            validatebl[1] = true;
        }
    }
    validateForBlOfShop(validatebl);
}

function ajaxValidateShopOfAddress(obj) {
    var address = $(obj).val();
    var ssq = $("#addressByLcyPlaceholder").text();
    if(address == ""){
        alert("请选择省市区");
        validatebl[2] = false;
    }else if(ssq==""){
        alert("详细地址不能为空。");
        validatebl[2] = false;
    }else if(ssq.length > 255){
        alert("详细地址最大长度为255.");
        validatebl[2] = false;
    }else{
        $("[name='address']").val(address + ssq);
        validatebl[2] = true;
    }
    validateForBlOfShop(validatebl);
}

function validateForBlOfShop(validatebl){
    var state = true;
    for(var i=0; i<validatebl.length; i++){
        if(!validatebl[i]){
            state = false;
            break;
        }
    }
    if(state){
        $("#addShopSub").removeClass('layui-btn-disabled');
    }else{
        $("#addShopSub").addClass('layui-btn-disabled');
    }
    return state;
}

function validateSetFalse() {
    for(var i=0; i<validatebl.length; i++){
        validatebl[i] = false;
    }
    validateForBlOfShop(validatebl);
}