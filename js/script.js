const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-linkss");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-image img",{
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header-content h1",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".section-description",{
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header-btn",{
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header-stats",{
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".about-image img",{
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".about-content .section-header",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about-content .section-description",{
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
});

ScrollReveal().reveal(".about-btn",{
    ...scrollRevealOption,
    delay: 2000,
});


ScrollReveal().reveal(".program-card",{
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".service-image img",{
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".service-content .section-header",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".service-list li",{
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
});

ScrollReveal().reveal(".service-btn",{
    ...scrollRevealOption,
    delay: 2500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});

