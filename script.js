$( document ).ready(function() {
	$( "#button2" ).click(function() {
		$(".pageOne,.pageThree,.pageFour,.pageFive,.pageSix,.pageEight,.pageSeven").addClass("hide");
	    $(".pageTwo").removeClass("hide");
	});
	$( "#button3" ).click(function() {
		$(".pageOne,.pageTwo,.pageFour,.pageFive,.pageSix,.pageEight,.pageSeven").addClass("hide");
	    $(".pageThree").removeClass("hide");
	});
	$( "#button1" ).click(function() {
		$(".pageThree,.pageTwo,.pageFour,.pageFive,.pageSix,.pageSeven,.pageEight").addClass("hide");
	    $(".pageOne").removeClass("hide");
	});
	$( "#button4" ).click(function() {
		$(".pageThree,.pageTwo,.pageOne,.pageFive,.pageSix,.pageSeven,.pageEight").addClass("hide");
	    $(".pageFour").removeClass("hide");
	});
	$( "#button5" ).click(function() {
		$(".pageThree,.pageTwo,.pageOne,.pageFour,.pageSix,.pageSeven,.pageEight").addClass("hide");
	    $(".pageFive").removeClass("hide");
	});
	$( "#button6" ).click(function() {
		$(".pageThree,.pageTwo,.pageOne,.pageFour,.pageFive,.pageSeven,.pageEight").addClass("hide");
	    $(".pageSix").removeClass("hide");
	});
	$( "#button7" ).click(function() {
		$(".pageThree,.pageTwo,.pageOne,.pageFour,.pageFive,.pageSix,.pageEight").addClass("hide");
	    $(".pageSeven").removeClass("hide");
	});
	$( "#button8" ).click(function() {
		$(".pageThree,.pageTwo,.pageOne,.pageFour,.pageFive,.pageSix,.pageSeven").addClass("hide");
	    $(".pageEight").removeClass("hide");
	});

    console.log( "ready!" );
});
