function doLogin(){
    var option = {
        url :"http://localhost:8080/xxmall/frontdesk/login",
        type:"post",
        success:function (data) {
            if(data.errorCode == "200"){
                var userStr = JSON.stringify(data.item.user);
                $.cookie('user',userStr,{expires: 2/24 , path:'/'}); // 把管理员数据保存至cookie中,有效期为两个小时。需要修改时只修修改 2/24的数字2
                $.cookie('user',userStr,{expires: 2/24 , path:'../'}); // 把管理员数据保存至cookie中,有效期为两个小时。需要修改时只修修改 2/24的数字2
            }else{
                alert(data.message);
            }
        },
        error:function () {
            alert("连接失败");
        }
    }
    $("#login-form").ajaxSubmit(option);
}