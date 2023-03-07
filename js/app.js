$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Header Fixed */
    checkScroll(scrollOffset);
    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this), 
            blockId = $this.data('scroll'); 
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active"); 

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    /* Burger Menu Toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav, header").toggleClass("active");
    });

    // Close burger after click
    $('.nav__link').on("click", function(){
        $('#nav_toggle').click();
    });

    $('.header__logo').on("click", function(){
        $('#nav_toggle').click();
    });
});