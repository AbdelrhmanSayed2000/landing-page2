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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * 3 Global Variables with fragment to be continer
 */

let sections = document.querySelectorAll("section");
const list = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();

/**
 * Function to make nav bar visible, do it by section (id) and the dataset of the section
 * and i use the menu link becuse it's the class whom you use in css
 * and add the event listener with the argument (event) to have scroll over section with smooth
 */
function createList1() {
  for (let section of sections) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a class='menu__link' href='#${section.id}' > ${section.dataset.nav} </a>`;
    listItem.addEventListener("click", function (event) {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    });
    fragment.appendChild(listItem);
  }
  list.appendChild(fragment);
}
createList1();

/**
 * create a function to make the active class visiable
 * I use  getBoundingClientRect and classList methods
 */
function activeSection() {
  for (let section of sections) {
    let dimansion = section.getBoundingClientRect();
    if (dimansion.top < 200 && dimansion.top > -300) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  }
}
window.addEventListener("scroll", activeSection);
