$(function () {
    if($.cookie('admin') == null || $.cookie('admin') == ""){
        location.href = "/sxxmall/backstage/admin/login.html";
    }
});
var adminc = JSON.parse($.cookie('admin'));
var adminInfo = {"adminId":adminc.adminId,"token":adminc.token};

/**
 * 基于layui框架的点击表格直接编辑修改信息功能实现方法
 * @param dataJson 需要编辑的数据，json类型
 * @param url 发送的ajax URL地址
 * 返回值  true:验证成功 false:验证失败
 */
function layuiAjaxBaseOfPage(dataJson, url){
    var requestJson = $.extend({}, adminInfo,dataJson);
    var state = false;
    $.ajax({
        url:url,
        type:"POST",
        data: requestJson,
        async:false,
        success:function (data) {
            layer.msg(data.message);
            if(data.errorCode == "200"){
                // setTimeout(function () {
                //     $('.layui-laypage-btn').trigger('click');
                // },500);
                state = true;
            }else{
                setTimeout(function () {
                    $('.layui-laypage-btn').trigger('click');
                },1000);
                state = false;
            }
        },
        error:function () {
            layer.msg('连接失败');
            state = false;
        }
    });
    return state;
}

/**
 * 表单验证方法
 * 同步请求
 * @param dataJson 验证的数据。json类型
 * @param url 请求地址
 * @param $validata 显示返回信息容器
 */
function ajaxBaseOfValidateTable(dataJson, url,$validata){
    var requestJson = $.extend({}, adminInfo,dataJson);
    var state = false;
    $.ajax({
        url:url,
        type:"POST",
        data:requestJson,
        async:false,
        success:function (data) {
            $validata.text(data.message);
            if(data.errorCode == "200"){
                // 验证通过
                $validata.css("cssText","color:green !important");
                state = true;
            }else{
                $validata.css("cssText","color:red !important");
                state = false;
            }
        },
        error:function () {
            $validata.text("连接失败");
            state = false;
        }
    });
    return state;
}


/**
 * 表单验证方法 直接返回message。
 * 同步请求
 * @param dataJson 验证的数据。json类型
 * @param url 请求地址
 */
function ajaxBaseOfValidateMessage(dataJson, url){
    var requestJson = $.extend({}, adminInfo,dataJson);
    var message = "";
    $.ajax({
        url:url,
        type:"POST",
        data:requestJson,
        async:false,
        success:function (data) {
            if(data.errorCode == "200"){
                message = "200";
            }else{
                message = data.message;
            }
        },
        error:function () {
            message = "连接失败";
        }
    });
    return message;
}

// 时间比较
function dateState(odate) {
    var oTime = new Date(odate).getTime();
    var dateTime = new Date().getTime();
    if(isNaN(dateTime)){
        // 空值
        return null;
    }
    if(oTime > dateTime){
        // 第一个时间晚、封号
        return 1;
    }else if(oTime < dateTime){
        // 第二个时间晚
        return 2;
    }else{
        // 两时间相等
        return 0;
    }
};

// 时间格式转换
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

function bodyClickRemoveDivById(obj) {
    var id = obj.attr("id");
    $("body").click(function (event) {
        $("#"+id).remove();
        event.stopPropagation();
    });
}


// 验证邮箱格式
// function validateEmail(email) {
//     alert("sa");
//     return email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{1,3}){1,2})$/);
// }