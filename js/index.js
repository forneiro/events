document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  let counter = 1; // Se crea un contador

  function nextSlide() {
    for (let i = 0; i < slider.children.length; i++) {
      slider.children[i].style.display = 'none'; // Le agrega un display: none; a todas las imagenes
    }
    if (counter > slider.children.length) {
      counter = 1;
    }
    slider.children[counter - 1].style.display = "block";
    counter++;
  }

  // Cambia a la siguiente imagen cada 3 segundos (3000 milisegundos)
  setInterval(nextSlide, 4000);
});

