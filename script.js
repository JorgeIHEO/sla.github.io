// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Intersection animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.pilar, .proj, .bio-card').forEach(el => observer.observe(el));

// Nav effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if(window.scrollY > 40){
    nav.style.background = "rgba(240,238,233,0.98)";
    nav.style.backdropFilter = "blur(16px)";
  } else {
    nav.style.background = "rgba(240,238,233,0.97)";
  }
});

// Basic form handler
const form = document.querySelector('form');
if(form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert("Mensaje enviado correctamente");
    form.reset();
  });
}
