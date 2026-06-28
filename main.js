const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  console.log("HELLO WORLD");
  navLinks.classList.toggle("active");
});
