// main.js
// Phase 2: scroll-linked hero fade + any future interactions

// ============================================
// SCROLL FADE — homepage name
// ============================================

// We only run this on the homepage, where .hero-name exists.
// If the element doesn't exist (other pages), we skip quietly.
const heroName = document.querySelector('.hero-name');

if (heroName) {
  // This function runs every time the user scrolls
  function handleScroll() {
    // scrollY = how many pixels from the top the user has scrolled
    const scrollY = window.scrollY;

    // fadeStart: how many px scrolled before fade begins
    // fadeEnd: how many px scrolled before name is fully transparent
    const fadeStart = 50;
    const fadeEnd = 400;

    // Map scrollY to a 0-1 opacity value:
    // - If scrollY <= fadeStart: opacity is 1 (fully solid)
    // - If scrollY >= fadeEnd: opacity is 0 (fully transparent)
    // - In between: smooth transition
    const opacity = 1 - Math.min(
      Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0),
      1
    );

    // Apply the calculated opacity to the name element
    heroName.style.opacity = opacity;
  }

  // Tell the browser to call handleScroll every time the user scrolls
  window.addEventListener('scroll', handleScroll);

  // Run once on load in case the page is loaded mid-scroll
  handleScroll();
}

// ============================================
// FUTURE INTERACTIONS GO BELOW HERE
// ============================================
console.log('main.js loaded');