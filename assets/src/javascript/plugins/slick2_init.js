

   $('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
   arrows: true,
   dots: false
});

'use strict';

(function($){
        $(".form__adressIcon").mouseover(function() {
       $(".form__adressTextWrap").show();
    }); 
})(jQuery);

(function($){
        $(".form__telIcon").mouseover(function() {
       $(".form__telTextWrap").show();
    }); 
})(jQuery);
