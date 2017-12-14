// 发送更新管理员禁止登陆时间请求
function ajaxLoginTime(targetId,date) {
    var dataJson = {"targetId":targetId, "newLoginTime":date};
    var requestJson = $.extend({}, adminInfo,dataJson);
    $.ajax({
        url:"http://localhost:8080/xxmall/backstage/adminManage/updataAdminOfLongTime",
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
};

// 发送删除指定管理员请求
function ajaxDeleteAdmin(targetId) {
    var targetIdJson = {"targetId":targetId};
    var requestJson = $.extend({}, adminInfo,targetIdJson);
    $.ajax({
        url:"http://localhost:8080/xxmall/backstage/adminManage/deleteAdminById",
        type:"POST",
        data: requestJson,
        success:function (data) {
            layer.msg(data.message);
            // 点击跳转至当前页，实现刷新页面的效果
            // 注意:这里如果有两个分页功能，会导致冲突
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
};

// 发送编辑指定管理昵称请求
function ajaxUpdataAdminOfNickname(targetId, newNickname) {
    var targetIdJson = {"targetId":targetId,"newNickname":newNickname};
    var requestJson = $.extend({}, adminInfo,targetIdJson);
    $.ajax({
        url:"http://localhost:8080/xxmall/backstage/adminManage/updataAdminOfNickname",
        type:"POST",
        data: requestJson,
        success:function (data) {
            layer.msg(data.message);
            // 点击跳转至当前页，实现刷新页面的效果
            // 注意:这里如果有两个分页功能，会导致冲突
            setTimeout(function () {
                $('.layui-laypage-btn').trigger('click');
            },1000);
            return data.message;
        },
        error:function () {
            layer.msg('连接失败');
            // 点击跳转至当前页，实现刷新页面的效果
            // 注意:这里如果有两个分页功能，会导致冲突
            setTimeout(function () {
                $('.layui-laypage-btn').trigger('click');
            },1000);
            return '连接失败';
        }
    });
}

// 发送编辑指定管理员邮箱请求
function ajaxUpdataAdminOfEmail(targetId, newEmail) {
    var targetIdJson = {"targetId":targetId,"newEmail":newEmail};
    var requestJson = $.extend({}, adminInfo,targetIdJson);
    $.ajax({
        url:"http://localhost:8080/xxmall/backstage/adminManage/updataAdminOfEmail",
        type:"POST",
        data: requestJson,
        success:function (data) {
            layer.msg(data.message);
            // 点击跳转至当前页，实现刷新页面的效果
            // 注意:这里如果有两个分页功能，会导致冲突
            setTimeout(function () {
                $('.layui-laypage-btn').trigger('click');
            },1000);
            return data.message;
        },
        error:function () {
            layer.msg('连接失败');
            // 点击跳转至当前页，实现刷新页面的效果
            // 注意:这里如果有两个分页功能，会导致冲突
            setTimeout(function () {
                $('.layui-laypage-btn').trigger('click');
            },1000);
            return '连接失败';
        }
    });
}