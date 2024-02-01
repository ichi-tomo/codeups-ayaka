jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  //ドロワーメニュー
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass("is-active")) {
      $(".js-hamburger").removeClass("is-active");
      $(".header").removeClass("is-active");
      $(".js-nav").fadeOut();
    } else {
      $(".js-hamburger").addClass("is-active");
      $(".header").addClass("is-active");
      $(".js-nav").fadeIn();
    }
  });

  $(function(){
    var swiper = new Swiper(".js-campaign-swiper", {
      loop: true,   // クルクル回ってる
      slidesPerView: 1.26,    // 1画面にいくつ表示させるか
      breakpoints: {
        768: {
          slidesPerView: 3.29,
          spaceBetween: 30    // slider間の余白
        },
        1024: {
          slidesPerView: 3.49,
          spaceBetween: 35
        }
      },
      spaceBetween: 24,
      speed: 2000,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      },
      // Navigation arrows
      navigation: {
        prevEl: ".campaign-swiper__prev"
        nextEl: ".campaign-swiper__next",
      }
    });
  });
  
});
