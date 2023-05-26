$(function(){
    var i = 0;
    var j = 2;
    $(".media_prev_btn").click(function(){
        $("#media_slide_ul li").eq(j-i).stop().fadeIn();
        $("#media_slide_ul li").eq(i).stop().fadeOut();
        i++;
    }); 
});