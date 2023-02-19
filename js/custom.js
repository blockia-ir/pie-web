"use strict";

window.addEventListener('load', function() {
//------------------------------------------------------------------------
//                    MAGNIFIC POPUP(LIGHTBOX) SETTINGS
//------------------------------------------------------------------------

$('.gallery').each(function () { // the containers for all your galleries
    var $this = $(this);
    $this.magnificPopup({
        delegate: '.video-popup, .image-popup', // the selector for gallery item
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: function (item) {
                return item.el.find('img').attr('alt');
            }
        },
        callbacks: {
            open: function() {
                $this.trigger('stop.owl.autoplay');
            },
            close: function() {
                $this.trigger('play.owl.autoplay');
            }
        },
        disableOn: function () {
            if (!pAgree || pAgree !== '1') {
                return false;
            }
            return true;
        }
    });
});

$('.masonry-filter').MasonryFilter({
    type: 'column-flex'
});

});
var pAgree = '1';

$('.video-popup').each( function(indx, el){
	if($(el).closest('.gallery').length === 0) {
		$(el).magnificPopup({
			type: 'iframe',
			iframe: {
				patterns: {
					youtube: {
						index: 'www.youtube.com/',
						id: 'v=',
						src: 'https://www.youtube.com/embed/%id%?autoplay=1'
					}
					, vimeo: {
						index: 'vimeo.com/',
						id: '/',
						src: 'https://player.vimeo.com/video/%id%?autoplay=1'
					}
				}
			},
			disableOn: function() {
				if (!pAgree || pAgree !== '1') {
					return false;
				}
				return true;
			}
		});
	}
});
$('.image-popup').each( function(indx, el){
	if($(el).closest('.gallery').length === 0) {
		$(el).magnificPopup({
			type: 'image'
		});
	}
});