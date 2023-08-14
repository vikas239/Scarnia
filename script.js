const menu = document.querySelector(".header-right");
const menuBtn = document.querySelector("#menu-btn");
const menuBtn_icon = document.querySelector("#menu-btn i");

menuBtn.addEventListener('click', () => {
    if(menuBtn.classList.contains("active")){
        document.body.style.overflow = "visible";
        menu.classList.remove("show");
        menuBtn.classList.remove("active");
        menuBtn_icon.classList.remove("uil-multiply");
        menuBtn_icon.classList.add("uil-bars");
        return;
    }
    document.body.style.overflow = "hidden";
    menu.classList.add("show");
    menuBtn.classList.add("active");
    menuBtn_icon.classList.add("uil-multiply");
    menuBtn_icon.classList.remove("uil-bars");
});