console.log("PUNTO 1");
var ciclo1=0;
while(ciclo1<7) {
    console.log("ha hecho"+ ciclo1)
    ciclo1+=1
}
console.log("PUNTO 2");
var ciclo2=0;
while(ciclo2<33){
    console.log("los multiplos son" + ciclo2);
    ciclo2+=3

}
console.log("PUNTO 3");
var ciclo3=0;
while(ciclo3<52){
    console.log("Los numeros pares son" + ciclo3);
    ciclo3+=2
}
console.log("PUNTO 4");
var ciclo4=1;
var limite=prompt( "ingrese un numero hasta donde quiere conocer el impar" );
     while(ciclo4 <= limite){
     console.log("Los numeros impares" + ciclo4)
     ciclo4+=2
}

console.log("PUNTO 5");
var ciclo5=prompt("ingrese un numero");
while(ciclo5 %2==0){
    console.log(ciclo5+ "es un número par")
    ciclo5= prompt ("ingrese un número");
  }

console.log("PUNTO 6");
var acumulador= 0;
var cantidadE=prompt ("ingrese la cantidad de estudiantes");
var ciclo6=1
while (ciclo6<=cantidadE){
    var edad=parseInt(prompt("ingrese la edad del estudiante"));
    acumulador +=edad
    ciclo6+=1
    }
    console.log("el acumulador de las edades de los estudiantes es" + acumulador)


console.log ("PUNTO 7");
var rifa=true
var respuesta;
var ciclo7=0;
while(rifa){
    respuesta=prompt ("ingrese un numero");
    console.log("su respuesta fue" + respuesta);
    if(respuesta == 2){
        rifa= false;
     }ciclo7+=1
}console.log("felicitaciones gano la rifa");
console.log("Le tomo estos intentos" + ciclo7)


console.log("PUNTO 8");
var cantN=prompt("ingrese la cantidad de notas");
var acumulador=0;
var ciclo8;
while (ciclo8<=cantN){
    var promedio=parseInt(prompt("ingrese la cantidad de notas"));
    acumulador +=promedio
    ciclo8+=1
    }
    console.log("el acumulador de las notas de los estudiantes es" + acumulador)



