const navBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-links");

navBtn.addEventListener("click", () => {
  // navLinks.classList.add("activated");
  const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded"));
  navBtn.setAttribute("aria-expanded", !isExpanded);
  !isExpanded && nav.classList.add("active");
});

window.addEventListener("DOMContentLoaded", () => {
  navLinks.classList.add("activated");
});
