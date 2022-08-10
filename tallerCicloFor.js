/*console.log("PUNTO 1");
var numeros=0
var num1=prompt("ingrese un número");
var num2=prompt("ingrese otro número");
if(num1<num2){
    for(var i=num1; i<=num2; i++){
        console.log(i)
    }}
    else if(num1>num2){
        for(var i=num2; i<=num1; i++){
        console.log(i);
        }}
        //Este punto fue el que me pusiste para la nota del examen que no pude realizar
               

console.log("PUNTO 2");
var multiplos=prompt("Ingrese un número para conocer sus múltiplos");
for(var p=0; p<= 10; p++){
console.log(multiplos + "x" + p + "="+multiplos*p)
}

console.log("PUNTO 3");
var inicio=prompt("ingrese el numero para multiplicar");
var final=prompt("ingrese otro número para determinar el final");
for(var p=0; p<=final; p++){
 if(p<=final){
     console.log(inicio + "X" + p +  "="+ inicio*p );
 }  
}


/*console.log("PUNTO 4");
var arregloNúmeros=[]
var números;
for(var i=1; i<=10; i++){
números=prompt("Ingrese un número");
arregloNúmeros.push(números);
}
console.log(arregloNúmeros);
var mayor =0;
for(var i=0; i<=arregloNúmeros.length; i++){
    if(mayor < arregloNúmeros[i])
    mayor=arregloNúmeros[i];
    }
    console.log("El número mayor es" + mayor);
    
              

console.log("PUNTO 5")
 var arregloArti=[];
 for(var i=0; i<5; i++){
 var articulos=prompt("ingrese el nombre del articulo")
 arregloArti.push(articulos);
 }
 var arregloPrecios=[];
 for (var i=0; i <arregloArti.length; i++){
     precio=prompt("ingrese el precio del articulo" + arregloArti[i])
     arregloPrecios.push(precio);
 }
 
 console.log("PUNTO 6");
var nombreArti=prompt("ingrese el nombre de un producto parea conocer el precio")

for(var i=0; i<arregloNombres.length; i++){
    if(arregloNombres[i]==nombreArti){
        console.log("el precio de"  +nombreArti+ "es $"+arregloPrecios[i])
    }}




