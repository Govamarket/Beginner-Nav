const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const body = document.body;

// Menu toggle
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Toggle button text between ☰ and X
  if (navLinks.classList.contains("active")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});

// Dark mode toggle
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Update button icon
  if (body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    darkModeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// Load saved theme preference
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";
  } else {
    darkModeToggle.textContent = "🌙";
  }
});
