/*이달의 책 ajax*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"소설" },
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );

    var month = $(".month_img_box");
    var monthtitle = $(".month_title");

    for(var i=0; i < month.length; i++){
        $(month).eq(i).find("img").attr("src" , msg.documents[i].thumbnail)
        $(month).eq(i).find("p").text(msg.documents[i].title)
    }

    for(var i=0; i < monthtitle.length; i++){
        $(monthtitle).eq(i).text(msg.documents[i].title)
        $(".month_price").eq(i).text(msg.documents[i].price)
    }


});
