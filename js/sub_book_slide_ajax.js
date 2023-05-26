
/*소설 분야에서 많은 회원이 구매한 책*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"소설" },
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );

    var slide1 = $(".event_ul1 li")
    
    for(var i=0; i < slide1.length; i++){
        $(slide1).eq(i).find("img").attr("src", msg.documents[i].thumbnail)
        $(slide1).eq(i).find("p").text(msg.documents[i].title)
    }
});


/*이 책을 조회한 회원들이 같이 본 책*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"소설", page:"5"},
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );

    var slide2 = $(".event_ul2 li")
    
    for(var i=0; i < slide2.length; i++){
        $(slide2).eq(i).find("img").attr("src", msg.documents[i].thumbnail)
        $(slide2).eq(i).find("p").text(msg.documents[i].title)
    }
});


/*이 책을 조회한 회원들이 같이 본 책*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"에쎄이", page:"5"},
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );

    var slide3 = $(".event_ul3 li")
    
    for(var i=0; i < slide3.length; i++){
        $(slide3).eq(i).find("img").attr("src", msg.documents[i].thumbnail)
        $(slide3).eq(i).find("p").text(msg.documents[i].title)
    }
});


