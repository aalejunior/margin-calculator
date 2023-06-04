let inputcusto = document.getElementById("valor-custo");
let inputmargem = document.getElementById("valor-margem");
let inputseguro = document.getElementById("valor-seguro");

function calculator_event(event) {
  let valuecusto = parseFloat(inputcusto.value);
  let valuemargem = parseFloat(inputmargem.value);
  let valueseguro = parseFloat(inputseguro.value);

  if (isNaN(valuecusto)) {
    valuecusto = 0;
  }

  let customargem = valuecusto + (valuecusto * valuemargem) / 100;

  document.getElementById("totalmargem").innerHTML = customargem.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );

  let custosegurototal = customargem + (customargem * valueseguro) / 100;

  document.getElementById("total").innerHTML = custosegurototal.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );
}
inputcusto.addEventListener("input", calculator_event);
inputmargem.addEventListener("input", calculator_event);
//inputseguro.addEventListener("input", calculator_event);
