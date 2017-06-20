$( document ).ready(function() {
	$( ".navbar-toggle .collapsed" ).click(function() {
		$(".collapse .navbar-collapse").slideDown("slow");
	});
  $( ".navbar-toggle .collapsed" ).click(function() {
		$(".collapse .navbar-collapse").slideUp("slow");
	});
  $( ".page-scroll" ).click(function() {
		$(".navbar-collapse").slideUp("slow");
	});
	
	$( "#button1" ).click(function() {
		$(".plTwo,.prTwo,.plThree,.prThree").addClass("hide");
	    $(".plOne,.prOne").removeClass("hide");
	});
	$( "#button2" ).click(function() {
		$(".plOne,.prOne,.plThree,.prThree").addClass("hide");
	    $(".plTwo,.prTwo").removeClass("hide");
	});
	$( "#button3" ).click(function() {
		$(".plOne,.prOne,.plTwo,.prTwo").addClass("hide");
	    $(".plThree,.prThree").removeClass("hide");
	});


    console.log( "ready!" );
});
