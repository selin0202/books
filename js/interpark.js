/*인터파크 슬라이드*/

$(function(){

    $(".inter_prev").click(function(){
        $("#interpark_ul li:last").prependTo("#interpark_ul")
        $("#interpark_ul").css({marginLeft : -482});
        $("#interpark_ul").stop().animate({marginLeft:0},"slow")
    });

    $(".inter_next").click(function(){
        $("#interpark_ul").stop().animate({marginLeft:-482},"slow",function(){
            $("#interpark_ul li:first").appendTo("#interpark_ul");
            $("#interpark_ul").css({marginLeft:0});
        });
    });

    
    function slide(){
        $("#interpark_ul").stop().animate({marginLeft:"-482px"},"slow",function(){
            $("#interpark_ul li:first").appendTo("#interpark_ul");
            $("#interpark_ul").css({marginLeft:0});
        });
    }

    setInterval(slide,5000);

});