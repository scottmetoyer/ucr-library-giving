/**
 * 1. Menu Mobile
 * 2. Search
 * 3. Featured Slider
 * 4. Footer Instagram
 * 5. Post Formats
 * 6. Preloader
 */

'use strict';

(function ($) {

	$(document).ready(function () {

		/* 1. Menu Mobile */
		var $body = $('body'),
			$menu = $('.menu-list'),
			$btnMenu = $('.menu-mobile'),
			back = '<li class="back"><a href="#"><i class="fa fa-angle-left"></i>Back</a></li>';

		$('ul', $menu).prepend(back);

		$('.menu-item-has-children > a', $menu).on('click', function (event) {
			var $item = $(event.target).closest('.menu-item-has-children'),
				ww = $(window).width();

			if (ww <= 991) {
				event.preventDefault();

				$('> .sub-menu', $item).addClass('active');
			}
		});
		$menu.on('click', '.back', function (event) {

			event.preventDefault();

			$(this).closest('.sub-menu').removeClass('active');
		});

		$menu.on('open', function () {
			$menu.addClass('active');
			$body.addClass('menu-active');

		});

		$menu.on('close', function () {
			$menu.removeClass('active');
			$body.removeClass('menu-active');
		});
		$btnMenu.on('click', function () {
			$menu.trigger('open');
		});

		$('.hide-menu').on('click', function () {
			$menu.trigger('close');
		});

		$(document).on('keydown', function (event) {
			if (event.keyCode === 27) {
				$menu.trigger('close');
			}
		});

		/* 2. Search */
		var $searchPopup = $('.header-search-popup');

		$searchPopup.on('open', function () {
			$searchPopup.addClass('active');
		}).on('close', function () {
			$searchPopup.removeClass('active');
		});
		$('.header-search').on('click', function (event) {
			event.preventDefault();
			$searchPopup.trigger('open');
		});
		$('.header-close', $searchPopup).on('click', function () {
			$searchPopup.trigger('close');
		});
		$(document).on('keydown', function (event) {
			if (event.keyCode === 27) {
				$searchPopup.trigger('close');
			}
		});

		/* 3. Featured Slider */
		// Moved to inside the Angular controller

		/* 4. Footer Instagram */
		var $footer = $('#footer'),
			$instagramFeed = $('.instagram-feed', $footer),
			$instagramText = $('.instagram-text', $instagramFeed);

		function konohaInstagramText() {
			var height = $instagramFeed.outerHeight(),
				width = $instagramFeed.outerWidth();

			$instagramText.css({
				top : (height - $instagramText.outerHeight())/ 2 + 'px',
				left: (width - $instagramText.outerWidth()) / 2  + 'px'
			});
		}

		konohaInstagramText();

		$(window).resize(function () {
			konohaInstagramText();
		});

		/* 5. Post Format */
		var $tiledGallery = $('.images-tiled'),
			$slideShow = $('.images-slides');

		if ($tiledGallery.length) {


			$tiledGallery.each(function () {

				var w = $(this).width(),
					rowHeight = 160;

				if (w > 700) {
					rowHeight = 160;
				}
				else if (w > 400) {
					rowHeight = 100;
				}
				else {
					rowHeight = 80;
				}
				$(this).justifiedGallery({
					rowHeight: rowHeight,
					lastRow  : 'justify',
					margins  : 4,
					randomize: true,
					captions : false
				}).magnificPopup({
					delegate : 'a',
					type     : 'image',
					tLoading : 'Loading image #%curr%...',
					mainClass: 'mfp-img-mobile',
					gallery  : {
						enabled           : true,
						navigateByImgClick: true,
						preload           : [0, 1]
					},
					image    : {
						tError  : '<a href="%url%">The image #%curr%</a> could not be loaded.',
						titleSrc: function (item) {
							return item.el.attr('data-caption');
						}
					}
				})
			});
		}

		/*
		if ($slideShow.length) {
			$slideShow.owlCarousel({
				items     : 1,
				loop      : false,
				nav       : false,
				dot: true,
				smartSpeed: 800,
				navText   : ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
			});
		}
	*/

		/* 6. Preloader */
		$(window).on('load', function () {
			$('.preloader').addClass('kd-hidden');
		});
	});

})(jQuery);