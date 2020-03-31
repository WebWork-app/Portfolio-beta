/*** (1) NAV ***/

function anch(arg) {
    const topLength = (element) => {
        // returns largest integer less than or equal to the position of the element relative to the viewport
        return Math.floor(element.getBoundingClientRect().top)
    };

    arg.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    
    // controls the scrolling behaviour
    try {
        window.scrollBy({ top: topLength(target) - 100, left: 0, behavior: "smooth" });
    }
    catch {
        window({ top: topLength(target) - 100, left: 0, behavior: "smooth" });
    }
}

/*** (2) Image Slider ***/
function next() {
	console.log('hi')
	if (document.getElementById("card2").style.opacity == 0){
		document.getElementById("card1").style.opacity = 0;
		document.getElementById("card2").style.opacity = 100;
	}
	else {
		document.getElementById("card1").style.opacity = 100;
		document.getElementById("card2").style.opacity = 0;
	}
} 


// Used reg expression to select all 'a' tags with their respective href tags  
const links = document.querySelectorAll('a[href^="#"]');                                                                                                                                                                

// Calling Functions
links.forEach((each) => {
    each.onclick = anch
});


/* SLIDING */

$(document).on('click','.js-menu_toggle.closed',function(e){
	e.preventDefault(); $('.list_load, .list_item').stop();
	$(this).removeClass('closed').addClass('opened');

	$('.side_menu').css({ 'left':'0px' });

	var count = $('.list_item').length;
	$('.list_load').slideDown( (count*.6)*100 );
	$('.list_item').each(function(i){
		var thisLI = $(this);
		timeOut = 100*i;
		setTimeout(function(){
			thisLI.css({
				'opacity':'1',
				'margin-left':'0'
			});
		},100*i);
	});
});

$(document).on('click','.js-menu_toggle.opened',function(e){
	e.preventDefault(); $('.list_load, .list_item').stop();
	$(this).removeClass('opened').addClass('closed');

	$('.side_menu').css({ 'left':'-80%' });

	var count = $('.list_item').length;
	$('.list_item').css({
		'opacity':'0',
		'margin-left':'-20px'
	});
	$('.list_load').slideUp(300);
});

/* Eye Tracking */


