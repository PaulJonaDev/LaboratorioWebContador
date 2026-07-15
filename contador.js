
const contadorVisual = document.getElementById('contador');
const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');

//  la variable cotandora
let cuenta = 0;


function actualizarPantalla() {
  contadorVisual.textContent = cuenta;

  // Si llega a 10 cambia de color
  if (cuenta >= 10) {
    contadorVisual.className = "hot";
  } else {
    contadorVisual.className = "normal";
  }
}


btnSumar.addEventListener("click", function () {
    cuenta++;
    actualizarPantalla();
});

btnRestar.addEventListener("click", function () {
    cuenta--;
    actualizarPantalla();
});

