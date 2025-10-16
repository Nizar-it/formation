// Smooth scroll for buttons
document.querySelectorAll('[data-scroll]').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const target = e.currentTarget.getAttribute('data-scroll');
    if (!target) return;
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Optional: reveal on scroll (simple)
const reveal = () => {
  document.querySelectorAll('.panel, .card').forEach((el) => {
    const rect = el.getBoundingClientRect();
    const visible = rect.top < window.innerHeight - 80;
    el.style.transform = visible ? 'none' : 'translateY(12px)';
    el.style.opacity = visible ? '1' : '0.85';
    el.style.transition = 'all .6s ease';
  });
};
reveal();
window.addEventListener('scroll', reveal, { passive: true });


