$(function(){
    /*책 소개*/
    $(".ct_content1 > .hide_btn p").eq(0).click(function(){
        $(".ct_end1").show();
        $(".ct_content1 > .hide_btn p").eq(0).hide();
        $(".ct_content1 > .hide_btn p").eq(1).show();
    });

    $(".ct_content1 > .hide_btn p").eq(1).click(function(){
        $(".ct_end1").hide();
        $(".ct_content1 > .hide_btn p").eq(1).hide();
        $(".ct_content1 > .hide_btn p").eq(0).show();
    });

    /*출판사 서평*/
    $(".ct_content2 > .hide_btn p").eq(0).click(function(){
        $(".ct_end2").show();
        $(".ct_content2 > .hide_btn p").eq(0).hide();
        $(".ct_content2 > .hide_btn p").eq(1).show();
    });

    $(".ct_content2 > .hide_btn p").eq(1).click(function(){
        $(".ct_end2").hide();
        $(".ct_content2 > .hide_btn p").eq(1).hide();
        $(".ct_content2 > .hide_btn p").eq(0).show();
    });

    
});