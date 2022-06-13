for(var i=1; i<=10; i+=1){
    console.log(i)
}

for(var o=10; o>=1; o--){
    console.log(o)
}

var limite=prompt("ingrese el limite")
var suma=0;
for (var e=0; e<=limite; e++){
    suma+=e;
}
console.log(suma);

var inicio=prompt("ingrese el inicio");
var final=prompt("ingrese el fin");
for(var p=inicio; p<=final; p++){
 if(p%2==0){
     console.log(p);
 }  
}

var arregloNombre=[];
for(var i=0; i<5; i++){
    var nombre=prompt("ingrese un nombre")
arregloNombre.push(nombre);
}
console.log(arregloNombre);

for (var i =0; i<arregloNombre.length;i++){ 
    console.log("el nombre"+i+"es"+arregloNombre[i]);
}


var sumatoria=0
for(var i=0; i<cantNotas; i++){
    sumatoria+=arreglo[i]
}
var promedio=sumatoria/cantNotas;
console.log("el promedio de notas" + promedio);

    









