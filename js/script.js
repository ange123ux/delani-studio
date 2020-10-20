
$(document).ready(function () {
    $(".design").click(function () {
        $("#one").toggle();
    });
});
$(".icon").click(function () {
    $("#two").toggle();
});

$(".product").click(function () {
    $("#three").toggle();
});

function myFunction(){
    var text;
    if (confirm ("We have received your message. Thank you for reaching out to us!")){
        text="thank you";
    }
    document.getElementById("demo").innerHTML = text;
}


