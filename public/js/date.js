
	$('.date').each( function () {
		var date = $(this);
		date.html(moment(date.html()).format('YYYY-MM-DD (hh:mm:ss)'));
	});