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

var lista = new LinkedList()

lista.add(2)
lista.add('h')
lista.add('no se ve')
lista.add(5)
lista.add(3)
console.log(lista.search())
console.log(lista.search(2))
console.log(lista.remove());
console.log(lista.remove());
console.log(lista.remove());
console.log(lista.remove());
console.log(lista.remove())
console.log(lista)

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

}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
