

$(function() {

    $.ajax({

        url: "./json/media.json",

        dataType: "json",

        success: function (data) {

            if (data.length > 0) {


                for (var i in data) {

                    $("#media_slide_ul li").eq(i).find("img").attr("src", "img/media/" + data[i].url);


                }

            }

        }

    });

});