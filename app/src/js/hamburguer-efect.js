$(function() {
  console.log( "ready!" );
  $(".menu").on("click", function() {
    $(this).find(".hamburguer").toggleClass("active");
    $(".menu").find(".navbar").toggleClass("hide");
    console.log("pegou")
  });
});