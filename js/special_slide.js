/*스페셜 slide*/


$(function(){
    $(".special_prev").click(function(){
        $("#sp_slide_ul li:last").prependTo("#sp_slide_ul");
        $("#sp_slide_ul").css({marginLeft:-270});
        $("#sp_slide_ul").stop().animate({marginLeft:0});
    });

    $(".special_next").click(function(){
        $("#sp_slide_ul").stop().animate({marginLeft:-270},function(){
            $("#sp_slide_ul li:first").appendTo("#sp_slide_ul");
            $("#sp_slide_ul").css({marginLeft:0});
        });
    });
});