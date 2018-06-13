var $portfolio = $('#Portfolio'),
    $filters = $('#filters'),
    $filtersLink = $('#filters a');

// -----------------------------------------------------------------------------------------------------
// Lightbox
$('.lightbox-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-with-zoom',
    fixedContentPos: true,
    closeBtnInside: true,

    zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function (openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
    },
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    }
});


// -----------------------------------------------------------------------------------------------------
// PORTOFOLIO

$portfolio.isotope({
    itemSelector: '.portfolio-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.portfolio-sizer'
    }
});

$filters.on('click', 'a', function () {
    var filterValue = $(this).attr('data-filter');
    $filtersLink.removeClass('active');
    $(this).addClass('active');
    $portfolio.isotope({
        filter: filterValue
    });
});
