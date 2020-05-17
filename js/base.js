$(document).ready(_ => {
	$('.menuham').click(_ => {
		$('.menubar').is(':visible') ? $('.menubar').slideUp() : $('.menubar').slideDown();
	});

	$(window).resize(_ => {
		if ($(window).width() > 550) {
			$('.menubar').show();
			$('.menubar').css('display','flex');
		} else $('.menubar').hide();
	});
});