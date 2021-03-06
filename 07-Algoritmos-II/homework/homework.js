"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:  array = [7, 8, 23, 92, 55, -2, 35, -55, 3, 2, 324, 24, 33 ]
  //console.log(array);
  if (array.length < 2) {
    return array;
  }
  let pivote = array[0];
  let izq = [];
  let der = [];
  let ordenados = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivote) {
      izq.push(array[i]);
    } else if (array[i] > pivote) {
      der.push(array[i]);
    } else if (pivote === array[i]) {
      ordenados.push(array[i]);
    }
  }
  return quickSort(izq).concat(ordenados).concat(quickSort(der));
}

var array = [
  7, 8, 23, 92, 55, -2, 35, -55, 3, 2, 324, 24, 33, 32, -3, 3, -3, 3, -3,
];

console.log(quickSort(array));

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let division = elQueDivide(array); // [ [left] , [right] ]
  let left = division[0];
  let right = division[1];
  return;
}

function mezcla(izq, der) {
  let iIzq = 0;
  let iDer = 0;
  let array = [];

  while (iIzq < izq.length && iDer < der.length) {
    if (izq[iIzq] < der[iDer]) {
      array.push(izq[iIzq]);
      iIzq++;
    } else {
      array.push(der[iDer]);
      iDer++;
    }
  }
  // [4] - []
  return array.concat(izq.slice(iIzq)).concat(der.slice(iDer));
}

function elQueDivide(array) {
  let medio = Math.floor(array.length / 2);
  let left = array.slice(0, medio); // [2,5,8]
  let right = array.slice(medio); // [12,2,5]
  // [2,5,8,12,2,5]
  return [left, right]; // [ [2,4,8] , [2,5,12]  ]
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
