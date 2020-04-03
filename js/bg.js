$(function() {
	$(window).scroll(function () {
	   if ($(this).scrollTop() > 1000) {
		  $("body").addClass("changeColor")
	   }
	   if ($(this).scrollTop() < 1000) {
		  $("body").removeClass("changeColor")
       }
       if ($(this).scrollTop() > 2000) {
        $("body").addClass("changeColorAgain")
     }
        if ($(this).scrollTop() < 2000) {
        $("body").removeClass("changeColorAgain")
     }
        if ($(this).scrollTop() > 3000) {
        $("body").addClass("changeColorAagain")
     }
        if ($(this).scrollTop() < 3000) {
        $("body").removeClass("changeColorAagain")
     }
	});
 });