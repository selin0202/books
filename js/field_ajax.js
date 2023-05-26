
/*field_ajax*/

/*문화*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"문학" },
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );


    for(var i=0; i <  $(".field_content").length; i++){
        $(".field_content").eq(0).children("li").eq(i).find("img").attr("src" , msg.documents[i].thumbnail)
        $(".field_content").eq(0).find("h4").eq(i).text(msg.documents[i].title)
        $(".field_content").eq(0).find("span").eq(i).text(msg.documents[i].price)
    }



});
/*교양*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"인문교양" },
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );


    for(var i=0; i <  $(".field_content").length; i++){
        $(".field_content").eq(1).children("li").eq(i).find("img").attr("src" , msg.documents[i].thumbnail)
        $(".field_content").eq(1).find("h4").eq(i).text(msg.documents[i].title)
        $(".field_content").eq(1).find("span").eq(i).text(msg.documents[i].price)
    
    }

});

/*경제/실용*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"경제" },
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );


    for(var i=0; i <  $(".field_content").length; i++){
        $(".field_content").eq(2).children("li").eq(i).find("img").attr("src" , msg.documents[i].thumbnail)
        $(".field_content").eq(2).find("h4").eq(i).text(msg.documents[i].title)
        $(".field_content").eq(2).find("span").eq(i).text(msg.documents[i].price)
    }

});

/*유아아동*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"유아" },
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );


    for(var i=0; i <  $(".field_content").length; i++){
        $(".field_content").eq(3).children("li").eq(i).find("img").attr("src" , msg.documents[i].thumbnail)
        $(".field_content").eq(3).find("h4").eq(i).text(msg.documents[i].title)
        $(".field_content").eq(3).find("span").eq(i).text(msg.documents[i].price)
    }

});

/*학습어학*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"학습" },
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );


    for(var i=0; i <  $(".field_content").length; i++){
        $(".field_content").eq(4).children("li").eq(i).find("img").attr("src" , msg.documents[i].thumbnail)
        $(".field_content").eq(4).find("h4").eq(i).text(msg.documents[i].title)
        $(".field_content").eq(4).find("span").eq(i).text(msg.documents[i].price)
    }

});

/*외국도서*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"해외" },
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );


    for(var i=0; i <  $(".field_content").length; i++){
        $(".field_content").eq(5).children("li").eq(i).find("img").attr("src" , msg.documents[i].thumbnail)
        $(".field_content").eq(5).find("h4").eq(i).text(msg.documents[i].title)
        $(".field_content").eq(5).find("span").eq(i).text(msg.documents[i].price)
    }

});