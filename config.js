let bodyElement = document.getElementsByTagName("body")[0];
let smNavCont = document.getElementsByClassName("sm-nav-container")[0];
let bgNavCont = document.getElementsByClassName("bg-nav-container")[0];
let logoTitleElems=document.querySelectorAll(".logo-title");

let profilePicEle=document.getElementsByClassName("profile-pic")[0];


let getStartedBut=document.getElementById("getStarted-button");
let getStartedText=document.getElementById("getstarted-link");
let navElement = document.getElementById("sm-nav-links");
// console.log(navElement);
navElement.style.display="none";
let isNavbarClicked = false;
let navbarIconElement = document.querySelectorAll(".nav-icon-button");
// console.log(navbarIconElement);
let navIconElements=document.querySelectorAll('#sectionHome,#sectionEducation,#sectionProjects,#sectionCertificate,#sectionContact');

let brElement = document.getElementsByTagName("br");
let brightElement = document.getElementsByClassName("bgt-icon");

let hrElements=document.getElementsByTagName("hr");


let containerElems=document.querySelectorAll('.intro-container,.degree-cont,.inter-cont,.ssc-cont,.todo-container,.covid-container,.jobby-container,.bookhub-container,.mta-python,.cybersecurity-intro,.cybersecurity-essentials,.cyberops-associate');


let projectImgEle=document.querySelectorAll('#todo-img,#covid-img,#jobby-img,#bookhub-img');

let techStackHeading=document.getElementsByClassName('tech-stack-heading');

let contactIconEle=document.querySelectorAll('.insta-cont,.whatsapp-cont,.gmail-cont,.insta-icon,.whatsapp-icon,.gmail-icon');


function darkLightMode() {
    let isDarkMode = localStorage.getItem("isDarkMode")==="true";

    isDarkMode = !isDarkMode;
    localStorage.setItem("isDarkMode", isDarkMode.toString());
    const darkLightButEle = document.querySelectorAll("#dark-light-button");

    darkLightButEle.forEach(button => {
        button.innerHTML = isDarkMode
            ? `<svg class="w-[48px] h-[48px] text-gray-800 bgt-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
            </svg>`
            : `<i class="fa-solid fa-moon bgt-icon"></i>`;
    });

    // Update theme colors
    bodyElement.style.backgroundColor = isDarkMode ? "black" : "white";
    bodyElement.style.color = isDarkMode ? "white" : "black";

    smNavCont.style.backgroundColor= isDarkMode?"dimgray":"whitesmoke";
    bgNavCont.style.backgroundColor= isDarkMode?"dimgray":"whitesmoke";

    getStartedBut.style.color = isDarkMode ? "white" : "black";
    getStartedText.style.color = isDarkMode ? "white" : "black";
    getStartedBut.style.borderColor = isDarkMode ? "white" : "black";
    getStartedBut.style.boxShadow = isDarkMode ? "3px 5px solid white" : "3px 5px solid black";

    for (let l = 0; l < logoTitleElems.length; l++) {
        logoTitleElems[l].style.color = isDarkMode ? "white" : "black";
    }

    for (let i = 0; i < brightElement.length; i++) {
        brightElement[i].style.color = isDarkMode ? "white" : "black";
    }

    navbarIconElement.forEach(elem => elem.style.color = isDarkMode ? "white" : "black");

    for (let j = 0; j < navIconElements.length; j++) {
        navIconElements[j].style.color = isDarkMode ? "white" : "black";
    }

    for (let k = 0; k < hrElements.length; k++) {
        hrElements[k].style.color = isDarkMode ? "white" : "black";
        hrElements[k].style.borderWidth = "2px";
    }

    for (let e = 0; e < containerElems.length; e++) {
        containerElems[e].style.borderColor = isDarkMode ? "white" : "black";
    }

    for (let p = 0; p < projectImgEle.length; p++) {
        projectImgEle[p].style.borderBottom = `2px solid ${isDarkMode ? "white" : "black"}`;
    }

    techStackHeading[0].style.borderRight = `2px solid ${isDarkMode ? "white" : "black"}`;

    for (let r = 0; r < contactIconEle.length; r++) {
        contactIconEle[r].style.color = isDarkMode ? "white" : "black";
    }

    // Update the navbar icon color
    navBtnEle.innerHTML = isNavbarClicked
        ? `<i class="fa-solid fa-xmark nav-icon-button" style="color: ${isDarkMode ? 'white' : 'black'}"></i>`
        : `<i class="fa-solid fa-bars nav-icon-button" style="color: ${isDarkMode ? 'white' : 'black'}"></i>`;
}










let navBtnEle=document.getElementsByClassName("nav-button")[0];
function navbarIconClick() {
    isNavbarClicked = !isNavbarClicked;
    navElement.style.display = isNavbarClicked ? "inline-block" : "none";
    navBtnEle.innerHTML= isNavbarClicked ?  `<i class="fa-solid fa-xmark nav-icon-button" style="color: ${isDarkMode ? 'white' : 'black'}"></i>` : 
    `<i class="fa-solid fa-bars nav-icon-button" style="color: ${isDarkMode ? 'white' : 'black'}"></i>`;
}


