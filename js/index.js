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



  const navBar = document.querySelector('.nav-bar');
  const nav = document.querySelector('.nav');
  
  document.addEventListener('scroll', () => {
    if (window.innerWidth > 992) {
      nav.style.transform = "translateY(" + window.scrollY + "px)";
    } else {
      nav.style.transform = "translateY(" + 0 + "px)";
    }
  })

  navBar.addEventListener('click', () => {
    if (nav.style.top == '0px') {
      nav.style.top = '-40rem';
    } else {
      nav.style.top = '0';
    }
    // nav.classList.toggle('nav-responsive');
  })
});

