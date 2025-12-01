const numerosBtn = document.querySelectorAll("[data-number]");
const operacionBtn = document.querySelectorAll("[data-operation]");
const igualBtn = document.querySelector("[data-equals]");
const eliminarBtn = document.querySelector("[data-delete]");
const limpiarBtn = document.querySelector("[data-all-clear]");

const operacionAnteriorTextoElemento = document.querySelector(
  "[data-previous-operand]"
);
const operacionActualTextoElemento = document.querySelector(
  "[data-current-operand]"
);

let operacionActual = "";
let operacionAnterior = "";
let operacion = undefined;

function limpiar() {
  operacionActual = "";
  operacionAnterior = "";
  operacion = undefined;
}

function eliminarNumero() {
  
  operacionActual = operacionActual.toString().slice(0, -1);
  
}

function agregarNumero(numero) {
  if (numero === "." && operacionActual.includes(".")) return;
  operacionActual = operacionActual.toString() + numero.toString();
}

function escogerOperacion(seleccionarOperacion) {
  if (operacionActual === "") return;

  if (operacionActual !== "") {
    calcular();
  }

  operacion = seleccionarOperacion;
  operacionAnterior = operacionActual;
  operacionActual = "";
}

function calcular() {
  let calculando;
  const anterior = parseFloat(operacionAnterior);
  const continuar = parseFloat(operacionActual);

  if (isNaN(anterior) || isNaN(continuar)) return;
    
  switch (operacion) {
    case "+":
      calculando = anterior + continuar;
      break;
    case "-":
      calculando = anterior - continuar;
      break;
    case "*":
      calculando = anterior * continuar;
      break;
    case "/":
      calculando = anterior / continuar;
      break;

    default:
      return;
  }

  operacionActual = calculando;
  operacion = undefined;
  operacionAnterior = "";
}

function actualizar() {
  operacionActualTextoElemento.textContent = operacionActual;

  if (operacion != null) {
    operacionAnteriorTextoElemento.textContent =
      +operacionAnterior + " " + operacion;
  } else {
    operacionAnteriorTextoElemento.textContent = "";
  }
}

numerosBtn.forEach(button => {
  button.addEventListener("click", () => {
    agregarNumero(button.textContent);
    actualizar();
  });
});

operacionBtn.forEach(button => {
  button.addEventListener("click", () => {
    escogerOperacion(button.textContent);
    actualizar();
  });
});

igualBtn.addEventListener("click", button => {
  calcular();
  actualizar();
});

limpiarBtn.addEventListener("click", button => {
  limpiar();
  actualizar();
});

eliminarBtn.addEventListener("click", button => {
  eliminarNumero();
  actualizar();
});


