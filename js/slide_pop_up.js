/*슬라이더 팝업 */

$(function(){
    $("#slider_left_icon").mouseover(function(){
        if($("#hover_pop_up").css("display")=="none"){
            $("#hover_pop_up").stop().animate({
                width:"toggle",
                height:"toggle",
                opacity:1
            },"slow");
        }
    });

    $(".hover_right_close").click(function(){
        $("#hover_pop_up").animate({
            width:"toggle",
            height:"toggle"
        },"slow")
    });

    $(".hover_left_close").click(function(){
        $("#hover_pop_up").animate({
            width:"toggle",
            height:"toggle"
        },"slow")
    });
    
});





