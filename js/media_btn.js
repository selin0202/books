$(function(){
    var i = 0;

        $(".media_next_btn").click(function(){
            var media = $("#media_slide_ul li")
            i++
            if(i >= media.length ){
                i=0;
            }
            $("#media_slide_ul li").eq(i).stop().fadeIn();
            $("#media_slide_ul li").eq(i-1).stop().fadeOut();

            $("#media_circle_ul li").removeClass("on");
            $("#media_circle_ul li").eq(i).addClass("on");
        });

        

});


$(function(){
    var i = 0;
    var media2 = $("#media_slide_ul li")
    
    $(".media_prev_btn").click(function(){
        
        i--;
        if(i < 0){
            i = media2.length -1
        }
        $("#media_slide_ul li").stop().fadeOut();
        $("#media_slide_ul li").eq(i).stop().fadeIn();

    
        $("#media_circle_ul li").removeClass("on");
        $("#media_circle_ul li").eq(i).addClass("on");
    });
});

$(function(){
    $("#media_circle_ul li").eq(0).click(function(){
        $("#media_slide_ul li").stop().fadeOut();
        $("#media_slide_ul li").eq(0).stop().fadeIn();
        $("#media_circle_ul li").removeClass("on")
        $("#media_circle_ul li").eq(0).addClass("on")
    });
    $("#media_circle_ul li").eq(1).click(function(){
        $("#media_slide_ul li").stop().fadeOut();
        $("#media_slide_ul li").eq(1).stop().fadeIn();
        $("#media_circle_ul li").removeClass("on")
        $("#media_circle_ul li").eq(1).addClass("on")
    });
    
    $("#media_circle_ul li").eq(2).click(function(){
        $("#media_slide_ul li").stop().fadeOut();
        $("#media_slide_ul li").eq(2).stop().fadeIn();
        $("#media_circle_ul li").removeClass("on")
        $("#media_circle_ul li").eq(2).addClass("on")
    });
});


