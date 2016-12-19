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
  });

  $(".section-boxes span").click(function() {
    // debugger;
    $("body div").removeClass("smallerr")
    $(".sections div").removeClass("chosen");
    event.stopPropagation();
  });
});
