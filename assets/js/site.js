(() => {
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('#primary-nav');

  if (!button || !nav) return;

  const closeMenu = () => {
    nav.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  };

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });

  nav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
})();
