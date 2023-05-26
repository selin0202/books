
/*인터파크 이미지*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"소설" },
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );

    var interimg = document.getElementsByClassName("inter_img")
    
    for(var i=0; i < interimg.length; i++){
        $(interimg).eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>")
    }

});



/*인터파크 타이틀*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"파리" },
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );

    var intertitle = document.getElementsByClassName("inter_title")
    
    for(var i=0; i < intertitle.length; i++){
        $(intertitle).eq(i).append(msg.documents[i].title)
    }

});



/*인터파크 서브 타이틀*/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"파리" },
    headers:{Authorization: "KakaoAK f53c1d176c7c8ffbb27196dfa307873a"}
})
.done(function( msg ) {
    console.log( msg );

    var sub = document.getElementsByClassName("inter_subtitle")
    
    for(var i=0; i < sub.length; i++){
        
        var contents = msg.documents[i].contents
        var contents2 = contents.substring(0,90);

        $(sub).eq(i).append("<p>"+contents2+"..."+"</p>")
    }

});



