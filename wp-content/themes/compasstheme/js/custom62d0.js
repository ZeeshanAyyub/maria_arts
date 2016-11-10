//Menu Init
ddsmoothmenu.init({
    mainmenuid: "menu", //menu DIV id
    orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
    classname: 'ddsmoothmenu', //class added to menu's outer DIV
    //customtheme: ["#1c5a80", "#18374a"],
    contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
});
//Sit Slider setting
jQuery(document).ready(function ($) {
    jQuery.Slitslider.defaults = {
        // transitions speed
        speed: 700,
        // if true the item's slices will also animate the opacity value
        optOpacity: false,
        // amount (%) to translate both slices - adjust as necessary
        translateFactor: 230,
        // maximum possible angle
        maxAngle: 25,
        // maximum possible scale
        maxScale: 5,
        // slideshow on / off
        //autoplay: true,
        // keyboard navigation
        keyboard: true,
        // time between transitions
        interval: $("#txt_slidespeed").val(),
        // callbacks
        onBeforeChange: function (slide, idx) {
            return false;
        },
        onAfterChange: function (slide, idx) {
            return false;
        }
    };
});
//Home page Animation
jQuery(document).ready(function (jQuery) {
    var animated_element = jQuery('.animated');
    function image_animation() {
        animated_element.each(function () {
            var get_offset = jQuery(this).offset();
            if (jQuery(window).scrollTop() + jQuery(window).height() > get_offset.top + jQuery(this).height() / 2) {
                jQuery(this).addClass('animation_started');
                // var el = $(this).find('.animated');
                setTimeout(function () {
                    jQuery(this).removeClass('animated').removeAttr('style');
                }, 300);
            }
        });

    }
    jQuery(window).scroll(function () {
        image_animation();
    });
    jQuery(window).load(function () {
        setInterval(image_animation, 300);
    });

});
//Full Screen Slider Init
jQuery(function () {
    var Page = (function () {
        var $navArrows = jQuery('#nav-arrows'),
                $nav = jQuery('#nav-dots > span'),
                slitslider = jQuery('#slider').slitslider({
            onBeforeChange: function (slide, pos) {
                $nav.removeClass('nav-dot-current');
                $nav.eq(pos).addClass('nav-dot-current');
            }
        }),
                init = function () {
                    initEvents();
                },
                initEvents = function () {
                    // add navigation events
                    $navArrows.children(':last').on('click', function () {
                        slitslider.next();
                        return false;
                    });
                    $navArrows.children(':first').on('click', function () {
                        slitslider.previous();
                        return false;
                    });
                    $nav.each(function (i) {
                        jQuery(this).on('click', function (event) {
                            var $dot = jQuery(this);
                            if (!slitslider.isActive()) {
                                $nav.removeClass('nav-dot-current');
                                $dot.addClass('nav-dot-current');
                            }
                            slitslider.jump(i + 1);
                            return false;
                        });
                    });
                };
        return {init: init};
    })();
    Page.init();
});
//Flexslider
//<![CDATA[
jQuery.noConflict();
jQuery("document").ready(function () {
    jQuery('.flexslider').flexslider({
        animation: "slide", //String: Select your animation type, "fade" or "slide"
        slideDirection: "horizontal", //String: Select the sliding direction, "horizontal" or "vertical"
        slideshow: true, //Boolean: Animate slider automatically
        slideshowSpeed: 6000, //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationDuration: 600, //Integer: Set the speed of animations, in milliseconds
        smoothHeight: true, //Boolean: Animate the height of the slider smoothly for slides of varying height.
        directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
        controlNav: false, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        keyboardNav: true, //Boolean: Allow slider navigating via keyboard left/right keys
        mousewheel: false, //Boolean: Allow slider navigating via mousewheel
        prevText: "Previous", //String: Set the text for the "previous" directionNav item
        nextText: "Next", //String: Set the text for the "next" directionNav item
        pausePlay: false, //Boolean: Create pause/play dynamic element
        pauseText: 'Pause', //String: Set the text for the "pause" pausePlay item
        playText: 'Play', //String: Set the text for the "play" pausePlay item
        randomize: false, //Boolean: Randomize slide order
        slideToStart: 0, //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        animationLoop: true, //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        pauseOnAction: true, //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: true
    });
});
//]]>
//Flexslider
//<![CDATA[
jQuery.noConflict();
jQuery("document").ready(function () {
    jQuery('.flexslider_gallery').flexslider({
        animation: "slide", //String: Select your animation type, "fade" or "slide"
        slideDirection: "horizontal", //String: Select the sliding direction, "horizontal" or "vertical"
        slideshow: true, //Boolean: Animate slider automatically
        slideshowSpeed: 6000, //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationDuration: 600, //Integer: Set the speed of animations, in milliseconds
        smoothHeight: true, //Boolean: Animate the height of the slider smoothly for slides of varying height.
        directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
        controlNav: false, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        keyboardNav: true, //Boolean: Allow slider navigating via keyboard left/right keys
        mousewheel: false, //Boolean: Allow slider navigating via mousewheel
        prevText: "Previous", //String: Set the text for the "previous" directionNav item
        nextText: "Next", //String: Set the text for the "next" directionNav item
        pausePlay: false, //Boolean: Create pause/play dynamic element
        pauseText: 'Pause', //String: Set the text for the "pause" pausePlay item
        playText: 'Play', //String: Set the text for the "play" pausePlay item
        randomize: false, //Boolean: Randomize slide order
        slideToStart: 0, //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        animationLoop: true, //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        pauseOnAction: true, //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: true
    });
});
//]]>

//Home page Carousel
jQuery.noConflict();
//Crousel Init	
jQuery(document).ready(function ($) {
    $(".carousel-posts").jCarouselLite({//carousel settings
        visible: $('#carousel-full li').length, // visible items
        auto: 5000, // carousel speed
        btnNext: ".next", // next button class
        btnPrev: ".prev" // previous button class
    });
});

//Gallery
jQuery.noConflict();
jQuery(document).ready(function () {
    jQuery(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed: 'normal', theme: 'facebook', slideshow: 3000, autoplay_slideshow: false, social_tools: false});
});

jQuery.noConflict();
jQuery(document).ready(function () {
    if (customobj.transition_status == 'off') {
        jQuery(".feature-content-inner").removeAttr("style");
        jQuery(".feature-content-inner,.feature_testimonial h2,.feature_testimonial div,.blog_slider .blog_slider_wrapper,.bottom_tagline .ipad-tagline .bottom_tagline_text,.bottom_tagline .ipad-tagline .bottom_tagline_button").removeClass("animated");
        jQuery(".feature-content .feature-content-inner p.font_icon,.feature-content .feature-content-inner p.font_icon i.fa").css({"transition": "none", '-ms-transition': 'none', '-o-transition': 'none', '-moz-transition': 'none', '-o-transition':'none', '-webkit-transition': 'none'});
    }
});
