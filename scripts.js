const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(menu.classList.contains('open')));
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => menu.classList.remove('open')));
}
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = form.querySelector('.submit-msg');
    if (msg) msg.hidden = false;
    form.reset();
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
