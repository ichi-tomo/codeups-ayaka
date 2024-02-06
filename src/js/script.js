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

  // mv swiper
  $(function(){
    var swiper = new Swiper(".js-mv-swiper", {
      loop: true,   // 無限ループさせる
      speed: 4000,
      effect: 'fade',
      autoplay: {
        delay: 1000,                  // 次のスライドに切り替わるまでのミリ秒
        disableOnInteraction: false   // ユーザーが操作したときに自動再生を止める。falseがオススメ
      }
    });
  });

  // campaign swiper
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
        prevEl: ".campaign-swiper__prev",
        nextEl: ".campaign-swiper__next"
      }
    });
  });


  //画像のアニメーション
  var box = $('.js-colorbox'),
  speed = 700;
  box.each(function(){
    $(this).append('<div class="is-color"></div>')
    var color = $(this).find($('.is-color')),
    image = $(this).find('img', 'source');
    var counter = 0;
    image.css('opacity','0');
    color.css('width','0%');
    color.on('inview', function(){
      if(counter == 0){
        $(this).delay(200).animate({'width':'100%'},speed,function(){
          image.css('opacity','1');
          $(this).css({'left':'0' , 'right':'auto'});
          $(this).animate({'width':'0%'},speed);
          })
          counter = 1;
      }
    });
  });


});
