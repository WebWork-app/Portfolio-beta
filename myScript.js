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

/*** (2) IMAGE SLIDER***/

// Declaring Variables 
var dots = [];
var descriptionText;
var imageNum;
var pictureSlides;

// Responsible for image slider
function initializeCarousel(){
    imageNum = 0;
    pictureSlides=document.getElementsByClassName("pictureHolder");

    descriptionText=document.querySelector(".description .descriptionText");
    descriptionText.innerText= pictureSlides[imageNum].querySelector(".descriptionText").innerText;

    //add progressDots
    var progressDots=document.getElementById("progressDots"),counter;
    for (counter = 0; counter < pictureSlides.length; counter++) {
        var Prgdot=document.createElement("span");
        Prgdot.classList.add("dots");
        progressDots.append(Prgdot);
        Prgdot.setAttribute("onclick","moveSlide("+counter+")");
        dots.push(Prgdot);
    }
    dots[imageNum].classList.add("active");
}
function moveSlide(n){
    var current;
    var next;
    var carouselAnim={
        forCurrent:"",
        forNext:""
    };

    var slideTextAnimClass;
    // If the right arrow is clicke
    if(n>imageNum) {
        if(n >= pictureSlides.length){n=0;}
        carouselAnim.forCurrent="leftCurr";
        carouselAnim.forNext="leftNexttSlide";
        slideTextAnimClass="animFromTop";

    }
    // If the left arrow is clicked
    else if(n < imageNum){
        if(n < 0){ n = pictureSlides.length - 1;}
        carouselAnim.forCurrent="RightCurr";
        carouselAnim.forNext="moveRightPrevSlide";
    }

    if(n!=imageNum){
        next = pictureSlides[n];
        current=pictureSlides[imageNum];
        for (let counter = 0; counter < pictureSlides.length; counter++) {
            pictureSlides[counter].className = "pictureHolder";
            pictureSlides[counter].style.opacity=0;
            dots[counter].classList.remove("active");
        }
        current.classList.add(carouselAnim.forCurrent);
        next.classList.add(carouselAnim.forNext);
        dots[n].classList.add("active");
        imageNum = n;

        // Setting the styling and text of the caption using DOM concept
        descriptionText.style.display="none";
        descriptionText.className="descriptionText " + slideTextAnimClass;
        descriptionText.innerText=pictureSlides[n].querySelector(".descriptionText").innerText;
        descriptionText.style.display="block";
    }

}

function plusSlides(n) {
    moveSlide(imageNum+n);
}

// Used reg expression to select all 'a' tags with their respective href tags  
const links = document.querySelectorAll('a[href^="#"]');                                                                                                                                                                

// Calling Functions
links.forEach((each) => {
    each.onclick = anch
});
initializeCarousel();


// Requires jQuery

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

