let inputcusto = document.getElementById("valor-custo");
let inputmargem = document.getElementById("valor-margem");
let inputseguro = document.getElementById("valor-seguro");

inputcusto.addEventListener("change", function (event) {
  let valuecusto = parseFloat(inputcusto.value);
  let valuemargem = parseFloat(inputmargem.value);
  let valueseguro = parseFloat(inputseguro.value);

  console.log(valuecusto);
  console.log(valuemargem);

  let customargem = valuecusto + (valuecusto * valuemargem) / 100;

  document.getElementById("totalmargem").innerHTML =
    "R$" + customargem.toFixed(2);

  let custosegurototal = customargem + (customargem + valueseguro / 100);

  document.getElementById("total").innerHTML =
    "R$" + custosegurototal.toFixed(2);
});
