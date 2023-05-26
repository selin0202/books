/*세일 ajax*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"카카오프렌즈" },
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );

    var saleimg = $(".sale_img_box");
    
    for(var i=0; i < saleimg.length; i++){
        $(saleimg).eq(i).find("img").eq(0).attr("src" , msg.documents[i].thumbnail)
        
    }

});


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"동화책" },
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );

    var saleimg = $(".sale_img_box2");
    
    for(var i=0; i < saleimg.length; i++){
        $(saleimg).eq(i).find("img").eq(0).attr("src" , msg.documents[i].thumbnail)
        
    }

});
