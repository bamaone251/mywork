// Best-effort "is it up" indicator on each card.
// Uses no-cors mode, so we can only tell if the request didn't outright fail —
// good enough for a quiet status dot, not a monitoring system.

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card[href]');

  cards.forEach((card) => {
    const dot = card.querySelector('[data-status]');
    if (!dot) return;

    const url = card.getAttribute('href');

    fetch(url, { mode: 'no-cors', cache: 'no-store' })
      .then(() => dot.classList.add('up'))
      .catch(() => dot.classList.add('down'));
  });
});
