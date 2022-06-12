"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arreglo = [1];
  var divisor = 2;
  while (num !== 1) {
    if (num % divisor === 0) {
      arreglo.push(divisor);
      num = num / divisor; //
    } else {
      divisor++;
    }
  }
  return arreglo
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código: [1, 2, 4, -2]
  for (let i = array.length; i >= 0; i--) { 
    for (let j = 1; j < i; j++) { // 
      if (array[j-1] > array[j]) {
        let temp = array[j - 1]
        array[j - 1] = array[j]
        array[j] = temp
      }
    } 
  }
  return array
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código: arregloDeNumeros = [2, 4, 6, -2, 0, 1, 11, 15, 7];
  for (let i = 1; i < array.length; i++) { 
    let j = i;
    let temp = array[j]; 
    while (array[j - 1] > temp) {
      array[j] = array[j - 1];  
      j--;
    }
    array[j] = temp; 
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
     let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    let temp = array[min]
    array[min] = array[i]
    array[i] = temp
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
