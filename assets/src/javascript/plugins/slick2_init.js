
$('.multiple-items').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows: true,
   dots: false,
   autoplay: false,
   rows: 1,
  
   responsive: [
      {
         breakpoint: 900,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
            infinite: true,
         }
    },
      {
         breakpoint: 426,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,



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

(function ($) {
      $(function() {
         $('a[href*=#]').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
               scrollTop: $($(this).attr('href')).offset().top
            }, 500, 'linear');
         });
      });
})