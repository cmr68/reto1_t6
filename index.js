// • En el fichero index.js (fichero de librería):
// - Declarar las funciones de la calculadora por separado (suma, resta, producto, división)

let suma = (x,y) => x+y;
let resta = (x,y) => x-y;
let producto = (x,y) => x*y;
let division = (x,y) => x/y;
let cuadrado = num => num*num;

// - Al final del documento index.js escribir la sentencia:
// module.exports =
// • A continuación escribir el nombre de las funciones entre {} separados por comas de la
// librería que se desean exportar.
module.exports = {suma,resta,producto,division,cuadrado};
// • En el fichero run.js (fichero del programa principal) escribir la sentencia:
// - let myLib = require("./index");
// • Llamar a todas las funciones de la librería e imprimir sus resultados.
// - NOTA: Para llamar a la función hay que hacer myLib.función. Ej: myLib.suma(2,3)