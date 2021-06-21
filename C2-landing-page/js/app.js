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

/**
* @description Scroll to anchor ID using scrollTO event
* @param {DOM.sectionElement} section - selected section
*/
const scrollToSection = (section) => {
    const sectionPosition = section.offsetTop - navbar__list.offsetHeight;
    window.scrollTo({
        top: sectionPosition ,
        behavior: 'smooth'
    })
}

/**
* @description Help Function EventListener 'click' NavBar
* @param {DOM.sectionElement} evt - EventListener
*/
const navClick = (evt) => {
    if (evt.target.nodeName === 'LI') {
        const sectionID = evt.target.getAttribute('data-sec');
        scrollToSection(document.getElementById(sectionID));
    }
}

/**
* @description Set Elements active
* @param {DOM.Element} sect - Element to set active
* @param {DOM.sectionElement} active_class - Class Name to set active
*/
const setActiveSection = (sect, active_class) => {
    const lastActive = document.querySelector('.'+ active_class);
    if (lastActive != null) {
        lastActive.classList.toggle(active_class);
    }
    sect.classList.toggle(active_class);
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

/**
* @description Build the navigation bar
*/
const buildNavMenu = () => {
    const fragment = document.createDocumentFragment();
    let n = 1;
    for (section of sections){
        const newList = document.createElement('li');
        newList.textContent = section.getAttribute('data-nav');
        newList.setAttribute ('data-sec', 'section' + n);
        n++;
        newList.classList.add('menu__link');
        fragment.appendChild(newList);
    }
    navBarElement.appendChild(fragment);
}

/**
* @description Check which section is active in viewport
*/
const checkActiveSection = () => {
    let sectionHeight = sections[0].getBoundingClientRect().height;
    for (section of sections) {
        if (Math.abs(section.getBoundingClientRect().top) < (sectionHeight/2)) {
            const activeNav = document.querySelector(`[data-sec = '${section.getAttribute('Id')}']`);
            setActiveSection(section, 'active__section');
            setActiveSection(activeNav, 'active__nav');
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 *
*/

buildNavMenu();

// Helping EventListeners

navBarElement.addEventListener('click', navClick);
window.addEventListener('scroll' , () => {
    setTimeout(checkActiveSection,500);
});
