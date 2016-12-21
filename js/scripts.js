// Back-end Logic


// User-Interface Logic
$(document).ready(function() {
  // debugger;

  $(".sections .section-boxes").click(function() {
    // debugger;
    $(".sections").addClass("smallerr")
    // $(".section-boxes").addClass("others");
    // $(this).removeClass("others");
    $(this).addClass("chosen");
    $("#show").removeClass("not-yet");
  });

  $(".section-boxes .close-box").click(function() {
    // debugger;
    $("body div").removeClass("smallerr")
    $(".sections div").removeClass("chosen");
    $(".inside-box").addClass("not-yet");
    $(".inside-box").removeClass("background-black");
    event.stopPropagation();
  });

  $(".inside-box span").click(function() {
    $(".inside-box").removeClass("not-yet");
    $(".inside-box").addClass("background-black");
    event.stopPropagation();
  });
});
