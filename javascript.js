let header = document.querySelector(".navBar");
let nav0 = header.querySelector(".nav0");
let nav1 = header.querySelector(".nav1");
let nav2 = header.querySelector(".nav2");
let nav3 = header.querySelector(".nav3");

nav0.addEventListener("click", (e) => {
    nav0.classList.add("active");
    nav1.classList.remove("active");
    nav2.classList.remove("active");
    nav3.classList.remove("active");
});
nav1.addEventListener("click", (e) => {
    nav0.classList.remove("active");
    nav1.classList.add("active");
    nav2.classList.remove("active");
    nav3.classList.remove("active");
});
nav2.addEventListener("click", (e) => {
    nav0.classList.remove("active");
    nav1.classList.remove("active");
    nav2.classList.add("active");
    nav3.classList.remove("active");
});
nav3.addEventListener("click", (e) => {
    nav0.classList.remove("active");
    nav1.classList.remove("active");
    nav2.classList.remove("active");
    nav3.classList.add("active");
});