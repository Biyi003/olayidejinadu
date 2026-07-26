// ============================================================
// Dr. Olayide Jinadu — script.js
// ============================================================

// Sticky header on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 60);
});

// Mobile menu toggle
const menuIcon = document.getElementById("menu-icon");
const navlist = document.querySelector(".navlist");
if (menuIcon && navlist) {
  menuIcon.addEventListener("click", () => {
    navlist.classList.toggle("active");
    menuIcon.classList.toggle("ri-menu-line");
    menuIcon.classList.toggle("ri-close-line");
  });
  navlist.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navlist.classList.remove("active");
      menuIcon.classList.add("ri-menu-line");
      menuIcon.classList.remove("ri-close-line");
    });
  });
}

// Typewriter effect
const words = ["a Medical Doctor", "an Entrepreneur", "an Author", "a Pastor"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const typewriter = document.querySelector(".typewriter");
  if (!typewriter) return;

  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typewriter.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1400);
      return;
    }
  } else {
    typewriter.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(type, isDeleting ? 60 : 110);
}
type();

// Theme toggle (dark / light)
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeIcon.classList.replace("ri-moon-line", "ri-sun-line");
}

themeIcon.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeIcon.classList.toggle("ri-moon-line", !isDark);
  themeIcon.classList.toggle("ri-sun-line", isDark);
});

// Newsletter form — placeholder handler
const newsletterBtn = document.querySelector(".newsletter button");
if (newsletterBtn) {
  newsletterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector(".newsletter input");
    if (input && input.value.trim()) {
      alert("Thanks for subscribing! (connect this to your email provider)");
      input.value = "";
    }
  });
}
