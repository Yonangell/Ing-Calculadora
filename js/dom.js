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
  operacionActual = operacionActual.toString().trim().slice(0, -1);
}

function agregarNumero(numero) {
  numero = numero.trim();
  if (numero === "." && operacionActual.includes(".")) return;
  operacionActual = operacionActual.toString() + numero.toString();
}

function escogerOperacion(seleccionarOperacion) {
  if (operacionActual === "") return;

  if (operacionAnterior !== "") {
    calcular();
  }

  operacion = seleccionarOperacion.trim();
  operacionAnterior = operacionActual;
  operacionActual = "";
}

function calcular() {
  let calculando;
  const anterior = parseFloat(operacionAnterior.toString().trim());
  const continuar = parseFloat(operacionActual.toString().trim());

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

  operacionActual = parseFloat(calculando.toFixed(8)).toString();
  operacion = undefined;
  operacionAnterior = "";
}

function actualizar() {
  function formatearNumero(numero) {
    const strNum = numero.toString();
    const digEnteros = parseFloat(strNum.split(".")[0]);
    const digDecimal = strNum.split(".")[1];
    let mostrarNumero;

    if (isNaN(digEnteros)) {
      mostrarNumero = "";
    } else {
      mostrarNumero = digEnteros.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    if (digDecimal != null) {
      return `${mostrarNumero}.${digDecimal}`;
    } else {
      return mostrarNumero;
    }
  }

  operacionActualTextoElemento.textContent = formatearNumero(operacionActual);

  if (operacion != null) {
    operacionAnteriorTextoElemento.textContent = `${formatearNumero(
      operacionAnterior
    )} ${operacion}`;
  } else {
    operacionAnteriorTextoElemento.textContent = "";
  }
}

numerosBtn.forEach((button) => {
  button.addEventListener("click", () => {
    agregarNumero(button.textContent);
    actualizar();
  });
});

operacionBtn.forEach((button) => {
  button.addEventListener("click", () => {
    escogerOperacion(button.textContent.trim());
    actualizar();
  });
});

igualBtn.addEventListener("click", (button) => {
  calcular();
  actualizar();
});

limpiarBtn.addEventListener("click", (button) => {
  limpiar();
  actualizar();
});

eliminarBtn.addEventListener("click", (button) => {
  eliminarNumero();
  actualizar();
});
