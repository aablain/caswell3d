// User-Interface Logic
$(document).ready(function() {
  // debugger;

  $(".sections .section-boxes").click(function() {
    // debugger;
    $(".sections").addClass("smallerr")
    $(this).addClass("chosen");
    $("#show").removeClass("not-yet");
    $("#show div").css('opacity', '1');
  });

  $(".section-boxes .close-box").click(function() {
    // debugger;
    $(".not-yet").css('max-height', '60px');
    $(".inside-box div").css('opacity', '0')
    $("body div").removeClass("smallerr")
    $(".sections div").removeClass("chosen");
    // $(".inside-box").addClass("not-yet");
    $(".inside-box").removeClass("background-black");
    event.stopPropagation();
  });

  $(".inside-box .info-span").click(function() {
    // $(".inside-box").removeClass("not-yet");
    $(".not-yet").css('max-height', '600px');
    $(".inside-box div").css('opacity', '1')
    $(".inside-box").addClass("background-black");
    event.stopPropagation();
  });
});
