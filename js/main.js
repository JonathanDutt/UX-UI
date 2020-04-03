

let theStateOfTheInterface = (event) => { 
  
	let winH = document.documentElement.clientHeight
	let docH = document.documentElement.scrollHeight
	let winY = window.scrollY
	let maxY = docH - winH


let allSections = '' 


document.querySelectorAll('section').forEach(($sec) => {

let secH = $sec.scrollHeight  
let topPx = $sec.offsetTop  
let botPx = topPx + secH    

let seenThese = ''  


if (winY >= topPx && winY < botPx) {
seenThese = 'class="seen"' 
}


allSections += `<li ${seenThese}><a href="${$sec.querySelector('h1').textContent}">${ $sec.querySelector('h1').textContent }</a></li>`
})


document.querySelector('.panel').innerHTML = allSections
	if (winY >= maxY) {
	
	  document.querySelector('#main').innerHTML += `
	  <section>
	  <h1 class="title">Where are you going??</h1>
		<div>
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
		</div>
   </section>`
	}
}

let $show = document.querySelector('.show')


let setFirstSlide = () => {
	
	let $slide = document.querySelector('.slide:first-child');


	$slide.classList.add('current');

}


let setLastSlide = () => {
	let $slide = document.querySelector('.slide:Last-child');
	$slide.classList.add('current');
}


let unsetSlides = () => {

}


let prevSlide = () => {
		let $last = document.querySelector('.current')

		$last.classList.remove('current')
	
		let $prev = $prev.previousElementSibling
	
		if ($prev != null) {
			$prev.classList.add('current')
		} else {
			setLastSlide()
		}
}


let nextSlide = () => {

	let $curr = document.querySelector('.current')


	$curr.classList.remove('current')

	let $next = $curr.nextElementSibling 

	if ($next != null) {
		$next.classList.add('current')
	} else {
		setFirstSlide()
	}
}


let windowLoaded = () => {
	setFirstSlide()


	let $nextBtn = document.querySelector('#next')
	$nextBtn.addEventListener('click', nextSlide)
	let $prevBtn = document.querySelector('#prev')
	$prevBtn.addEventListener('click', prevSlide)

}



window.addEventListener('load', windowLoaded)


window.onscroll = function() {stickyScroll()};


let $menu = document.getElementById("menu");


let sticky = $menu.offsetTop;


function stickyScroll() {
  if (window.pageYOffset >= sticky) {
    $menu.classList.add("sticky")
  } else {
    $menu.classList.remove("sticky");
  }
}





window.addEventListener('scroll', theStateOfTheInterface)
window.addEventListener('resize', theStateOfTheInterface)