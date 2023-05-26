/*special ajax*/

$(function() {

    $.ajax({

        url: "./json/special.json",

        dataType: "json",

        success: function (data) {

            if (data.length > 0) {


                for (var i in data) {

                    $(".slide_img_box").eq(i).find("img").attr("src", "img/special/" + data[i].url);
                    $(".slide_contents_box").eq(i).find("h3").text(data[i].title)
                    $(".slide_contents_box .title").eq(i).find("a").text(data[i].subtitle)
                    $(".slide_contents_box").eq(i).find(".net_price").text(data[i].net_price)
                    $(".slide_contents_box").eq(i).find(".sale_price").text(data[i].price)
                }

            }

        }

    });

});