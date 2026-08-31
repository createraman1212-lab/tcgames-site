(() => {
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('#primary-nav');
  if (!button || !nav) return;
  const close = (returnFocus = false) => {
    nav.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.querySelector('.sr-only').textContent = 'Open navigation';
    if (returnFocus) button.focus();
  };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.querySelector('.sr-only').textContent = open ? 'Close navigation' : 'Open navigation';
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('is-open')) close(true); });
  document.addEventListener('click', event => { if (nav.classList.contains('is-open') && !nav.contains(event.target) && !button.contains(event.target)) close(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) close(); });
})();
