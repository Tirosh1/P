document.addEventListener('DOMContentLoaded', function () {
  const heroContent = document.querySelector('.content');
  heroContent.style.opacity = 0;
  heroContent.style.transform = 'translateY(-50px)';

  setTimeout(() => {
    heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
    heroContent.style.opacity = 1;
    heroContent.style.transform = 'translateY(0)';
  }, 100);
});
