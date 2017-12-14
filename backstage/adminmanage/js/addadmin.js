$(function () {
    // 账号输入栏失去焦点时
    $("[name='adminname']").blur(function(){
        if($(this).val().length >= 5 && $(this).val().length<=20){
            validateAdminName($(this).val());
        }else {
            $("#validateAdminName").text("账号必须在5~20个字之间");
            $("#validateAdminName").css("cssText","color: red !important");
        }
    });
    // 昵称输入栏失去焦点时
    $("[name='nickname']").blur(function(){
        if($(this).val().length >= 5 && $(this).val().length<=20){
            validateNickname($(this).val());
        }else{
            $("#validateNickname").text("昵称必须在5~20个字之间");
            $("#validateNickname").css("cssText","color: red !important");
        }
    });
    // 邮箱输入栏失去焦点时
    $("[name='email']").blur(function(){
        if(!$(this).val().match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{1,3}){1,2})$/)){
            $("#validateEmail").text("邮箱格式不正确！");
            $("#validateEmail").css("cssText","color: red !important");
        }else{
            validateEmail($(this).val());
        }
    });
});

/**
 * 验证管理员名是否存在
 */
function validateAdminName(adminName) {
    var dataJson = {"adminName":adminName};
    var requestJson = $.extend({}, adminInfo,dataJson);
    $.ajax({
        url:"http://localhost:8080/xxmall/backstage/adminQuery/queryAdminName",
        type:"POST",
        data:requestJson,
        success:function (data) {
            if(data.errorCode == "200"){
                // 该管理账号已存在
                $("#validateAdminName").text("* 该账号已存在！");
                $("#validateAdminName").css("cssText","color:red !important");
            }else if(data.errorCode == "400"){
                // 该管理员账号不存在
                $("#validateAdminName").text("该账号可以使用");
                $("#validateAdminName").css("cssText","color:green !important");
            }
        },
        error:function () {
            // alert("连接失败");
        }
    });
}

/**
 * 验证管理员昵称是否存在
 */
function validateNickname(nickname) {
    var dataJson = {"nickname":nickname};
    var requestJson = $.extend({}, adminInfo,dataJson);
    $.ajax({
        url:"http://localhost:8080/xxmall/backstage/adminQuery/queryNickname",
        type:"POST",
        data:requestJson,
        success:function (data) {
            if(data.errorCode == "200"){
                // 该管理账号已存在
                $("#validateNickname").text("* 该昵称已存在！");
                $("#validateNickname").css("cssText","color:red !important");
            }else if(data.errorCode == "400"){
                // 该管理员账号不存在
                $("#validateNickname").text("该昵称可以使用");
                $("#validateNickname").css("cssText","color:green !important");
            }
        },
        error:function () {
            alert("连接失败");
        }
    });
}
/**
 * 验证管理员邮箱是否存在
 */
function validateEmail(email) {
    var dataJson = {"email":email};
    var requestJson = $.extend({}, adminInfo,dataJson);
    $.ajax({
        url:"http://localhost:8080/xxmall/backstage/adminQuery/queryEmail",
        type:"POST",
        data:requestJson,
        success:function (data) {
            if(data.errorCode == "200"){
                $("#validateEmail").text("* 该邮箱已存在！");
                $("#validateEmail").css("cssText","color:red !important");
            }else if(data.errorCode == "400"){
                $("#validateEmail").text("该邮箱可以使用");
                $("#validateEmail").css("cssText","color:green !important");
            }
        },
        error:function () {
            alert("连接失败");
        }
    });
}

/**
 * 验证管理员邮箱是否存在
 */
function validateFile(email) {
    var dataJson = {"email":email};
    var requestJson = $.extend({}, adminInfo,dataJson);
    $.ajax({
        url:"http://localhost:8080/xxmall/backstage/adminQuery/queryEmail",
        type:"POST",
        data:requestJson,
        success:function (data) {
            if(data.errorCode == "200"){
                $("#validateEmail").text("该邮箱已存在！");
                $("#validateEmail").css("cssText","color:red !important");
            }else if(data.errorCode == "400"){
                $("#validateEmail").text("该邮箱可以使用");
                $("#validateEmail").css("cssText","color:green !important");
            }
        },
        error:function () {
            alert("连接失败");
        }
    });
}

/**
 * 验证头像文件是否可用
 */
function validateHeader() {
    var validateFileOption = {
        // url : "http://localhost:8080/xxmall/backstage/register",
        url : "http://localhost:8080/xxmall/backstage/adminQuery/validateAdminHeader",
        type: "POST",
        data: adminInfo,
        success: function(data) {
            $('#validateHeader').text(data.message);
            if(data.errorCode == "200"){
                $('#validateHeader').css("cssText","color:green !important");
            }else{
                $('#validateHeader').css("cssText","color:red !important");
            }
        },
        error:function () {
            // alert("连接失败");
        }
    }
    $("#addadmin-form").ajaxSubmit(validateFileOption);
}

