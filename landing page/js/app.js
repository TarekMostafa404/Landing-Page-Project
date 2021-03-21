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

const navList = document.querySelector("#navbar__list");
const fragment = document.createDocumentFragment();
const sectionElement = document.querySelectorAll("section");


// build the nav

sectionElement.forEach(function(section) {
    const navLi = document.createElement("li");

    const anchor = document.createElement("a");
    anchor.className = "menu__link";
    anchor.setAttribute("href", `#${section.id}`);
    anchor.innerText = section.getAttribute("data-nav");
    anchor.addEventListener("click", scrollToSection);

    navLi.appendChild(anchor);

    fragment.appendChild(navLi);
});

navList.appendChild(fragment);


// Scroll to section on link click

function scrollToSection(event) {
    event.preventDefault();

    const sectionId = this.getAttribute("href");

    const sectionElement = document.querySelector(sectionId);
    sectionElement.scrollIntoView({ block: "center", behavior: "smooth" });
}


// Add class 'active' to section when near top of viewport

if (!!window.IntersectionObserver) {

    let observer = new IntersectionObserver(function(sectionElement, observer) {
        sectionElement.forEach(function(section) {
            if (section.isIntersecting) {
                section.target.className = "your-active-class";
            } else {
                section.target.className = "";
            }
        });
    });

    document.querySelectorAll("section").forEach(function(section) {
        observer.observe(section);
    });
}