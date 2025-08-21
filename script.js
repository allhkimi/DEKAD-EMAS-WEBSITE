// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');
if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    primaryNav.style.display = expanded ? 'none' : 'flex';
  });
}

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form friendly fallback (works even without Formspree)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    // If Formspree ID not replaced, prevent navigation and show toast
    const usingPlaceholder = form.action.includes('your-id');
    if (usingPlaceholder) {
      e.preventDefault();
      alert('Thanks! Your message was not sent because the form endpoint is a placeholder. Replace the Formspree action URL to enable submissions.');
    }
  });
}

// Smooth scroll focus handling for accessibility
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
});
