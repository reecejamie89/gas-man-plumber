$(document).ready(function(){
	

$('.nav-icon').on('click', function(){

	$('nav ul').slideToggle(300);
	$('.nav-icon').toggleClass('is-active');
});
$(window).on('resize', function(){
	var windowWidth= $(window).width();
	console.log(windowWidth);
	if ( windowWidth > 530 ) {
		$('nav ul').show();
		$('nav-icon').attr('class', 'nav-icon is-active');
	}
});

});