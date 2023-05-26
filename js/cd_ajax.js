/*cd ajax*/

$(function() {

    $.ajax({

        url: "./json/cd.json",

        dataType: "json",

        success: function (data) {

            if (data.length > 0) {


                for (var i in data) {

                    $(".cd_img_box").eq(i).find("img").attr("src", "img/cd/" + data[i].url);
                    $(".cd_inner_contents").eq(i).find("p").text(data[i].title);
                    $(".cd_inner_contents").eq(i).find(".cd_no_sale").text(data[i].net_price);
                    $(".cd_inner_contents").eq(i).find(".cd_sale").text(data[i].price);
                    $(".cd_inner_contents").eq(i).find(".cd_point").text(data[i].point);

                    $(".cd_bottom_img1").eq(i).find("img").attr("src", "img/cd/" + data[i].bottomurl);
                    $(".cd_bottom_wrap1 p").eq(i).find("a").text(data[i].bottom_title);
                }

            }

        }

    });

});