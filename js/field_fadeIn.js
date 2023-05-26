/*field fadeIn*/

$(function(){
    $("#filed_nav li:first").css({borderBottom : "1px solid red"})
    $("#filed_nav li:first").css({color : "red"})

    $("#filed_nav li").mouseover(function(){
        var index =  $(this).index();

        $(".field_box").stop().fadeOut("fast");
        $(".field_box").eq(index).stop().fadeIn("fast");

        $("#filed_nav li").css({borderBottom : "none"})
        $("#filed_nav li").css({color : "black"})
        $("#filed_nav li").eq(index).css({borderBottom : "1px solid red"})
        $("#filed_nav li").eq(index).css({color : "red"})

    });


});