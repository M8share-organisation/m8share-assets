// Made w/ ❤️ by Better Dev

// Twitter: twitter.com/chris__sev
// YouTube: https://www.youtube.com/channel/UCmXVXfidLZQkppLPaATcHag
 /*----------------------------------
        //------ OWL CAROUSEL ------//
        -----------------------------------*/
        $(".style1").owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                    margin: 20,
                },
                500: {
                    items: 1,
                    margin: 20,
                },
                768: {
                    items: 2,
                    margin: 20,
                },
                991: {
                    items: 2,
                    margin: 20,
                },
                1025: {
                    items: 3,
                    margin: 20,
                },
            },
        });

        $(".style2").owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 2,
                    margin: 20,
                },
                400: {
                    items: 2,
                    margin: 20,
                },
                500: {
                    items: 3,
                    margin: 20,
                },
                768: {
                    items: 4,
                    margin: 20,
                },
                992: {
                    items: 5,
                    margin: 20,
                },
                1000: {
                    items: 6,
                    margin: 20,
                },
            },
        });

        $(".style3").owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 1,
                    margin: 20,
                },
                500: {
                    items: 1,
                    margin: 20,
                },
                768: {
                    items: 2,
                    margin: 20,
                },
                991: {
                    items: 2,
                    margin: 20,
                },
                1000: {
                    items: 5,
                    margin: 20,
                },
            },
        });

        $(".carousel4").owlCarousel({
            autoPlay: false,
            navigation: true,
            slideSpeed: 600,
            items: 3,
            itemsDesktop: [1239, 3],
            itemsTablet: [991, 2],
            itemsMobile: [767, 1],
        });

        /*----------------------------------
        //------ TOP LOCATION ------//
        -----------------------------------*/
        if ($("#tp-carousel").length) {
            $("#tp-carousel").owlCarousel({
                loop: true,
                margin: 2,
                dots: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true,
                    },
                    600: {
                        items: 2,
                        nav: true,
                    },
                    1024: {
                        items: 3,
                        nav: true,
                    },
                    1025: {
                        items: 5,
                        nav: true,
                        loop: false,
                    },
                },
            });
        }



        /*----------------------------------
        //------ MAGNIFIC POPUP ------//
        -----------------------------------*/
        $(document).ready(function() {
            $(".popup-youtube").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
            });
        });

  
        /*----------------------------------
        //------ RANGE SLIDER ------//
        -----------------------------------*/
        $(".slider-range").slider({
            range: true,
            min: 5000,
            max: 200000,
            step: 1000,
            values: [60000, 130000],
            slide: function(event, ui) {
                $(".slider_amount").val(
                    "$" +
                    ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") +
                    " - $" +
                    ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                );
            },
        });
        $(".slider_amount").val(
            "Price Range: $" +
            $(".slider-range")
            .slider("values", 0)
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") +
            " - $" +
            $(".slider-range")
            .slider("values", 1)
            .toString()
            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        );
