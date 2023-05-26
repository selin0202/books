/*저자의 다른 책*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"곰돌이 푸" },
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );

    var author = $(".author_bookbox")
    console.log(msg)

    for(var i=0; i < author.length; i++){
        $(author).find("img").eq(i).attr("src",  msg.documents[i].thumbnail)
        $(author).find("a").eq(i).text(msg.documents[i].title)
        $(author).find("span").eq(i).text(msg.documents[i].price)        
    }

});


/*역자의 다른 책*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"곰돌이푸", page:"8"},
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );

    var author = $(".author_bookbox2")
    console.log(msg)

    for(var i=0; i < author.length; i++){
        $(author).find("img").eq(i).attr("src",  msg.documents[i].thumbnail)
        $(author).find("a").eq(i).text(msg.documents[i].title)
        $(author).find("span").eq(i).text(msg.documents[i].price)        
    }

});


