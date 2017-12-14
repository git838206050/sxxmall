var validatebl = new Array(8);
$(function () {
    var dataJson;
    var url;
    // 账号输入栏失去焦点时
    $("[name='username']").blur(function(){
        if($(this).val().length >= 5 && $(this).val().length<=20){
            dataJson = {"username":$(this).val()};
            url = "http://localhost:8080/xxmall/backstage/userManage/userQuery/validataUsername";
            if(ajaxBaseOfValidateTable(dataJson, url ,$("#validateUsername"))){
                validatebl[0] = true;
            }else{
                validatebl[0] = false;
            }
        }else {
            $("#validateUsername").text("账号必须在5~20个字之间(包含5、20)。");
            $("#validateUsername").css("cssText","color: red !important");
            validatebl[0] = false;
        }
        validateForBl(validatebl);
    });
    // 昵称输入栏失去焦点时
    $("[name='nickname']").blur(function(){
        if($(this).val().length >= 5 && $(this).val().length<=20){
            dataJson = {"nickname":$(this).val()};
            url = "http://localhost:8080/xxmall/backstage/userManage/userQuery/validataNickname";
            if(ajaxBaseOfValidateTable(dataJson, url ,$("#validateNickname"))){
                validatebl[1] = true;
            }else{
                validatebl[1] = false;
            }
        }else{
            $("#validateNickname").text("昵称必须在5~20个字之间");
            $("#validateNickname").css("cssText","color: red !important");
            validatebl[1] = false;
        }
        validateForBl(validatebl);
    });
    // 昵称输入栏失去焦点时
    $("[name='email']").blur(function(){
        if(!$(this).val().match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{1,3}){1,2})$/)){
            $("#validateEmail").text("邮箱格式不正确！");
            $("#validateEmail").css("cssText","color: red !important");
            validatebl[2] = false;
        }else{
            dataJson = {"email":$(this).val()};
            url = "http://localhost:8080/xxmall/backstage/userManage/userQuery/validataEmail";
            if(ajaxBaseOfValidateTable(dataJson, url ,$("#validateEmail"))){
                validatebl[2] = true;
            }
        }
        validateForBl(validatebl);
    });

    $("[name='question']").blur(function(){
        if($(this).val().length >= 2 && $(this).val().length<=20){
            dataJson = {"question":$(this).val()};
            url = "http://localhost:8080/xxmall/backstage/userManage/userQuery/validataQuestion";
            ajaxBaseOfValidateTable(dataJson, url ,$("#validateQuestion"));
            validatebl[3] = true;
        }else{
            $("#validateQuestion").text("问题必须在2~20个字之间");
            $("#validateQuestion").css("cssText","color: red !important");
            validatebl[3] = false;
        }
        validateForBl(validatebl);
    });

    $("[name='answer']").blur(function(){
        if($(this).val().length >= 2 && $(this).val().length<=20){
            dataJson = {"answer":$(this).val()};
            url = "http://localhost:8080/xxmall/backstage/userManage/userQuery/validataAnswer";
            ajaxBaseOfValidateTable(dataJson, url ,$("#validateAnswer"));
            validatebl[4] = true;
        }else{
            $("#validateAnswer").text("答案必须在2~20个字之间");
            $("#validateAnswer").css("cssText","color: red !important");
            validatebl[4] = false;
        }
        validateForBl(validatebl);
    });

    $("[name='password']").blur(function(){
        if($(this).val().length < 6 || $(this).val().length>20){
            $("#validatePassword").text("答案必须在6~20个字之间");
            $("#validatePassword").css("cssText","color: red !important");
            validatebl[5] = false;
        }else{
            $("#validatePassword").text("");
            validatebl[5] = true;
        }
        validateForBl(validatebl);
    });
    $('#qdPassword').keyup(function(){
        if($(this).val() != $("[name='password']").val()){
            $("#validatePassword2").text("确定密码与密码不一致");
            $("#validatePassword").css("cssText","color: red !important");
            validatebl[6] = false;
        }else{
            $("#validatePassword2").text("");
            validatebl[6] = true;
        }
        validateForBl(validatebl);
    });

    function validateForBl(validatebl) {
        var state = true;
        for(var i=0; i<validatebl.length; i++){
            if(!validatebl[i]){
                state = false;
                break;
            }
        }
        if(state){
            $("#addUserSub").removeClass('layui-btn-disabled');
        }else{
            $("#addUserSub").addClass('layui-btn-disabled');
        }
        return state;
    }
});


// 验证用户头像是否可以用
function validateUserHeader() {
    var validateFileOption = {
        url : "http://localhost:8080/xxmall/backstage/userManage/userQuery/validateUserHeader",
        type: "POST",
        data: adminInfo,
        async:false,
        success: function(data) {
            $('#validateUserHeader').text(data.message);
            if(data.errorCode == "200"){
                $('#validateUserHeader').css("cssText","color:green !important");
                validatebl[7] = true;
            }else{
                $('#validateUserHeader').css("cssText","color:red !important");
                validatebl[7] = false;
            }
        },
        error:function () {
            $('#validateUserHeader').text("连接失败");
            $('#validateUserHeader').css("cssText","color:red !important");
            validatebl[7] = false;
        }
    };
    $("#addUser-form").ajaxSubmit(validateFileOption);
    validateForBl(validatebl);
}


