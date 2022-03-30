
//los arreglos son estructuras que almacenan informacion de cualquier tipo de dato, es decir, string, int, double, array, objetos, entre otros. Los arreglos tienen operaciones tales como:Consultar, modificar, insertar y eliminar.
//Los arreglos se declaran con corchetes [](Alt+91)
//Tener en cuenta que las cadenas van en comillas.

//Creacion de arreglos
var arreglo=["juan",14];
console.log(arreglo);

var notasEstudiantes=[ ["sofia",4.8], ["isa",4.6] ];
console.log(notasEstudiantes);

//Consultar contenido del arreglo
console.log(notasEstudiantes[0]);

console.log(notasEstudiantes[0][0]);
console.log(notasEstudiantes[1][1]);

//modificar elementos
console.log(arreglo[0] + "tiene" + arreglo  [1]);
arreglo[1]=15
console.log(arreglo[0] + "tiene" + arreglo [1] + "años")
notasEstudiantes[1]=5.0;
console.log(notasEstudiantes[1][0] + "obtuvo" + notasEstudiantes [1] + "notafinal");

//agregar elementos 
console.log("sin agregar"+arreglo);
arreglo.push("10a");    
console.log("agregado"+arreglo);

//agregar elementos al arreglo del inicio  
console.log("sin agregar"+arreglo);
arreglo.unshift("perez");    
console.log("agregado"+arreglo); 

//eliminarelementos al arreglo 
console.log ("sin eliminar"+arreglo);
arreglo.pop();//elimina ultimo dato y el parentesis siempre va solo
console.log("eliminado"+arreglo);
arreglo.shift();//elimina el primer elemento 
console.log("elimina.shift"+arreglo);

//ejercicio
/*Crear el arreglo con los valores/*
-analisis
-tecnologia 
-desarrollo
/*cambiar desarrollo por bbdd
//convertir el vector en:
-introduccion 
-análisis
-tecnologia*/

var arreglos=["analisis","tecnologia","desarrollo"];
console.log (arreglos);
arreglos[2]="BBDD";
console.log (arreglos);
arreglos.unshift("introduccion");
arreglos.pop();
console.log(arreglos);



