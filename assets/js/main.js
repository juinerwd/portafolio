const botonNav = document.getElementById("mostrarMenu");
const cerrarNav = document.querySelector(".btnclose");
botonNav.addEventListener('click', function(){
  document.getElementById("Navegacion").classList.toggle('mostrarNav');
});
cerrarNav.addEventListener('click', function(){
  document.getElementById("Navegacion").classList.toggle('mostrarNav');
});

window.onscroll = function() {
    scrollFunction()
  };
function scrollFunction() {
    if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("Header").style.height = "50px";
      document.getElementById("Header").style.backgroundColor = "#333333";
      document.getElementById("menu").style.color = "#fff";
      document.getElementById("logo1").style.display = "none";
      document.getElementById("logo2").style.display = "block";
      
    } else {
      document.getElementById("Header").style.height = "80px";
      document.getElementById("Header").style.backgroundColor = "transparent";
      document.getElementById("menu").style.color = "#fff";
      document.getElementById("logo1").style.display = "block";
      document.getElementById("logo2").style.display = "none";
      
    }
  }
const typed = new Typed('.typed', {
    /* strings: [
        '<i class="stack">Diseño</i>',
        '<i class="stack">Fotografía</i>',
        '<i class="stack">CSS3</i>',
        '<i class="stack">JAVASCRIPT</i>'
    ], */
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // Velocidad en milisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});

/*  */
window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel-lista'), {
        slidesToShow: 1,
        dots: '.carousel-indicadores',
        arrows: {
            prev: '.carousel-anterior',
            next: '.carousel-siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 800,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            }
          ]
    });
});