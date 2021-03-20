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
const entries = document.querySelectorAll("section");

entries.forEach(function(section) {
    const navLi = document.createElement("li")

    const anchor = document.createElement("a");
    anchor.className = "menu__link";
    anchor.setAttribute("href", `#${section.id}`);
    anchor.innerText = section.getAttribute("data-nav");
    anchor.addEventListener("click", scrollToSection);

    navLi.appendChild(anchor);
    fragment.appendChild(navLi);
})
navList.appendChild(fragment);

function scrollToSection(event) {
    event.preventDefault();

    const sectionId = this.getAttribute("href");
    const sectionElement = document.querySelector(sectionId);
    sectionElement.scrollIntoView({ block: "center", behavior: "smooth" });
    // console.log(event);
}
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
if (!!window.IntersectionObserver) {

    let observer = new IntersectionObserver(function(entries, observer) {

        entries.forEach(function(section) {

            if (section.isIntersecting) {

                section.target.className = "your-active-class";


                //ToDo Add active nav
                const sectionId = section.target.id;

                // observer.unobserve(section.target);
            } else {
                section.target.className = "";
            }
        });

    });


    document.querySelectorAll('section').forEach(section => { observer.observe(section) });
}

// else document.querySelector('#warning').style.display = 'block';






window.addEventListener("scroll", () => {



    // entries.forEach((sec) => {
    //     const rect = sec.getBoundingClientRect();

    //     if (rect.top >= -1000 && rect.top <= 1200) {
    //         entries.forEach((remove) => {
    //             remove.style.background = "green";
    //         })
    //     }

    //     sec.style.background = "gray";

    // })
});






// window.addEventListener("scroll", toggleActiveState);

// function toggleActiveState(event) {
//     entries.forEach(function() {
//         // entries.className.remove("your-active-class");
//         // navList.classList.remove()
//         console.log(event);
//     })
// }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
if (!!window.IntersectionObserver) {}


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set entries as active