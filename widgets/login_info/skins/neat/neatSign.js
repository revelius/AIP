function completeLogin(ret_obj, response_tags, params, fo_obj) {
    var url =  current_url.setQuery('act','');
    location.href = url;
}

jQuery(function($){
	var $account = $('.account'),
		$acField = $('#acField'),
		$acWarning = $account.find('.acWarning');

	$('#keep_signed').change(function(){
		if($(this).is(':checked')){
			$acWarning.slideDown(200);
		} else {
			$acWarning.slideUp(200);
		}
	});

	$('#fo_login_widget .message').parent($acField).show();
});