$(function(){
    var i = 0
    $(".how_prev_btn").click(function(){
        i--;
        var circle = $("#how_circle_ul li");

        $(".how_slide_li:last").prependTo("#how_slide_ul");
        $("#how_slide_ul").css({marginLeft:-150});
        $("#how_slide_ul").stop().animate({marginLeft:0})

        if(i < 0){
            i =  circle.length -1
        }

        $("#how_circle_ul li").removeClass("on");
        $("#how_circle_ul li").eq(i).addClass("on");
    
    });

    $(".how_next_btn").click(function(){
        i++;
        var circle = $("#how_circle_ul li");
        if(i >= circle.length){
            i=0;
        }

        $("#how_slide_ul").stop().animate({marginLeft:-150},function(){
            $(".how_slide_li:first").appendTo("#how_slide_ul");
            $("#how_slide_ul").css({marginLeft:0});

            $("#how_circle_ul li").removeClass("on");
            $("#how_circle_ul li").eq(i).addClass("on");
        });
    
    });
});