
// $(document).ready(function () {
//     $(".design").click(function () {
//         $("#one").toggle();
//     });
// });
// $(".icon").click(function () {
//     $("#two").toggle();
// });

// $(".product").click(function () {
//     $("#three").toggle();
// });

function myFunction(){
    var text;
    if (confirm ("We have received your message. Thank you for reaching out to us!")){
        text="thank you";
    }
    document.getElementById("demo").innerHTML = text;
}


$(document).ready(function(){
    $('.design').click(function(){
        $('.description').show();
        $('.design').hide();
    });
    $('.description').click(function(){
        $('.design').show();
        $('.description').hide();
    });
});

$(document).ready(function(){
    $('.icon').click(function(){
        $('.devel').show();
        $('.icon').hide();
    });
    $('.devel').click(function(){
        $('.icon').show();
        $('.devel').hide();
    });
});

$(document).ready(function(){
    $('.product').click(function(){
        $('.pro').show();
        $('.product').hide();
    });
    $('.pro').click(function(){
        $('.product').show();
        $('.pro').hide();
    });
});

