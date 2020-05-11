$(document).ready(function () {
    "use strict";
    /*==============================================================
        * Table of Contents :
        * 1.0 - DL Menu Script Start
        * 2.0 - Awsome Feature Slider Script Start
        * 3.0 - Our Client Carousel Script
        * 4.0 - Sponser Script Start
        * 5.0 - Team Slider Script Start
        * 6.0 - Headroom Script Start
        * 7.0 - Number Count Up(WayPoints) Script
        * 8.0 - Map Script Script
        * 9.0 - Google Map Function for Custom Style
    ==============================================================*/

    /*
      ==============================================================
    	   DL Menu Script Start
      ============================================================== */
    if ($('#dl-menu').length) {
        $(function () {
            $('#dl-menu').dlmenu({
                animationClasses: {
                    classin: 'dl-animate-in-2',
                    classout: 'dl-animate-out-2'
                }
            });
        });
    }

    /*
      ==============================================================
    	   Awsome Feature Slider Script Start
      ============================================================== */
    if ($('#keo_awesome_slider').length) {
        $('#keo_awesome_slider').owlCarousel({
            autoplay: true,
            autoplaySpeed: 1500,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
            slideSpeed: 2000,
            paginationSpeed: 2000,
            singleItem: true,
            smartSpeed: 2000,
            loop: true,
            center: true,
            margin: 0,
            dots: true,
            nav: false,
            navText: [
		        "<span class='flaticon-arrows-1'></span>",
				"<span class='flaticon-arrows'></span>"
		    ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    /*
   ==============================================================
    	Our Client Carousel Script
   ==============================================================
 	*/
    if ($('#keo_client_feedback').length) {
        $('#keo_client_feedback').owlCarousel({
            // autoplay: true,
            autoplay: true,
            autoplaySpeed: 1500,
            autoplayTimeout: 2000,
            stopOnHover: true,
            slideSpeed: 800,
            autoplayHoverPause: true,
            loop: true,
            center: false,
            margin: 30,
            dots: true,
            nav: false,
            navText: [
		        "<span class='flaticon-arrows-1'></span>",
				"<span class='flaticon-arrows'></span>"
		    ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }
    /*
    ==============================================================
    	Sponser Script Start
    ============================================================== */
    if ($('#keo_sponser_slider').length) {
        $('#keo_sponser_slider').owlCarousel({
            // autoplay: true,
            autoPlay: 4000,
            slideSpeed: 800,
            autoplayHoverPause: true,
            loop: true,
            center: false,
            margin: 30,
            dots: false,
            nav: false,
            navText: [
		        "<span class='flaticon-arrows-1'></span>",
				"<span class='flaticon-arrows'></span>"
		    ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 3
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1024: {
                    items: 4
                },
                1280: {
                    items: 5
                },
                1366: {
                    items: 5
                }
            }
        });
    }

    /*
	==============================================================
		Team Slider Script Start
	============================================================== */
    if ($('#keo_team_slider').length) {
        $('#keo_team_slider').slick({
            autoplay: true,
            autoplaySpeed: 1500,
            autoplayTimeout: 1500,
            pauseOnFocus: false,
            dots: true,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
            margin: 30,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
		    	},
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
		    	}
			]
        });
    }

    /* ==================================================================
			Number Count Up(WayPoints) Script
	  =================================================================	*/
    if ($('.keo_counter').length) {
        $('.keo_counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    /* ==================================================================
    		wow Animation Script
      =================================================================	*/
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        callback: function (box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    });
    wow.init();


    /*
      =======================================================================
    	  	Map Script Script
      =======================================================================
    */
    if ($('#map-canvas').length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }
    /*
      =======================================================================
    	Google Map Function for Custom Style
      =======================================================================
    */
    function initialize() {
        var MY_MAPTYPE_ID = 'custom_style';
        var map;
        var brooklyn = new google.maps.LatLng(23.693534, 90.434719);
        var featureOpts = [
            {
                stylers: [
                    {
                        hue: '#f9f9f9'
                    },
                    {
                        visibility: 'simplified'
                    },
                    {
                        gamma: 0.7
                    },
                    {
                        saturation: -200
                    },
                    {
                        lightness: 45
                    },
                    {
                        weight: 0.6
                    }
			  ]
			},
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    {
                        lightness: 200
                    },
                    {
                        visibility: "simplified"
                    }
			  ]
			},
            {
                elementType: 'labels',
                stylers: [
                    {
                        visibility: 'on'
                    }
			  ]
			},
            {
                featureType: 'water',
                stylers: [
                    {
                        color: '#ffffff'
                    }
			  ]
			}
		];
        var mapOptions = {
            zoom: 16,
            scrollwheel: false,
            center: brooklyn,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
            },
            mapTypeId: MY_MAPTYPE_ID
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        var styledMapOptions = {
            name: 'Custom Style'
        };
        var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
        map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
    }

});

/*for nav*/
$(function () {
    var windo = $(window);

    // this is for sticky menu js

    windo.on('scroll', function () {
        var scrollPos = windo.scrollTop();
        var scrolling = $(this).scrollTop();

        //for menu css change 

        if (scrolling >= 100) {
            $('.men').addClass('navcss');
        } else {
            $('.men').removeClass('navcss');
        }
    });

    //animation scroll

    $(".a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior

        if (this.hash !== "" || p !== "#popup") {

            // Prevent default anchor click behavior

            event.preventDefault();
            var hash = this.hash;

            //where to sotp after scrolling

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 83
            }, 1500, function () {

            });
        } // End if
    });


});

/*for nav*/
