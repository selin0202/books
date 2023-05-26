/*publisher ajax*/

$(function() {

    $.ajax({

        url: "./json/publisher.json",

        dataType: "json",

        success: function (data) {

            if (data.length > 0) {


                for (var i in data) {

                    $("#choice_wrap").eq(i).find("img").attr("src", "img/publisher/" + data[i].url);
                  

                }

            }

        }

    });

});