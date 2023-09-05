// SHOW MENU
{
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
navToggle.addEventListener('click', () => { navMenu.classList.add('show-menu') })
navClose.addEventListener('click', () => { navMenu.classList.remove('show-menu') })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu')
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
	const header = document.getElementById('header')
	// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 50) header.classList.add('scroll-header');
	else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
	spaceBetween: 10,
	slidesPerview: 1,
	grabCursor: true,
	pagination: {
		el: ".swiper__pagination",
		clickable: true,
	},
	breakpoints: {
		512: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 50,
		},
	},
});

//SHOW SCROLL UP
{
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");
	if (this.scrollY >= 350) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll")
}
window.addEventListener('scroll', scrollUp)
}


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		} else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}

	})
}
window.addEventListener('scroll', scrollActive)

// SCROLL REVEAL ANIMATION
{
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	reset: true
})
sr.reveal(` .popular__container`)
}