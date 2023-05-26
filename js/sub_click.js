
    function Movescroll(conts){
        var conts = $(conts);
        var contsTop = conts.offset().top;
        $('html, body').animate({scrollTop: contsTop - 40}, 500)
    }

    $(function(){
        $("#content_ul li").click(function(){

            var index = $(this).index()
            $("#content_ul li").css({"backgroundColor": "white","color": "#666"});
            $("#content_ul li").eq(index).css({"backgroundColor":"#888", "color":"white"})
        });
    });
    