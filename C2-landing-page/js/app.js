/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const navBarElement = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function scrollToSection(section) {
    const sectionPosition = section.offsetTop - navbar__list.offsetHeight;
    console.log(sectionPosition);
    window.scrollTo({
        top: sectionPosition ,
        behavior: 'smooth'
    })
}

function navClick (evt) {
    if (evt.target.nodeName === 'LI') {  // ← verifies target is desired element
        // scrollToSection(document.queryselector(evt.target.);
        const sectionID = '#' + evt.target.textContent.toLowerCase();
        scrollToSection(document.querySelector(sectionID));
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
const fragment = document.createDocumentFragment();
for (section of sections){
    const newList = document.createElement('li');
    newList.textContent = section.getAttribute('data-nav');
    const rect = section.getBoundingClientRect();
    console.log(rect.top);
    newList.classList.add('menu__link');
    fragment.appendChild(newList);
}

navBarElement.appendChild(fragment);
navBarElement.addEventListener('click', navClick);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active

// Helping EventListeners
// document.addEventListener('click', function() {
//
//     scrollToSection(sections[1]);
//
// })
