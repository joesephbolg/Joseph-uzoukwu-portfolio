// Scroll reveal using IntersectionObserver
const revealEls = document.querySelectorAll('.reveal');

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target); // stop observing once revealed
      }
    });
  }, { threshold: 0.18 });

  revealEls.forEach(el => io.observe(el));
} else {
  // fallback for older browsers
  revealEls.forEach(el => el.classList.add('visible'));
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Zion Holdings link (single source of truth)
const zionLink = document.getElementById('zion-link');
if (zionLink) {
  zionLink.href = 'https://joesephbolg.github.io/zionholdings/';
}
