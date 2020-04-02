let theStateOfTheInterface = (event) => { 
  
	let winH = document.documentElement.clientHeight
	let docH = document.documentElement.scrollHeight
	let winY = window.scrollY
	let maxY = docH - winH


let allSections = '' // Start with blank, in case there are no sections

// For each section...
document.querySelectorAll('section').forEach(($sec) => {

let secH = $sec.scrollHeight  // How tall is this element?
let topPx = $sec.offsetTop  // How far is the top of this element from the top of the document?
let botPx = topPx + secH    // How far is the bottom of this element from the top of the document?

let seenThese = ''  // Start with blank: no class needed

// If the scroll position is at or below the element, AND it's also above the bottom of the element
if (winY >= topPx && winY < botPx) {
seenThese = 'class="seen"'  // add a class to this element
}

// If you wanted the above to accumulate elements you have passed, just remove the second condition, like this:
// if (winY >= topPx) { seenThese = 'class="seen"' }

// Check the CSS class definition to see what it does (assume each has an <h2>)
allSections += `<li ${seenThese}><a href="$">${ $sec.querySelector('h1').textContent }</a></li>`
})

// Print out all the heading names
document.querySelector('.panel').innerHTML = allSections
	if (winY >= maxY) {
	
	  document.querySelector('#main').innerHTML += `
	  <article class="game-wrapper">
              <h2>Nioh 2</h2>
              <iframe class="video-frame" src="https://www.youtube.com/embed/R7jxm8SGRtQ" frameborder="0"></iframe>
              <p>The sequel to Team Ninja's excellent blend of the action and Souls-like genres is here, and it succeeds as a wonderful evolution of everything that the first game did right, even though it's many systems can sometimes slow the otherwise blistering pace. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore suscipit dignissimos mollitia quia culpa dolorum autem, ad qui sit perspiciatis doloremque tenetur. Repellendus culpa cumque sequi voluptas, similique non.</p>
              <h2>Black Mesa</h2>
              <iframe class="video-frame" src="https://www.youtube.com/embed/KaJO14_TAbA" frameborder="0"></iframe>
              <p>Black Mesa (formerly known as Black Mesa: Source) is a first-person shooter video game, developed and published by Crowbar Collective. It is a third-party remake of Half-Life in the Source game engine. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis autem cumque in excepturi corporis, sint minus, adipisci dolor quod laboriosam veritatis qui optio enim, assumenda libero ut ullam sed.</p>
              <h2>Black Mesa</h2>
              <iframe class="video-frame" src="https://www.youtube.com/embed/y8hhBhjyrrg" frameborder="0"></iframe>
              <p>LCS Highlights ALL GAMES Week 7 Day 2 Spring 2020 - 100 vs IMT, FLY vs TSM, GG vs DIG, CLG vs EG Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis autem cumque in excepturi corporis, sint minus, adipisci dolor quod laboriosam veritatis qui optio enim, assumenda libero ut ullam sed.</p>
              <h2>Black Mesa</h2>
              <iframe class="video-frame" src="https://www.youtube.com/embed/WSLZfawK0Xk" frameborder="0"></iframe>
              <p>James Duggan reviews Tom Clancy's The Division 2: Warlords of New York expansion on PC. Also available on Xbox One and PlayStation 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis autem cumque in excepturi corporis, sint minus, adipisci dolor quod laboriosam veritatis qui optio enim, assumenda libero ut ullam sed.</p>
            </article>
		`
	}
}

let $show = document.querySelector('.show')

// A function that goes to the start of the show
let setFirstSlide = () => {
	
	let $slide = document.querySelector('.slide:first-child');
	// let $slide = document.querySelector('.slide:nth-child(1)');
	// let $slide = $show.querySelector(':first-child');
	// let $slide = $show.firstElementChild
	// let $slide = document.querySelectorAll('.slide')[0]

	$slide.classList.add('current');

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


// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyScroll()};

// Get the navbar
let $menu = document.getElementById("menu");

// Get the offset position of the navbar
let sticky = $menu.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyScroll() {
  if (window.pageYOffset >= sticky) {
    $menu.classList.add("sticky")
  } else {
    $menu.classList.remove("sticky");
  }
}




window.addEventListener('load', windowLoaded)
window.addEventListener('scroll', theStateOfTheInterface)
window.addEventListener('resize', theStateOfTheInterface)