"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // algo
  var suma = 0;
  var exponente = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] === "1") {
      suma += 2 ** exponente;
    }
    exponente++;
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca num = 10
  var binario = "";
  do {
    var i = Math.floor(num);
    if (i % 2 === 1) {
      binario = "1" + binario;
    }
    if (i % 2 === 0) {
      binario = "0" + binario;
    }
    num = i / 2;
  } while (1 < i);
  return binario;

}

// No se pueden usar:
// parseInt
// toString

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
