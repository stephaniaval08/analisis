console.log("PUNTO 1");
var numero=prompt("ingrese el numero hasta donde quiera conocer los multiplos de 5");//Aqui se pregunta al usuario para asi determinar si es o no multiplo de 5
var contador=0;//Esto se refiere a desde donde comienza el ciclo, es decir, en este caso desde 0

while(contador <= numero){ //Aqui estamos dando la condicion es decir que el contador debe ser menor o igual al numero que ingrese el usuario
    if(contador %5==0){//Es una condicion, es decir, si el reciduo da 0 es multiplo, de lo contrario no lo es.
        console.log("EL", contador, "si es multiplo de 5");//Esto significa que si lo de arriba se cumple el numero es multiplo de 5
        }else{//sino
            console.log("El", contador,"no es multiplo de 5");//Si eso no se cumple el numero que ingreso el usuario NO es multiplo de 5
           }

     contador++;//Significa que el ciclo va de uno en uno
    }      
console.log("PUNTO 2");
var acumulador= 0;
var cajero=prompt ("ingrese los articulos que va a registrar");
var ciclo2=1
while (ciclo2<=cajero){
    var precio=parseInt(prompt("ingrese el precio de cada articulo"));
    acumulador=(cajero * precio)
    ciclo2+=1
    }
    console.log("el total a pagar es" + acumulador);

console.log("PUNTO 3");
var acumulador= 0;
var ciclo3="si"
while (ciclo3 != "no" ){
  
    var precio=parseInt(prompt("ingrese el precio de un articulo para punto 3"));
    acumulador+=precio
    ciclo3= prompt("ingrese no si desea parar");
    
    }
    console.log("el total a pagar es" + acumulador);

console.log("PUNTO 4");
var cantidad=0
var acumulador= 0;
var ciclo3=1
while (ciclo3 != "no" ){
    var precio=parseInt(prompt("ingrese el precio de un articulo para el punto 4"));
    acumulador+=precio
    ciclo3= prompt("ingrese no si desea para");
    cantidad+=1
    
    
    }
    
    if(cantidad >=25){acumulador=acumulador*0.9;
    console.log("Con el descuento el precio total es de" + acumulador);
    }else if (cantidad >=15){acumulador=acumulador*0.85
    console.log("con el descuento el precio total es de" + acumulador);
    }else if(cantidad >=8){acumulador=acumulador*0.8
    console.log("con el descuento el precio total es de" + acumulador);
    }else{
        console.log("el total a pagar es" + acumulador);
        console.log("su compra no tiene descuento")
    }



   console.log("PUNTO 5");
   var perdio=0;
   var cantidadN=parseInt(prompt("ingrese la cantidad de notas que hay en el salon")); ;
   var notaC
   var ciclo5=1;
   var aprobo=0
   while(ciclo5<=cantidadN){
       var notaC=parseFloat(prompt("ingrese la nota final del alumno" + ciclo5)); ;
       ciclo5 += 1
       if(notaC>=3.5){
           console.log("El alunmno aprobo la materia");
           aprobo+=1
          }else {
              console.log("El alumno perdio la materia");
              perdio+=1
          }
          }
          if(aprobo<perdio){
              console.log("Debe abrirse el curso de verano");
          }else {
              console.log("La cantidad de estudiantes no es suficiente para el curso de verano")
          }