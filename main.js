const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener('click', (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}

ScrollReveal().reveal(".header__content h4", { 
  ...scrollRevealOption,
  duration: 1200,
});

ScrollReveal().reveal(".header__content h1", { 
  ...scrollRevealOption,
  duration: 1500,
});

ScrollReveal().reveal(".header__content h2", { 
  ...scrollRevealOption,
  duration: 1400,
});

ScrollReveal().reveal(".header__content p", { 
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__btn", { 
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".intro__card", { 
  ...scrollRevealOption,
  interval: 800,
});

ScrollReveal().reveal(
  ".about__row:nth-child(3) .about__image img, .about__row:nth-child(5) .about__image img",
  {
    ...scrollRevealOption,
    origin: "left",
  }
);
ScrollReveal().reveal(".about__row:nth-child(4) .about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__content span", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});

ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
  origin: "left",
});

ScrollReveal().reveal(".section__subheader-service, ", {
  ...scrollRevealOption,
  delay: 1200,
  origin: "right",
});

ScrollReveal().reveal(".instagramm__grid img", {
  ...scrollRevealOption,
  delay: 1200,
  interval:300,
  origin: "right",
});