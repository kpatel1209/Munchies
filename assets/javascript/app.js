console.log("Hello");

$(document).ready(function(){
    $('.sidenav').sidenav();
    // $("#second-column").hide();
    // $("#third-column").hide();



    $("#submit-ing-btn").on("click", function(event){
        event.preventDefault();
        // $("#second-column").show();
        // $("#third-column").show();
    });



});