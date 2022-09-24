const mobMenuBtn = document.querySelector("#mobile-menu-btn");
const navBar = document.querySelector("#in-nav-links");

mobMenuBtn.addEventListener("click", () => {
    if(navBar.classList.contains("show")){
        navBar.classList.remove("show")
        navBar.classList.add("hide")
    } else if(navBar.classList.contains("hide")){
        navBar.classList.remove("hide")
        navBar.classList.add("show")
    }
})