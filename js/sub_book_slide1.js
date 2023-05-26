

$(function(){
    /*소설 분양에서 많은 회원이 구매한 책*/

    $(".event_prev1").click(function(){
        $(".event_ul1 li:last").prependTo(".event_ul1");
        $(".event_ul1").css({marginLeft:"-160px"});
        $(".event_ul1").stop().animate({marginLeft:0})
    });

    $(".event_next1").click(function(){
    $(".event_ul1").stop().animate({marginLeft:"-160px"},"slow",function(){
        $(".event_ul1 > li:first").appendTo(".event_ul1");
        $(".event_ul1").css({marginLeft:0});
    });
    });

    function slide(){
        $(".event_ul1").stop().animate({marginLeft:"-160px"},"slow",function(){
            $(".event_ul1 > li:first").appendTo(".event_ul1");
            $(".event_ul1").css({marginLeft:0});
        });
    }

    var slide = setInterval(slide,3000)


    /*이 책을 조회한 회원들이 같이 본 책*/


    $(".event_prev2").click(function(){
        $(".event_ul2 li:last").prependTo(".event_ul2");
        $(".event_ul2").css({marginLeft:"-160px"});
        $(".event_ul2").stop().animate({marginLeft:0})
    });

    $(".event_next2").click(function(){
    $(".event_ul2").stop().animate({marginLeft:"-160px"},"slow",function(){
        $(".event_ul2 > li:first").appendTo(".event_ul2");
        $(".event_ul2").css({marginLeft:0});
    });
    });

    function slide2(){
        $(".event_ul2").stop().animate({marginLeft:"-160px"},"slow",function(){
            $(".event_ul2 > li:first").appendTo(".event_ul2");
            $(".event_ul2").css({marginLeft:0});
        });
    }

    var slide2 =  setInterval(slide2,1500);

    /*이 책을 구매한 회원들이 구매한 책*/
    
    $(".event_prev3").click(function(){
        $(".event_ul3 li:last").prependTo(".event_ul3");
        $(".event_ul3").css({marginLeft:"-160px"});
        $(".event_ul3").stop().animate({marginLeft:0})
    });

    $(".event_next3").click(function(){
    $(".event_ul3").stop().animate({marginLeft:"-160px"},"slow",function(){
        $(".event_ul3 > li:first").appendTo(".event_ul3");
        $(".event_ul3").css({marginLeft:0});
    });
    });

    function slide3(){
        $(".event_ul3").stop().animate({marginLeft:"-160px"},"slow",function(){
            $(".event_ul3 > li:first").appendTo(".event_ul3");
            $(".event_ul3").css({marginLeft:0});
        });
    }

    var slide3 =  setInterval(slide3,3000);


});