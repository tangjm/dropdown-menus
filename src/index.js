import styles from "./index.css"

const dropDownMenuClick = document.querySelector(".drop-down-menu.menu-click");
const dropDownMenuHover = document.querySelector(".drop-down-menu.menu-hover");
const dropDownMenuHover2 = document.querySelector(
  ".drop-down-menu.menu-hover-2"
);
const accordian = document.querySelector(".accordian");
const accordianSingleActiveClick = document.querySelector(
  ".accordian-single-active.click"
);
const accordianSingleActiveHover = document.querySelector(
  ".accordian-single-active.hover"
);

/**
 * The drop-down list must immediately follow the interactive menu.
 * @param {Element} interativeMenu
 */
function toggleDropDownMenu(interactiveMenu) {
  const itemList = interactiveMenu.nextElementSibling;
  interactiveMenu.classList.toggle("menu-active");
  itemList.classList.toggle("items-visible");
}

// click drop-down menu
dropDownMenuClick.firstElementChild.addEventListener("click", (e) => {
  toggleDropDownMenu(e.target);
});
// hover drop-down menu
dropDownMenuHover.firstElementChild.addEventListener("mouseenter", (e) => {
  toggleDropDownMenu(e.target);
});
dropDownMenuHover.firstElementChild.addEventListener("mouseleave", (e) => {
  toggleDropDownMenu(e.target);
});

// hover drop-down menu 2
dropDownMenuHover2.firstElementChild.addEventListener("mouseenter", (e) => {
  toggleDropDownMenu(e.target);
});
dropDownMenuHover2.addEventListener("mouseleave", (e) => {
  const children = Array.from(dropDownMenuHover2.children);
  for (const child of children) {
    if (child.classList.contains("items-visible")) {
      child.classList.remove("items-visible");
    }
    if (child.classList.contains("menu-active")) {
      child.classList.remove("menu-active");
    }
  }
});

// basic accordian
Array.from(accordian.children).forEach((part) => {
  const menu = part.firstElementChild;
  menu.addEventListener("click", (e) => {
    toggleDropDownMenu(e.target);
  });
});

// accordian (restricted to only one active menu at any time)
const accordianChildrenClick = Array.from(accordianSingleActiveClick.children);
accordianChildrenClick.forEach((child) => {
  const menu = child.firstElementChild;
  menu.addEventListener("click", (e) => {
    accordianChildrenClick
      .filter((m) => m.firstElementChild !== menu)
      .forEach((m) => {
        m.firstElementChild.classList.remove("menu-active");
        m.firstElementChild.nextElementSibling.classList.remove(
          "items-visible"
        );
      });
    toggleDropDownMenu(e.target);
  });
});

// accordian (restricted to only one active menu at any time)
const accordianChildrenHover = Array.from(accordianSingleActiveHover.children);
accordianChildrenHover.forEach((child) => {
  const menu = child.firstElementChild;
  menu.addEventListener("mouseenter", (e) => {
    toggleDropDownMenu(e.target);
  });
  menu.addEventListener("mouseleave", (e) => {
    toggleDropDownMenu(e.target);
  });
});