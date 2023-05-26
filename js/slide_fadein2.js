$(function(){

    var i = 0;
    var border = $("#slider_bottom_isue_ul li");
    var slideTime = setInterval(slide,3000);

    
    $(border).eq(i).css({borderTop:"1px solid red"})

    function slide(){
        i++;

        if(i == $(".slider_img").length){
            i = 0;
        }

        $(".slider_img").stop().fadeOut(); 
        $(".slider_img").eq(i).stop().fadeIn();
        
        $(border).css({borderTop:"none"})
        $(border).eq(i).css({borderTop:"1px solid red"})

    
    }



    $(border).mouseover(function(){
        var index = $(this).index()

        clearInterval(slideTime)

        $(border).css({borderTop:"none"})
        $(this).css({borderTop:"1px solid red"})
        
        $(".slider_img").css({"display":"none"})
        $(".slider_img").eq(index).stop().fadeIn();

    });


    $(border).mouseout(function(){
        slideTime = setInterval(slide,3000)
    });


});