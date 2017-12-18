$('.multiple-items').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows: true,
   dots: false,
   responsive: [
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,

         }
            }

   ]
});

'use strict';

(function ($) {
   $(".form__adressIcon").mouseover(function () {
      $(".form__adressTextWrap").show();
   });
})(jQuery);

(function ($) {
   $(".form__telIcon").mouseover(function () {
      $(".form__telTextWrap").show();
   });
})(jQuery);

(function ($) {
   $(window).scroll(function () {
      if ($(this).scrollTop() >= 50) {
         $('#top-button').fadeIn(200);
      } else {
         $('#top-button').fadeOut(200);
      }
   });
   $('#top-button').click(function () {
      $('body,html').animate({
         scrollTop: 0
      }, 500);
   });
})(jQuery);
