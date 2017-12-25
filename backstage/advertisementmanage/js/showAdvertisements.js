$(function () {
});
function ajaxUpdateExpiretime(targetId,expiretime){
    var dataJson = {"targetId":targetId, "expiretime":expiretime};
    var requestJson = $.extend({}, adminInfo,dataJson);
    $.ajax({
        url:"http://localhost:8080/xxmall/backstage/advertisementManage/updateExpiretime",
        type:"POST",
        data: requestJson,
        success:function (data) {
            layer.msg(data.message);
            setTimeout(function () {
                $('.layui-laypage-btn').trigger('click');
            },500);
            return data.message;
        },
        error:function () {
            layer.msg('连接失败');
            return '连接失败';
        }
    });
}

function ajaxUpdataWidth(targetId,owidth){
    var dataJson = {"targetId":targetId, "width":owidth};
    var url = "http://localhost:8080/xxmall/backstage/advertisementManage/updateAdvertisementOfWidth";
    layuiAjaxBaseOfPage(dataJson,url);
}

function ajaxUpdataHeight(targetId,oheight){
    var dataJson = {"targetId":targetId, "height":oheight};
    var url = "http://localhost:8080/xxmall/backstage/advertisementManage/updateAdvertisementOfHeight";
    layuiAjaxBaseOfPage(dataJson,url);
}

function ajaxUpdataShowurlposition(targetId,showurlposition){
    var dataJson = {"targetId":targetId, "showurlposition":showurlposition};
    var url = "http://localhost:8080/xxmall/backstage/advertisementManage/updateAdvertisementOfShowurlposition";
    layuiAjaxBaseOfPage(dataJson,url);
}

function ajaxUpdataIsfixedshow(targetId,isfixedshow){
    var dataJson = {"targetId":targetId, "isfixedshow":isfixedshow};
    var url = "http://localhost:8080/xxmall/backstage/advertisementManage/updateAdvertisementOfIsfixedshow";
    layuiAjaxBaseOfPage(dataJson,url);
}

function ajaxUpdataAdvertname(targetId,advertname){
    var dataJson = {"targetId":targetId, "advertname":advertname};
    var url = "http://localhost:8080/xxmall/backstage/advertisementManage/updateAdvertisementOfAdvertname";
    layuiAjaxBaseOfPage(dataJson,url);
}
