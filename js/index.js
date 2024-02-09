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



  // Nav responsive
  const navBar = document.querySelector('.nav-bar');
  const nav = document.querySelector('.nav');
  var screenWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  document.addEventListener('scroll', () => {
    if (window.innerWidth > 992) {
      nav.style.transform = "translateY(" + window.scrollY + "px)";
    } else {
      nav.style.transform = "translateY(" + 0 + "px)";
    }
  });

  navBar.addEventListener('click', () => {
    if (nav.style.top == '0px') {
      nav.style.top = '-40rem';
    } else {
      nav.style.top = '0';
    }
  })

  window.addEventListener('resize', () => {
    screenWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWindow > 992) {
      nav.style.top = '0px';
    }
  });


  // Links smooth
  var smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      var targetId = link.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  var portalCard = document.querySelector('.card-portal');
  const payTicket = document.querySelectorAll('.payTicket');
  const payClose = document.querySelector('.card-portal--close');
  const bgBlackPay = document.querySelector('.bg-black-pay');

  payTicket.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();

      portalCard.style.opacity = '1';
      portalCard.style.top = '10rem';
      bgBlackPay.style.opacity = '1';
      bgBlackPay.style.zIndex = '200';

    })
  })
  payClose.addEventListener('click', () => {
      portalCard.style.opacity = '0';
      portalCard.style.top = '-100rem';
      bgBlackPay.style.opacity = '0';
      bgBlackPay.style.zIndex = '-20';
  })

});

