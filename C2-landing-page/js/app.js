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
        const sectionID = evt.target.getAttribute('data-sec');
        scrollToSection(document.getElementById(sectionID));
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNavMenu () {
    const fragment = document.createDocumentFragment();
    let n = 1;
    for (section of sections){
        const newList = document.createElement('li');
        newList.textContent = section.getAttribute('data-nav');
        newList.setAttribute ('data-sec', 'section' + n);
        n++;
        const rect = section.getBoundingClientRect();
        newList.classList.add('menu__link');
        fragment.appendChild(newList);
    }
    navBarElement.appendChild(fragment);
    navBarElement.addEventListener('click', navClick);
}

buildNavMenu();
// Add class 'active' to section when near top of viewport
function setActiveSection (sect) {
    const lastActive = document.querySelector('.active__section');
    lastActive.classList.toggle('active__section');
    sect.classList.toggle('active__section');
    console.log(sect);
}

function checkActiveSection() {
    let activeSection = {};
    let sectionHeight = sections[1].getBoundingClientRect().height;
    for (section of sections) {
        if (Math.abs(section.getBoundingClientRect().top) < (sectionHeight/2)) {
            setActiveSection(section);
        }
    }

}
window.addEventListener('scroll' ,function(e){
    setTimeout(checkActiveSection,1000);
});

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
