/*탑 배너 클로즈*/
$(function(){
    $(".top_banner_right img").click(function(){
        $("#top_banner").css("display","none");
    });
});



/*마이페이지 & Language 슬라이드 다운*/
$(function(){
    $("#mypage_main").mouseover(function(){
        $("#mypage_sub").stop().slideDown();
    }).mouseout(function(){
        $("#mypage_sub").stop().slideUp();
    });
});

$(function(){
    $("#Language_main").mouseover(function(){
        $("#lanuage_sub").stop().slideDown();
    }).mouseout(function(){
        $("#lanuage_sub").stop().slideUp();
    });
});





/*전체 카테고리 슬라이드토글*/
$(function(){
    $("#all_click").click(function(){
        $("#nav_slide").stop().slideToggle(500);
    });
});

