$(function() {
  $(".menu").on("click", function() {
    $(this).find(".hamburguer").toggleClass("active");
    $(".menu").find(".navbar").toggleClass("hide");
  });
});