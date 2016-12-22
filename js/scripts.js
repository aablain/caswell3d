// User-Interface Logic
$(document).ready(function() {

  $(".sections .section-boxes").click(function() {
    $(".sections").addClass("smallerr")
    $(this).addClass("chosen");
    $("#show").removeClass("not-yet");
    $("#show div").css('opacity', '1');
  });

  $(".section-boxes .close-box").click(function() {
    $(".not-yet").css('max-height', '60px');
    $(".inside-box div").css('opacity', '0');
    $("body div").removeClass("smallerr");
    $(".sections div").removeClass("chosen");
    $(".inside-box .info-span").css('padding', '20px 40px');
    $(".inside-box").removeClass("background-black");
    event.stopPropagation();
  });

  $(".inside-box .info-span").click(function() {
    $(".inside-box .info-span").css('padding', '10px 20px');
    $(".not-yet").css('max-height', '600px');
    $(".inside-box div").css('opacity', '1');
    $(".inside-box").addClass("background-black");
    event.stopPropagation();
  });
});
