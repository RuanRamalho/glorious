$(function() {
  console.log( "ready!" );
  $(".menu").on("click", function() {
      console.log("pegou");
    $(this).find(".hamburguer").toggleClass("active");
  });
});