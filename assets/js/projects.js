// joyy_dev - Projects Filter & Interactive Controls
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.projects-filter__btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter') || 'all';

        filterButtons.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        projectCards.forEach((card) => {
          const category = card.getAttribute('data-category') || '';
          if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});
