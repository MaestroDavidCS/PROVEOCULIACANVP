// Selecciona el botón de modo oscuro y claro
const themeToggle = document.getElementById('theme-toggle');

// Función para alternar entre modo oscuro y claro
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Cambiar el texto del botón según el modo
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = '✸';
  } else {
    themeToggle.textContent = '☾';
  }
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Alternar el menú al hacer clic en el botón
menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded); // Cambia el estado de accesibilidad
  menu.classList.toggle('show'); // Muestra/oculta el menú
});

// Cerrar el menú al hacer clic en un enlace
menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') { // Verifica si se hizo clic en un enlace
    menu.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  const totalItems = document.querySelectorAll('.carousel-item').length;
  currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : totalItems - 1;
  updateCarousel();
});

function updateCarousel() {
  const itemWidth = document.querySelector('.carousel-item').offsetWidth;
  carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}