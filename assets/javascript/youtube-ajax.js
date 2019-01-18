//YOUTUBE API KEY: AIzaSyAHZ0WpRLyZFneMQ34f__mMyHCyBm4GWa4
//YOUTUBE CLIENT ID: 411034417194-jg7jqer63f99vcskief4fkk9aglmkq1t.apps.googleusercontent.com

let pageToken = [];
$(document).ready(function(){

    $(".popup").hide();
    $(".overlayBg").hide();
    $("#searchButton").click(function(){
        searchYoutube();
    });

    $(".tokenClass").click(function(event){
        event.preventDefault();
        pageToken.current = $(this).val()=="Next"?
        pageToken.nextPage:
        pageToken.prevPage;
        searchYoutube();
    });

    $(".overlayBg").click(function(event){
        event.preventDefault();
        $(".popup").hide();
        $(".overlayBg").hide();
        // the audio and video will stop playing when user clicks outside of the iframe
        let video = $("#player").attr("src");
        $("#player").attr("src", "");
        $("#player").attr("src", video);

    });

    $("#output").on("click", ".thumbnail", function(event){
        event.preventDefault();
        $(".popup").show();
        $(".overlayBg").show();
        ($(".popup iframe").attr("src", "https://www.youtube.com/embed/"+$(this).attr("videoID")));
    });
});
 
function searchYoutube(){
    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/search",
        dataType: "JSON",
        type: "GET",
        data: {
            key:"AIzaSyAHZ0WpRLyZFneMQ34f__mMyHCyBm4GWa4",
            q:$("#search").val(),
            part:"snippet",
            maxResults:10,
            order:"viewCount",
            type:"video",
            pageToken: pageToken.current
        }
    }).done(function(data){
        pageToken.nextPage = data.nextPageToken;
        pageToken.prevPage = data.prevPageToken;
        var html = "";
        $.each(data["items"],function(index,value){
            html += '<div><div class="title">'+value.snippet.title+'</div>';
            html += '<div><div class="url"><a href="https://www.youtube.com/watch?v='+value.id.videoId+' "target="_blank"></a></div>'
            html += '<div><img class="thumbnail" src="'+value.snippet.thumbnails.medium.url+'" videoID="'+value.id.videoId+'"</div>';
            html += '</div>';
        });
        $('#output').html(html);
    });
};