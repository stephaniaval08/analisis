console.log("hola mundo");
// comentarios en linea
/*comentario
de
varias
lineas*/


var primerVariable;
let edadUsuario;
//declarar variables
var nombreVariable;
//crear variable sin asignar valor 
/*
inicializar variables:
asignar un valor al momento de crear la variable
*/
var gradoEstudiantes="10a"
/*
asignar un valor:
igualar una variable existente a un nuevo valor
*/
edadUsuario=16;
//asignar valor desde otra variable
console.log(edadUsuario)

var edad=17;
edadUsuario=edad;
console.log(edadUsuario)
/*asignar valor desde el teclado:
existen dos maneras de hacerlo la primera es por ventana emergente y la segunda es por medio de un formulario de html
*/
var valor=prompt("ingrese un valor:");
console.log("la variable vale "+valor);
/*
constantes:
son valores que no pueden ser cambiados durante la ejecucion del codigo. Las constantes siempre deben ser inicializadas 
*/
const PI=3.1416;
//imprimir por consola 
//simple
console.log("");
console.log(valor);
//concatenado
console.log(""+valor);
//operadores 
//suma 
var suma;
suma=5+4;
console.log(suma);
var a =12;
suma = a+8;
console.log (suma);
var b=20;
suma=a+b;
console.log(suma);
//resta
var resultado;
resultado=a-b;
console.log(resultado);
resulatdo= b-a;
console.log(resulatdo);
//multiplicacion 
var producto;
producto=a*b;
console.log(producto);
//division 
var division;
division=a/b;
console.log(division);
division=b/a;
console.log(division)
//orden de operaciones
var result;
result=a*b;
console.log(result);
result=a*b-10;
console.log(result);
result=a*(b-10);
console.log(result);
//exponente/potencia
var exp=3**2;
console.log(exp);
exp=3**3;
console.log(exp);
//cadenas o string
var cadenita1="3";
var cadenita2="5";
var sumacadenas=cadenita1 + cadenita2;
console.log(sumacadenas);
var nombrecito="andres";
var apellidito="bueno";
var nomCompleto= nombrecito + " " + apellidito;
console.log(nomCompleto);
var longitud= nombrecito.length;
console.log(longitud);
console.log(nomCompleto.length);
//Encontrar caracteres dada la posicion en el vector
var primeraLetra;
primeraLetra=nombrecito[0];
console.log(primeraLetra);
//encontrar la ultima posicion de una cadena o vector
nombrecito[nombrecito.length-1];
console.log(nombrecito[nombrecito.length-1]);
//se debe buscar la longitud de la cadena y restarle uno para encontrar la ultima letra 
//valores inmutables
//las posiciones de una cadena se pueden consultar pero no se puede reasignar su valor
nombrecito[0]="p";
console.log(nombrecito);
nombrecito="valeria";
console.log(nombrecito);
//parseo o casting
/*se trata de convertir las edades a otro tipo de dato,los cambios existentes son:
*a entero parseInt()
*a decimal paseFloat()
*a cadena String()
*/
//convertir variable
var entero1=prompt("ingrese un entero");
var entero2=prompt("ingrese otro entero");
var suma=entero1+entero2;
console.log("sin parseInt" + suma);
//forma 1
/*convertir el dato justo en el momento en que se recibe por teclado 
esto implica que cuando se llame la variable ya este convertida al tipo de dato deseado 
*/
entero1=parseInt(prompt("ingrese un entero"));                                                                                          
entero2=parseInt(prompt("ingrese otro entero"));
suma=entero1+entero2;
console.log("convertido "+suma);

var altura=parseInt(prompt("ingrese una altura"));
var base=parseInt(prompt("ingrese una base"));
var p=altura+base+altura+base;
console.log("el perimetro del rectangulo es: " + p);
























