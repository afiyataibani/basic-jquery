$(document).ready(function () {
    // active
   $(document).ready(function () {
    $('ul li a').hover(function () {
       $('li a').removeClass("active");
       $(this).addClass("active");
    });
 });
});

// change word
(function () {
    var words = [
       'Freelencer',
       'Developer',
    ], i = 0;
    setInterval(function () {
       $('#changingword').fadeOut(function () {
          $(this).html(words[i = (i + 1) % words.length]).fadeIn();
       });
    }, 3000);

 })();

//  setting-btn
$(".setting-btn").click(function () {
    $(".color").toggleClass('d-block');
 });

 $(".bar").click(function () {
   $("nav").toggleClass('d-block');
});

