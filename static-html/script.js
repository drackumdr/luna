const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const thanksMessage = document.getElementById('thanksMessage');

navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

window.addEventListener('scroll', () => {
    const showButton = window.scrollY > 400;
    backToTop.style.display = showButton ? 'grid' : 'none';
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll('.fade-on-scroll').forEach((section) => {
    observer.observe(section);
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    contactForm.reset();
    thanksMessage.classList.remove('hidden');
    contactForm.querySelectorAll('input, textarea, select').forEach((el) => {
        el.disabled = true;
    });
});
