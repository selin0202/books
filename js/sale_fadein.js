/*세일 fadeIn*/

$(function(){
    $(".sale_1").mouseover(function(){
        $(".sale_ul_none").stop().fadeOut();
        $(".sale_ul_none").eq(0).stop().fadeIn();
        $(".sale_2").css({"border":"none", "border-bottom":"1px solid #000"})
        $(".sale_1").css({"border":"1px solid #000", "border-bottom":"none"})
    });

    $(".sale_2").mouseover(function(){
        $(".sale_ul_none").stop().fadeOut();
        $(".sale_ul_none").eq(1).stop().fadeIn();
        $(".sale_1").css({"border":"none", "border-bottom":"1px solid #000"})
        $(".sale_2").css({"border":"1px solid #000","border-bottom":"none"})
    });
});