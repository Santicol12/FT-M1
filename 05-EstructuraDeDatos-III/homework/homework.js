"use strict";
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this._length = 1;
}
BinarySearchTree.prototype.insert = function (x) {
  if (x === this.value) {
    return
  }
  var current = new BinarySearchTree(x);
  if (x > this.value) {
    if (this.right == null) {
      this._length++
      this.right = current;
    } else {
      this.right.insert(x);
    }
  } else {
    if (this.left == null) {
      this._length++
      this.left = current;
    } else {
      this.left.insert(x);
    }
  }
};

BinarySearchTree.prototype.contains = function (google) {
  if (google === this.value) {
    return true;
  }
  if (google > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(google);
    }
  } else {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(google);
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, opcion) {
  if (!opcion || opcion === "in-order") { 
    if (this.left) { 
      this.left.depthFirstForEach(cb, opcion);
    }
    cb(this.value); 
    if (this.right) { 
      this.right.depthFirstForEach(cb, opcion);
    }
  } else if (opcion === "pre-order") { 
    cb(this.value); 
    if (this.left) { 
      this.left.depthFirstForEach(cb, opcion);
    }
    if (this.right) { 
      this.right.depthFirstForEach(cb, opcion);
    }
  } else if (opcion === "post-order") { 
    if (this.left) { 
      this.left.depthFirstForEach(cb, opcion);
    }
    if (this.right) { 
      this.right.depthFirstForEach(cb, opcion);
    }
    cb(this.value); 
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array) {
    if (!array) {
    var array = [];
  }
  if (this.left) {
    array.push(this.left); 
  }
  if (this.right) {
    array.push(this.right);
  }
  cb(this.value);
  if (array.length > 0) {
    array.shift().breadthFirstForEach(cb, array);
  }
};

BinarySearchTree.prototype.size = function () {
  return this._length
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
