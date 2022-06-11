// adds a class to an element, which is defined in CSS so it changes apperance 
let showMenu = element => {
    element.classList.toggle("change__shape");
}


// checks the state of the menu checkbox 
// and if needed unchecks it and returns menu icon to previous shape
let closeMenu = () => {
    let menuState = document.getElementById("menu-bar");
    if (menuState.checked) {
        menuState.checked = false;

        let xHamburger = document.getElementsByClassName("change__shape");
        if (xHamburger !== null) {
            xHamburger[0].classList.remove("change__shape");
        }
    }
}


let topButton = document.getElementById("top-button");

window.onscroll = function () { scrollFunction() };

// regulates display of the "go to top" button
// shows button when the users scrolls 20px from the page start 
let scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    }
    else {
        topButton.style.display = "none";
    }
}

let goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}