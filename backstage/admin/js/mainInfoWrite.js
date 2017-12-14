/*
* 把信息写入html里
* */

$(function(){
    if($.cookie('admin') == "" || $.cookie('admin')==null){
        location.href = "/sxxmall/backstage/admin/login.html";
    }
    var adminc = JSON.parse($.cookie('admin'));
    // 如果cookie没保存有管理员数据，则直接返回登录页面
    if(adminc == null || adminc == ""){
        location.href = "/sxxmall/backstage/admin/login.html";
    }else{
        var adminInfo = {"adminId":adminc.adminId,"token":adminc.token};
        $.ajax({
            type:"POST",
            url:"http://localhost:8080/xxmall/backstage/index",
            data:adminInfo,
            dataType:"json",
            success:function (data) {
                // alert(data.message);
                if(data.errorCode == "200"){
                    // 添加昵称
                    $("#admin-nickname").append( adminc.nickname );
                }else if(data.errorCode == "401"){
                    alert(data.message);
                    location.href = "/sxxmall/backstage/admin/login.html";
                }
            },
            error:function () {
                alert("连接失败");
                location.href = "/sxxmall/backstage/admin/login.html";
            }
        });
    }
});