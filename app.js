const mobMenuBtn = document.querySelector("#mobile-menu-btn");
const navBar = document.querySelector("#in-nav-links");
const mobMenuBtnClose = document.querySelector("#mobile-menu-close")

mobMenuBtn.addEventListener("click", () => {
    if(navBar.classList.contains("hide")){
        navBar.classList.remove("hide")
        navBar.classList.add("show")
    }
})

mobMenuBtnClose.addEventListener("click", () => {
    if(navBar.classList.contains("show")){
        navBar.classList.remove("show")
        navBar.classList.add("hide")
    }
})