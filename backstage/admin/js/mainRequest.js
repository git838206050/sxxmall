/*
* 用于处理main请求的处理
* */
// 点击注销按钮
$("#logout").click(function () {
    // 获取登录时保存在cookie的管理员数据。 数据本身为json类型，但以字符串类型进行保存。
    var adminc = JSON.parse($.cookie('admin'));
    var adminInfo = {"id":adminc.adminId,"token":adminc.token};
    // 发送注销请求，不管成功还是失败最终都跳转至登录页面
    $.ajax({
        type:"POST",
        url:"http://localhost:8080/xxmall/backstage/logout",
        data:adminInfo,
        dataType:"json",
        success:function (data) {
            // if(data.errorCode == "200"){
            //     alert(data.message);
            // }else{
            //     alert(data.message);
            // }
            location.href = "/sxxmall/backstage/admin/login.html";
        },
        error:function () {
            // alert("连接失败");
            location.href = "/sxxmall/backstage/admin/login.html";
        }
    });
});