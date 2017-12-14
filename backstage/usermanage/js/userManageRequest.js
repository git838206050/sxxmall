// 发送相对应的信息更改请求
function ajaxProhibitLoginTime(targetId,date) {
    var dataJson = {"targetId":targetId, "prohibitLoginTime":date};
    var url = "http://localhost:8080/xxmall/backstage/userManage/updateProhibitLoginTime";
    if(layuiAjaxBaseOfPage(dataJson,url)){
        setTimeout(function () {
            $('.layui-laypage-btn').trigger('click');
        },500);
    }
};

function ajaxUpdataUserOfNickname(targetId, nickname) {
    var dataJson = {"targetId":targetId, "nickname":nickname};
    var url = "http://localhost:8080/xxmall/backstage/userManage/updateNickname";
    layuiAjaxBaseOfPage(dataJson,url);
}

function ajaxUpdataUserOfEmail(targetId, email) {
    var dataJson = {"targetId":targetId, "email":email};
    var url = "http://localhost:8080/xxmall/backstage/userManage/updateEmail";
    layuiAjaxBaseOfPage(dataJson,url);
}

function ajaxUpdataUserOfQuestion(targetId, question) {
    var dataJson = {"targetId":targetId, "question":question};
    var url = "http://localhost:8080/xxmall/backstage/userManage/updateQuestion";
    layuiAjaxBaseOfPage(dataJson,url);
}

function ajaxUpdataUserOfAnswer(targetId, answer) {
    var dataJson = {"targetId":targetId, "answer":answer};
    var url = "http://localhost:8080/xxmall/backstage/userManage/updateAnswer";
    layuiAjaxBaseOfPage(dataJson,url);
}

// 发送删除指定用户请求
function ajaxDeleteUser(targetId) {
    var dataJson = {"targetId":targetId};
    var url = "http://localhost:8080/xxmall/backstage/userManage/deleteUser";
    if(layuiAjaxBaseOfPage(dataJson,url)){
        setTimeout(function () {
            $('.layui-laypage-btn').trigger('click');
        },500);
    }
};