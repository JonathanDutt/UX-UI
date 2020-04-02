let $show = document.querySelector('.show')

// A function that goes to the start of the show
let setFirstSlide = () => {
	
	let $slide = document.querySelector('.slide:first-child');
	// let $slide = document.querySelector('.slide:nth-child(1)');
	// let $slide = $show.querySelector(':first-child');
	// let $slide = $show.firstElementChild
	// let $slide = document.querySelectorAll('.slide')[0]

	$slide.classList.add('current')

}

// A function that goes to the end of the show
let setLastSlide = () => {

}

// Remove ".current" from all ".slide"
let unsetSlides = () => {

}

// Previous slide
let prevSlide = () => {

}

// Next slide
let nextSlide = () => {
	// 1. Find the .current element
	let $curr = document.querySelector('.current')

	// 2. Remove the .current class
	$curr.classList.remove('current')

	// 3. Go to the next sibling element
	let $next = $curr.nextElementSibling 

	// 4. Check if a slide exist:
	//      - if so, add current
	//      - if not, go to the beginning

	if ($next != null) {
		// Add the current class
		$next.classList.add('current')
	} else {
		// Go back to the beginning
		setFirstSlide()
	}
}

// When the interface has fully loaded...
let windowLoaded = () => {
	setFirstSlide()

	// EVENT LISTENERS
	let $nextBtn = document.querySelector('#next')
	$nextBtn.addEventListener('click', nextSlide)

}





// Kick off!
window.addEventListener('load', windowLoaded)
