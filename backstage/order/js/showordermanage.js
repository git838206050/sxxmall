function ajaxUpdataExpressno(targetId,expressNo){
    var dataJson = {"targetId":targetId, "expressNo":expressNo};
    var url = "http://localhost:8080/xxmall/backstage/orderManage/updataPdOrderOfExpressNo";
    if( layuiAjaxBaseOfPage(dataJson,url) ){
        setTimeout(function () {
            $('.layui-laypage-btn').trigger('click');
        },1000);
    }
}

function ajaxUpdataExpressName(targetId,expressName){
    var dataJson = {"targetId":targetId, "expressName":expressName};
    var url = "http://localhost:8080/xxmall/backstage/orderManage/updataPdOrderOfExpressName";
    if( layuiAjaxBaseOfPage(dataJson,url) ){
        setTimeout(function () {
            $('.layui-laypage-btn').trigger('click');
        },1000);
    }
}

function ajaxUpdataDeliverAddress(targetId,deliverAddress){
    var dataJson = {"targetId":targetId, "deliverAddress":deliverAddress};
    var url = "http://localhost:8080/xxmall/backstage/orderManage/updataPdOrderOfDeliverAddress";
    layuiAjaxBaseOfPage(dataJson,url);
}

function ajaxUpdataOrderStatus(targetId,orderStatus){
    var dataJson = {"targetId":targetId, "orderStatus":orderStatus};
    var url = "http://localhost:8080/xxmall/backstage/orderManage/updataPdOrderOfOrderStatus";
    if( layuiAjaxBaseOfPage(dataJson,url) ){
        setTimeout(function () {
            $('.layui-laypage-btn').trigger('click');
        },1000);
    }
}
