
/*섹션 메인6 cd dvd 슬라이드*/

$(function(){
    $(".cd_prev").click(function(){
        $(".cd_ul li:last").prependTo(".cd_ul");
        $(".cd_ul").css({marginLeft:-320});
        $(".cd_ul").stop().animate({marginLeft:0});
    });

    $(".cd_next").click(function(){
        $(".cd_ul").stop().animate({marginLeft:-320},function(){
            $(".cd_ul li:first").appendTo(".cd_ul");
            $(".cd_ul").css({marginLeft:0});
        });
    });
});