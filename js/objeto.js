class Calcular {
  constructor(nume1, nume2) {
    this.nume1 = parseFloat(nume1);
    this.nume2 = parseFloat(nume2);
  }

  sumar() {
    return this.nume1 + this.nume2;
  }

  resta() {
    return this.nume1 - this.nume2;
  }

  multiplicar() {
    return this.nume1 * this.nume2;
  }

  dividir() {
    if (this.nume2 === 0) {
      return "No se puede divir entre 0";
    }

    return this.nume1 / this.nume2;
  }

  modulo() {
    return (this.nume1 % this.nume2) / 100;
  }
}

function calcularOperacion() {
  let entrada1 = document.getElementById("num1").value;
  let entrada2 = document.getElementById("num2").value;
  let operador = document.getElementById("operador").value;
  let mostraResultado = document.getElementById("resultado");

  // Trim inputs and check which value is missing
  entrada1 = entrada1.trim();
  entrada2 = entrada2.trim();

  if (entrada1 === "" && entrada2 === "") {
    mostraResultado.textContent = "Debes ingresar ambos valores";
    return;
  }

  if (entrada1 === "") {
    mostraResultado.textContent = "Debes ingresar el primer valor";
    return;
  }

  if (entrada2 === "") {
    mostraResultado.textContent = "Debes ingresar el segundo valor";
    return;
  }

  let calculadorcita = new Calcular(entrada1, entrada2);

  let resultadito;

  switch (operador) {
    case "sumar":
      resultadito = calculadorcita.sumar();
      break;

    case "restar":
      resultadito = calculadorcita.resta();
      break;

    case "multiplicacion":
      resultadito = calculadorcita.multiplicar();
      break;

    case "divison":
      resultadito = calculadorcita.dividir();
      break;

    case "modulo":
      resultadito = calculadorcita.modulo();
      break;

    default:
      resultadito = "La operacion no es valida";
  }

  mostraResultado.textContent = "El resultado es: " + resultadito;
}
