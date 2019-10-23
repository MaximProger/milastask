$ (function() {

    let header = $('#header'),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Fixed Header */

    checkScroll(scrollOffset);

    $(window).on('scroll', function () {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

      });


    function checkScroll(scrollOffset) {


        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

            $("#nav a").removeClass("active");
            $this.addClass("active");

            $("html, body").animate({
                scrollTop: blockOffset
            }, 500);
    });

    /* Mobile Nav */

    const navToggle = $('#navToggle'),
        nav = $('#nav');

    navToggle.on('click', function(event) {

        event.preventDefault();

        nav.toggleClass('show');
        $(".fa-bars").toggleClass("fa-times");

    });

    /* Filter */

    let filter = $("[data-filter]");

    filter.on('click', function(event) {
        event.preventDefault();

        let category = $(this).data('filter');

        if (category == 'all') {
            $('[data-cat').removeClass('hide');
        } else {
            $('[data-cat]').each(function() {

                let workCAtegory = $(this).data('cat');

                if (workCAtegory != category) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                };
            });
        };
    });

    /* Slider for partners */

    $("[data-slider]").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
          
      

      $("[data-reviews]").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
})