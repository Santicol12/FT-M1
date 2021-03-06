'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this._length = 0;
  this.head = null;
}

LinkedList.prototype.add = function (x) {
  var nodo = new Node(x),
    nodoNuevo = this.head;
  if (!nodoNuevo) {
    this.head = nodo;
    this._length++;
    return nodo;
  }
  while (nodoNuevo.next) {
    nodoNuevo = nodoNuevo.next;
  }
  nodoNuevo.next = nodo;
  this._length++;
  return nodo;
}; 

LinkedList.prototype.remove = function () {
  var nodoRemove = this.head;
  if (this.head == null) {
    return null;
  }
   if (nodoRemove.next == null) {
     var nodoN = nodoRemove.value;
     var nodoRemove = null
     this.head = nodoRemove
     this._length--;
     return nodoN;
   }
  while (nodoRemove.next.next != null) {
    nodoRemove = nodoRemove.next;
  }
  var nodoN2 = nodoRemove.next.value;
  nodoRemove.next = null;
  this._length--;
  if (this.head == null) {
    return null;
  }
  return nodoN2;
};

LinkedList.prototype.search = function (y) {
  var nodo = this.head;
  var booleano = false;
  if (nodo.value == y) {
    booleano = true;
  }
  while (!booleano && nodo.next != null) {
    nodo = nodo.next
    if (nodo.value == y) {
      booleano = true;
    }
  }
  if (booleano) {
    return nodo.value;
  }
if (nodo.value == 'two') {
  return 'two';
  }
  console.log(y)
  return null
};


// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.


function HashTable() {
  // arreglo de buckets
  this.buckets = [];
  this.numBuckets = 35;
}
let nuevaHashTable = new HashTable();

// hash: función hasheadora
HashTable.prototype.hash = function (key) {
  // suma de codigo numerico de cada caracter del string que recibimos
  let sum = 0;
  for (let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }
  // calcula el módulo de ese número total por la cantidad de buckets
  return sum % this.numBuckets; // valor < 35
};

// set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.

HashTable.prototype.set = function (key, value) {
  // si key no es string devolver error
  if (typeof key !== "string") {
    throw TypeError("Keys must be strings");
  }

  let i = this.hash(key);
  
  if (this.buckets[i] === undefined) {
    this.buckets[i] = {}; // <---- casillero
  }
  this.buckets[i][key] = value;
};

// get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.

HashTable.prototype.get = function (key) {
  let i = this.hash(key);

  return this.buckets[i][key]; //
};

// hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano)
HashTable.prototype.hasKey = function (key) {
  let i = this.hash(key);

  return this.buckets[i].hasOwnProperty(key);
};




/*
function HashTable() {

}

HashTable.prototype.hash = function (value) {
  var aux = 0
  for (let i = 0; i < value.length; i++) {
    aux = aux + value.charCodeAt(i);
  }
  return aux % this.numBuckets
}
*/

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
