$(function () {
    var imgMax = $('#uploaderImagesByLcyBtn').attr('imgMaxNum');
    $('#uploaderImagesByLcyBtn').click(function (event) {
        $('#uploaderImagesByLcy').trigger("click");
        event.stopPropagation();
    });
    var showImgHtml = "<img/>";
    $('#uploaderImagesByLcy').change(function () {
        var _URL = window.URL || window.webkitURL;
        var file, img;
        var img = new Array();
        for (var i = 0; i < this.files.length; i++) {
            img[i] = new Image();
            // 获取图片宽高
            // img.onload = function () {
            //     alert(this.width + " " + this.height);
            // };
            img[i].src = _URL.createObjectURL(this.files[i]);
        }
        if (img.length <= imgMax){
            $('#uploaderImagesByLcyBtn').html("");
            for(var i=0; i<img.length; i++){
                $('#uploaderImagesByLcyBtn').append(showImgHtml);
                $('#uploaderImagesByLcyBtn img').eq(i).attr("src",img[i].src)
            }
        }else{
            alert("上传的图片数量不能超过"+imgMax+"个");
        }
    });
    //img[i].src
});