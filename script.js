// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

// Form submission (just prevent default for demo)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully! (This is a demo form)");
    contactForm.reset();
  });
}

// Scroll to reveal animations
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  for (let i = 0; i < reveals.length; i++) {
    const revealTop = reveals[i].getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

// Scroll event for header change and reveal animations
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const backToTop = document.getElementById("backToTop");

  // Change header style on scroll
  if (window.scrollY > 100) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }

  // Show/hide back to top button
  if (window.scrollY > 700) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }

  // Trigger reveal animations
  reveal();
});

// Call reveal on page load
window.addEventListener("load", reveal);

// Add parallax effect to hero section
window.addEventListener("scroll", function () {
  const heroSection = document.querySelector(".hero");
  const scrollPosition = window.pageYOffset;

  if (scrollPosition <= heroSection.offsetHeight) {
    heroSection.style.backgroundPositionY = scrollPosition * 0.5 + "px";
  }
});

// Typing animation for hero section
document.addEventListener("DOMContentLoaded", function () {
  // Apply initial animations to hero content
  document.querySelector(".hero h1").classList.add("animate-fadeInUp");

  // Pre-load all animation classes
  const animatedElements = document.querySelectorAll(
    ".animate-fadeInUp, .animate-fadeInLeft, .animate-fadeInRight"
  );
  reveal();
});
