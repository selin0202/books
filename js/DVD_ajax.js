/*DVD ajax*/

$(function() {

    $.ajax({

        url: "./json/dvd.json",

        dataType: "json",

        success: function (data) {

            if (data.length > 0) {


                for (var i in data) {

                    $(".dvd_img_box").eq(i).find("img").attr("src", "img/dvd/" + data[i].url);
                    $(".dvd_bottom_img1").eq(i).find("img").attr("src", "img/dvd/" + data[i].bottomurl);
                    $(".dvd_inner_contents").eq(i).find("p").text(data[i].title);
                    $(".dvd_inner_contents").eq(i).find(".dvd_no_sale").text(data[i].net_price);
                    $(".dvd_inner_contents").eq(i).find(".dvd_sale").text(data[i].price);
                    $(".dvd_inner_contents").eq(i).find(".dvd_point").text(data[i].point);

                    $(".dvd_bottom_wrap1 p").eq(i).find("a").text(data[i].bottom_title);
                }

            }

        }

    });

});