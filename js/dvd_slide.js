/*dvd slide*/

    $(function(){
        $(".dvd_prev").click(function(){
            $(".dvd_ul li:last").prependTo(".dvd_ul");
            $(".dvd_ul").css({marginLeft:-320});
            $(".dvd_ul").stop().animate({marginLeft:0});
        });
    
        $(".dvd_next").click(function(){
            $(".dvd_ul").stop().animate({marginLeft:-320},function(){
                $(".dvd_ul li:first").appendTo(".dvd_ul");
                $(".dvd_ul").css({marginLeft:0});
            });
        });
    });