/**
 * Created by Alexey on 21.05.2017.
 */


;(function ($) {
    "use strict";
    /****he we include function humburger bar****/
    $(".menu-collapsed").click(function() {
        $(this).toggleClass("menu-expanded");
    });
    /****end function humburger bar****/

    /**** here we swich function scrolling****/
    smoothScroll.init();
    /****end swich function scrolling****/

    /**** here we swich function flickity crousel****/
    $('.carousel').flickity({
        // options
        cellAlign: 'center',
        contain: false,
        arrows:true,
        autoPlay: 3800,

        arrowShape: {
            x0: 10,
            x1: 46, y1: 36,
            x2: 51, y2: 36,
            x3: 15
        }

    });
    /**** end function flickity crousel meet us****/
    $('.carousel-team').flickity({
        // options
        cellAlign: 'left',
        contain: false,
        arrows:true,
        pageDots: false,
        

        arrowShape: {
            x0: 10,
            x1: 46, y1: 36,
            x2: 51, y2: 36,
            x3: 15,
        }

    });
    /************************ *************************/
})(jQuery);

/************ create map function***************/
function initMap() {
    var uluru = {lat: -7.932621, lng:112.6396402 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru,
        disableDefaultUI: true,
        scrollwheel:false
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon:'pin.png',
    });
}
/***************end map*************************/

/************************here we make scroll up**********************/
jQuery(function(upper){
    var element = upper('.scroll-up');
    upper(window).scroll(function(){
        element['fade'+ (upper(this).scrollTop() > 2800 ? 'In': 'Out')](300);
    });
});
/******************function stop scrolling**********************/

;(function(){
    var footerHeight =231;
    $(window).scroll(function () {
        var bottomOffset = $(document).height() - $(window).scrollTop() - $(window).height();
        if (bottomOffset < footerHeight) {
            $(".scroll-up").css('bottom', footerHeight - bottomOffset);
        } else {
            $(".scroll-up").css('bottom', 0);
         }
    });
})();


/************************here we make scroll up**********************/