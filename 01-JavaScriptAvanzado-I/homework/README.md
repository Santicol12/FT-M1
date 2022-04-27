
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; // 1
var a = 5; // undefined
var b = 10; // undefined
var c = function(a, b, c) { // undefined
  var x = 10; 
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10); // 10, 8, 8, 9
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // error ---> bar is not defined
console.log(baz); // error ---> baz is not defined
foo(); // error ---> foo() is not defined
function foo() { console.log('Hola!'); } // undefined
var bar = 1; // undefined
baz = 2; // 2
```

```javascript
var instructor = "Tony"; // undefined
if(true) { 
    var instructor = "Franco";
} // undefined
console.log(instructor); // "Franco"
```

```javascript
var instructor = "Tony"; // undefined
console.log(instructor); // "Tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})(); // "Franco"
console.log(instructor); // "Tony"
```

```javascript
var instructor = "Tony";  // undefined
let pm = "Franco"; // undefined
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
} //  "The Flash", "Reverse Flash"
console.log(instructor); // "The Flash"
console.log(pm); // "Franco"
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // error ---> Infinity
{}[0] // [0] 
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5 
5 || 0 // 5 
0 || 5 // 5 
[3]+[3]-[10] // 23
3>2>1 // false
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); // La salida de este código es 2 porque es lo unico que devuelve la función dentro de la otra función. ádemas ambos console.log estan ejecutando una función y una variable que no se estan definidas en el momento de ejecutar el console.log
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // Este codigo en el momento que se invoca la función da como salida undefined porque se usa el valor booleano false donde no permite que se defina la variable snack dentro de la función y devuelve la variable snack sin definir, ádemas no se toma la parte de arriba var snack = 'Meow Mix' porque se esta invocando la función getFood donde la función no permite usar valores afuera de sus llaves.  
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
}; // Aquí en este código lo primero que se hace es asignar un metodo dentro de un objeto dentro de otro objeto la propiedad o variable fullname se le asigna un valor 3 veces; una vez en cada objeto y una vez como tal fuera del scope del objeto. Después de eso se ejecutará el console.log invocando el metodo dentro del objeto donde esta esto con el fin que el this haga referencia a ese objeto dando como resultado 'Aurelio De Rosa'. Y ya para terminar se asigna la variable test para que guarde el metodo que estaba dentro del objeto dicho antes y ya cuando se invoca el metodo test funciona como un metodo dentro de window como tal, por tal razon ahora this hace referencia al objeto global y da como resultado en el console.log a 'Juan Perez'.

console.log(obj.prop.getFullname()); // 'Aurelio De Rosa'

var test = obj.prop.getFullname;

console.log(test()); // 'Juan Perez'
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); // 1, 4, 3, 2
// Primero en la función se llama el entero 1 por medio del console.log, de segundo se ejecuta el console.log mostrando 4, luego el 3 que aunque su tiempo de setTimeout sea 0 lo muestra es después de los console.log sencillos y por ultimo el console.log con setTimeout 1000 = 1 seg muestra con console.log el numero 2. 
```
