function realizarOperacion(num1, num2, operacion) {
  switch (operacion) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "La division entre 0 no es valido";
      }
      return num1 / num2;
    case "%":
      return (num1 % num2) / 100;
    default:
      return "Operacion invalida: use +, -, *, / o %";
  }
}

function calculadora() {
  let num1;
  do {
    let entrada1 = prompt("Ingrese el primer numero: ");
    if (entrada1 === null) {
      alert("Operación cancelada.");
      return;
    }
    if (isNaN(parseFloat(entrada1.trim()))) {
      alert("Entrada inválida. Por favor ingresa un número.");
      continue;
    }
    num1 = parseFloat(entrada1);
  } while (num1 === undefined);

  const operadoresValidos = ["+", "-", "*", "/", "%"];
  let operador;
  do {
    operador = prompt(
      "Ingresa uno de los operadores que se te muestra a continuacion (+, -, *, /, %): "
    );
    if (operador === null) {
      alert("Operación cancelada.");
      return;
    }
    if (!operadoresValidos.includes(operador)) {
      alert("Operador inválido. Por favor ingresa uno de: +, -, *, /, %");
    }
  } while (!operadoresValidos.includes(operador));

  let num2;
  do {
    let entrada2 = prompt("Ingrese el segundo numero: ");
    if (entrada2 === null) {
      alert("Operación cancelada.");
      return;
    }
    if (isNaN(parseFloat(entrada2))) {
      alert("Entrada inválida. Por favor ingresa un número.");
      continue;
    }
    num2 = parseFloat(entrada2);

    if (operador === "/" && num2 === 0) {
      alert("No se puede dividir entre 0. Por favor ingresa otro número.");
      num2 = undefined; 
    }
  } while (num2 === undefined);

  let resultado = realizarOperacion(num1, num2, operador);
  alert("El resultado es: " + resultado);
}

calculadora();
