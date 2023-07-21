import createHeader from "./header";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

const mainContent = document.querySelector(".content");

console.log(mainContent)

// render whole layout
mainContent.appendChild(createHeader());
mainContent.appendChild(createHome());


const navigationTabs = document.querySelectorAll(".tab");

// add event listener to each tab
navigationTabs.forEach(tab => tab.addEventListener("click", (event) => {
    /*
    // remove main html tag from page and append new node after first hr tag
    if (event.target.htmlFor === "tab-1" && !document.querySelector("section").classList.contains("home")) {
        document.querySelector("main").remove();
        document.querySelector("hr").after(createHome());
    } else if (event.target.htmlFor === "tab-2" && !document.querySelector("section").classList.contains("menu")) {
        document.querySelector("main").remove();
        document.querySelector("hr").after(createMenu());
    } else if (event.target.htmlFor === "tab-3" && !document.querySelector("section").classList.contains("contact")) {
        document.querySelector("main").remove();
        document.querySelector("hr").after(createContact());
    }
    */

    mainContent.querySelector(".main-container").remove();
    if (tab.id == "home") {
        mainContent.appendChild(createHome());
    } else if (tab.id == "menu") {
        mainContent.appendChild(createMenu());
    } else if (tab.id == "contact") {
        mainContent.appendChild(createContact());
    }

    console.log(tab)
}))