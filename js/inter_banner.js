/*인터파크 왼쪽 베너 슬라이드*/

$(function(){
    $(".banner_btn_right").click(function(){
        $("#left_slide_ul").stop().animate({marginLeft:-100},function(){
            $("#left_slide_ul li:first").appendTo("#left_slide_ul");
            $("#left_slide_ul").css({marginLeft:0});
        });
    });

    $(".banner_btn_left").click(function(){
        $("#left_slide_ul li:last").prependTo("#left_slide_ul");
        $("#left_slide_ul").css({marginLeft:-100});
        $("#left_slide_ul").stop().animate({marginLeft:0})
    });


});

