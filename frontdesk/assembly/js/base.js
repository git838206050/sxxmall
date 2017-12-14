$(function () {
    if($.cookie('user') == null || $.cookie('user') == ""){
        location.href = "/sxxmall/frontdesk/user/login.html";
    }
});
var userc = JSON.parse($.cookie('user'));
var userInfo = {"userId":userc.userId,"uToken":userc.uToken};