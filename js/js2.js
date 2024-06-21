$(document).ready(function(){
    $("p").hide
    $("h1").click(function(){
        $(this).next("p").slideToggel("slow").siblings("p:visible").slideUp("slow");
    })
})