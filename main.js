(()=>{"use strict";const n=function(){const n=document.createElement("home");return n.innerHTML='\n        <div class="home-container main-container">\n            <div class="home-container">\n                <h1>Fiery Ribs</h1>\n                <h2>Try our signature ribs today</h2>\n            </div>\n        </div>\n    ',n.classList.add("main-container"),n},e=document.querySelector(".content");console.log(e),e.appendChild(function(){const n=document.createElement("header");return n.innerHTML='\n        <h1>Rayyan\'s Ribs</h1>\n        <ul class="header-container">\n                <li id="home" class="tab">Home</li>\n                <li id="menu" class="tab">Menu</li>\n                <li id="contact" class="tab">Contact</li>\n        </ul>\n    ',n}()),e.appendChild(n()),document.querySelectorAll(".tab").forEach((i=>i.addEventListener("click",(t=>{e.querySelector(".main-container").remove(),"home"==i.id?e.appendChild(n()):"menu"==i.id?e.appendChild(function(){const n=document.createElement("menu");return n.innerHTML='\n        <div class="menu-container main-container">\n            <h1 class="menu-title">MENU</h1>\n            <ul class="menu-section">\n                <li>Ribs</li>\n                <li>Spicy Ribs</li>\n                <li>Salty Ribs</li>\n                <li>Large ribs</li>\n            </ul>\n            <ul class="menu-section">\n                <li>Sides</li>\n                <li>Corn</li>\n                <li>Potatoes</li>\n            </ul>\n            <ul class="menu-section">\n                <li>Deserts</li>\n                <li>Sweet Ribs</li>\n                <li>Vanilla Ice Cream</li>\n                <li>Churros</li>\n            </ul>\n        </div>\n    ',n.classList.add("main-container"),n}()):"contact"==i.id&&e.appendChild(function(){const n=document.createElement("contact");return n.innerHTML='\n        <div class="contact-container">\n            <h1>Built by Rayyan Shaik</h1>\n        </div>\n    ',n.classList.add("main-container"),n}()),console.log(i)}))))})();