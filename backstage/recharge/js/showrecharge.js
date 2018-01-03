
function ajaxUpdateSuccess(targetId) {
    var dataJson = {"targetId":targetId, "state":1};
    var url = "http://localhost:8080/xxmall/backstage/rechargeManage/updateRecharges";
    if( layuiAjaxBaseOfPage(dataJson,url) ){
        setTimeout(function () {
            $('.layui-laypage-btn').trigger('click');
        },1000);
    }
}

function ajaxUpdateFail(targetId) {
    var dataJson = {"targetId":targetId, "state":2};
    var url = "http://localhost:8080/xxmall/backstage/rechargeManage/updateRecharges";
    if( layuiAjaxBaseOfPage(dataJson,url) ){
        setTimeout(function () {
            $('.layui-laypage-btn').trigger('click');
        },1000);
    }
}

function ajaxUpdataRechargenumber(targetId,rechargenumber) {
    var dataJson = {"targetId":targetId, "rechargenumber":rechargenumber};
    var url = "http://localhost:8080/xxmall/backstage/rechargeManage/updateRecharges";
    if( layuiAjaxBaseOfPage(dataJson,url) ){
        setTimeout(function () {
            $('.layui-laypage-btn').trigger('click');
        },1000);
    }
}

function ajaxUpdataPaymentvoucher(targetId,paymentvoucher) {
    var dataJson = {"targetId":targetId, "paymentvoucher":paymentvoucher};
    var url = "http://localhost:8080/xxmall/backstage/rechargeManage/updateRecharges";
    if( layuiAjaxBaseOfPage(dataJson,url) ){
        setTimeout(function () {
            $('.layui-laypage-btn').trigger('click');
        },1000);
    }
}
