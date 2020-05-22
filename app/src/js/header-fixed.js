$(function() {
  $(window).scroll(function() {
    const heightHeader = $('.header__main').height();
    const heightHero = $('.hero').height();
    const heightScroll = $(document).scrollTop();
    const calcHeaderHero = heightHeader + heightHero;
    console.log(heightHeader, heightHero, calcHeaderHero, heightScroll);
    if (heightScroll > calcHeaderHero) {
      console.log("Entrou");
      $('.header__main').addClass('header__main--fixed');
    } else {
      console.log("Não entrou");
      $('.header__main').removeClass('header__main--fixed');
    }
  });
});