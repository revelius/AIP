jQuery(function($){
	$(function(){
		var $CameronBody = $('#cameron-body');
		if($CameronBody.length > 0){
			var $html = $('html'),
				$body = $('body'),
				$TouchMe = $('#TouchMe'),
				$MobileNav = $('#cameron-mobile-nav');
			
			// Mobile Navigation Open
			function mNavOpen(){
				$html.css({'overflow-x':'hidden','height':'100%'});
				$body.css({'overflow-x':'hidden','height':'100%'});
				$TouchMe.addClass('touch-on');
				$MobileNav.addClass('cameron-mobile-nav');
				$CameronBody.addClass('slide-x');
			}
	
			// Mobile Navigation Close
			function mNavClose(){
				$CameronBody.removeClass('slide-x');
				$MobileNav.removeClass('cameron-mobile-nav');
				$TouchMe.removeClass('touch-on');
				$body.css({'overflow-x':'','height':''});
				$html.css({'overflow-x':'','height':''});
			}
	
			var TouchMe=1;
			$TouchMe.on('tap',function(e){
				e.preventDefault();
				e.stopPropagation();
				$(this).off('click');
				if(TouchMe){
					TouchMe=0;
					mNavOpen();
				}else {
					TouchMe=1;
					mNavClose();
				}
			});
	
			if($MobileNav.hasClass('mobile-nav-right')) {
				$MobileNav.on('swiperight',function(e) {
					e.preventDefault();
					TouchMe=1;
					mNavClose();
				});
			} else {
				$MobileNav.on('swipeleft',function(e) {
					e.preventDefault();
					TouchMe=1;
					mNavClose();
				});
			};
		}
	});
});
