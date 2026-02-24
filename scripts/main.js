// main.js

// ============================================
// SCROLL FADE — fades the hero-inner block
// (name + tagline together) as user scrolls
// ============================================
const heroInner = document.querySelector('.hero-inner');

if (heroInner) {
  function handleScroll() {
    const scrollY = window.scrollY;
    const fadeStart = 60;
    const fadeEnd = 380;

    const opacity = 1 - Math.min(
      Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0),
      1
    );

    heroInner.style.opacity = opacity;
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

// ============================================
// ACTIVE NAV LINK — highlights the nav link
// for whichever section is currently in view
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let currentSection = '';

  sections.forEach(section => {
    // If the top of the section has scrolled past 40% of the viewport
    const sectionTop = section.offsetTop - window.innerHeight * 0.4;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

console.log('main.js loaded');