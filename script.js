document.getElementById('year').textContent = new Date().getFullYear();

const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// podświetlenie aktywnej strony w menu
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) link.setAttribute('aria-current', 'page');
});

const form = document.getElementById('contactForm');
if (form) {
  const successBox = document.getElementById('formSuccess');
  form.addEventListener('submit', function (e) {
    if (form.action.includes('PLACEHOLDER')) {
      e.preventDefault();
      successBox.classList.add('show');
      successBox.textContent = 'To wersja demonstracyjna — po uruchomieniu strony formularz będzie wysyłał wiadomości bezpośrednio na Pana adres e-mail.';
      form.reset();
    }
  });
}
