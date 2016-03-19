$(document).ready(function(){
	$("#myNavbar a").on('click', function(event){

	  // Prevent default anchor click behavior
	  event.preventDefault();

	  // Store hash (#)
	  var hash = this.hash;

	  // Using jQuery's animate() method to add smooth page scroll
	  $('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 600);
	});
});