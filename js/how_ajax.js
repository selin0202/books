
/*이 책 어때 슬라이드 이미지*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"포토샵" },
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );

    var how = $(".how_slide_li");
    
    for(var i=0; i < how.length; i++){
        $(how).eq(i).find("img").attr("src" , msg.documents[i].thumbnail)
        $(how).eq(i).find("p").text(msg.documents[i].title)
    }

});
