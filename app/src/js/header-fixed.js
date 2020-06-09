$(function() {
  $(window).scroll(function() {
    const heightHeader = $('.header__main').height();
    const heightHero = $('.hero').height();
    const heightScroll = $(document).scrollTop();
    const calcHeaderHero = heightHeader + heightHero;
    console.log(heightHeader, heightHero, calcHeaderHero, heightScroll);
    if (heightScroll > calcHeaderHero) {
      $('.header__main').addClass('header__main--fixed');
    } else {
      $('.header__main').removeClass('header__main--fixed');
    }
  });
});