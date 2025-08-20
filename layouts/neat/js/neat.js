jQuery(function($) {
	// Jump to Content
	$(function(){
		$('#skip').on('click', function() {
			var $idf = $("#"+$(this).attr("href").split("#")[1]);
			$idf.attr("tabindex", -1).focus();
		});
	});


	// Main Navigation
	$(function(){
		$('#sf-menu').supersubs({
			minWidth: 12,
			maxWidth: 24,
			extraWidth: 0
		}).superfish({
			delay: 0,
			animation: {opacity:'show'},
			animationOut: {opacity:'hide'},
			speed: 50,
			speedOut: 5
		});
	});


	// Sitemap
	$(function(){
		var $sm = $('#sitemap'),
			$smLink = $('#sitemap-link'),
			$smArrow = $('#sitemapArrow'),
			$smNav = $('#sitemap-nav');

		$smLink.on('mouseenter focus', function(){
			$smArrow.show();
			$smNav.slideDown('fast');
		});
		$sm.on('mouseleave',function(){
			$smNav.hide();
			$smArrow.hide();
		});
	});


	// Side Navigation
	$(function() {
		var $sm3rd = $('#side_menu').find('.sm3rd-trigger');
		
		$sm3rd.on('click', function(e) {
			$this = $(this);
			if($this.next().is(':hidden')) {
				$sm3rd.removeClass('active').next().slideUp(200);
				$this.addClass('active').next().slideDown(200);
			} else {
				$this.removeClass('active').next().slideUp(200);
			};
			e.preventDefault();
		});
	});


	// Min-height
	$(function(){
		function setMinHeight() {
			$('#content').css('min-height',function(){
				return $('#sidebar').outerHeight(true);
			});
		}
		if($('#content').outerHeight(true) < $('#sidebar').outerHeight(true)) {
			setMinHeight();
		};
	});


	// Placeholder
	$(function(){
		$("[placeholder]").textPlaceholder();
	});


	// Scroll Top
	$(function() {
		var $sTop = $('#sTop');
		$sTop.on('click', function(e){
			e.preventDefault();
			$('html, body').stop(true).animate({scrollTop:0},800,'swing');
		});

		$(window).on('scroll',function() {
			var position = $(window).scrollTop();
			if(position > 200) {
				$sTop.show();
			} else {
				$sTop.hide();
			}
		});
	});

});