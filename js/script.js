'use strict';

$(document).ready(function () {

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);


    $('.info').on('click', function () {
        $('#info').scrollTop(0);
        $('#info').addClass('on');
        $('body').addClass('subscribe_hover_bg');
        $('#home .container, .bg_img, .bg_video, canvas').addClass('subscribe_hover_op')
    });

    $('#home, .aa, .close_info').on('click', function () {
        $('#info').removeClass('on slideOutRight animated');
        $('body').removeClass('subscribe_hover_bg');
        $('#home .container, .bg_img, .bg_video, canvas').removeClass('subscribe_hover_op')
    });

    (function() {
        $('#info').on('scroll', function(e) {
            var current, max, value;
            max = $('#info').height();
            current = $('#info').scrollTop();
            value = current / max * 105;

            $('.step').css({
                'height': value + '%'
            });
        });

    }).call(this);




    var $first_section = $('.first_section');

    $('#accordion .panel-title a').on('click', function () {
       $('#accordion2 .panel-collapse').removeClass('in');
    });

    $('#accordion2 .panel-title a').on('click', function () {
       $('#accordion .panel-collapse').removeClass('in');
    });


    var $nav_left = $('.nav_left'),
        $nav_right = $('.nav_right'),
        $close_left = $('.close_left'),
        $close_right = $('.close_right'),
        $contact = $('.contact'),
        $about = $('.about'),
        $home = $('.home');

    $nav_left.on('click', function () {
        $about.removeClass('hide').addClass('slideInLeft animated');
        $close_left.removeClass('hide').addClass('slideInLeft animated2');
        setTimeout(function () {
            $about.removeClass('slideInLeft animated');
        }, 1200);
        $('body').append(
            '<script type="text/javascript" src="js/isotope.pkgd.min.js"></script>' +
            '<script type="text/javascript" src="js/lightbox.js"></script>' +
            '<script type="text/javascript" src="js/portfolio_config.js"></script>')
    });
    $close_left.on('click', function () {
        $about.addClass('slideOutLeft animated');
        $close_left.addClass('hide').removeClass('slideInLeft animated2');
        setTimeout(function () {
            $about.scrollTop(0);
            $about.addClass('hide').removeClass('slideOutLeft animated');
        }, 1200);
        setTimeout(function () {
            $('.animate').removeClass('start');
        }, 1500);
    });

    $nav_right.on('click', function () {
        $contact.removeClass('hide').addClass('slideInRight animated');
        $close_right.removeClass('hide').addClass('slideInRight animated2');
        setTimeout(function () {
            $contact.removeClass('slideInRight animated');
        }, 1200);
        $('body').append(
            '<script type="text/javascript" src="js/map_config.js"></script>')
    });
    $close_right.on('click', function () {
        $contact.addClass('slideOutRight animated');
        $close_right.addClass('hide').removeClass('slideInRight animated2');
        setTimeout(function () {
            $contact.scrollTop(0);
            $contact.addClass('hide').removeClass('slideOutRight animated');
            $('.animate').removeClass('start');
        }, 1200);
        setTimeout(function () {
            $('.animate').removeClass('start');
        }, 1500);
    });

    $('.btn_subscribe_on').on('click', function () {
        $('.btn_subscribe_on').toggleClass('close');
        $('.btn_subscribe_on i').toggleClass('fa-paper-plane-o fa-close fadeIn animated');
        $('.subscribe_on').toggleClass('on');
        $('.content').toggleClass('opacity');
    });
    $('.content, .left').on('click', function () {
        $('.btn_subscribe_on').removeClass('close');
        $('.btn_subscribe_on i').removeClass('fa-close fadeIn animated').addClass('fa-paper-plane-o ');
        if ($('.subscribe_on').hasClass('on')) {
            $('.content').toggleClass('opacity');
        }
        $('.subscribe_on').removeClass('on');
    });
    $('.content, .subscribe_on').on('click', function () {
        if ($('.menu_opened').hasClass('on')) {
            $('.menu_opened').removeClass('on')
        }
    });

    $('.play_btn').on('click', function () {
       $('.video_popup').addClass('on');
    });

    $('.vodeo_popup_close').on('click', function () {
       $('.video_popup').removeClass('on');
    });

    var page;
    var prevPage;

    $('.menu_opened li span').click(function(){

        page = $(this).attr('data-target');

        $('.content').load(page + '.html');

        // if(page + '.html'!= window.location){
        //     window.history.pushState({path:page + '.html'},'',page);
        // }

        return false;
    });

    $('.menu').on('click', function () {
       $('.menu_opened').toggleClass('on')
    });

    $('.menu_opened li span').on('click', function () {
       $('.menu_opened').removeClass('on')
    });

    $('.play_btn').click(function () {
        $("#video").get(0).currentTime = 0;
        $("#video").get(0).play();
    });


    $('.vodeo_popup_close').click(function () {
        $("#video").get(0).pause();
    });



    // -----------------------------------------------------------------------------------------------------
    // Animation on scroll

    (function(e) {
        e.fn.visible = function(t, n, r) {
            var i = e(this).eq(0),
                s = i.get(0),
                o = e(window),
                u = o.scrollTop(),
                a = u + o.height(),
                f = o.scrollLeft(),
                l = f + o.width(),
                c = i.offset().top,
                h = c + i.height(),
                p = i.offset().left,
                d = p + i.width(),
                v = t === true ? h : c,
                m = t === true ? c : h,
                g = t === true ? d : p,
                y = t === true ? p : d,
                b = n === true ? s.offsetWidth * s.offsetHeight : true,
                r = r ? r : "both";
            if (r === "both") return !!b && m <= a && v >= u && y <= l && g >= f;
            else if (r === "vertical") return !!b && m <= a && v >= u;
            else if (r === "horizontal") return !!b && y <= l && g >= f
        }
    })(jQuery);

    jQuery(window).scroll(function(event) {

        jQuery(".animate").each(function(i, el) {
            var el = jQuery(el);
            if (el.visible(true)) {
                el.addClass("start");
            }
        });
    });


    $('.revealedBox').each(function(i){

        var childrenSpan = $(this).children('span').length;

        $(this).addClass('childrenSpan-' + childrenSpan);

        if($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight() ){
            $(this).addClass('revealedBox-in');
        }
    });

    $(window).scroll(function() {
        $('.revealedBox').each(function(i){
            if($(window).scrollTop() + $(window).height() > $(this).offset().top ){
                $(this).addClass('revealedBox-in');
            }
        });

    });

});