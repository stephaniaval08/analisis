/*
var CantSaludos = 0; //Los saludos que se han dado
 
while(CantSaludos < 10){ //las veces que va a saludar
    console.log("Hola "); //mensaje que ejecuta
    CantSaludos += 2; //Que irá de dos en dos
}
/*

var respuesta ="si";
 
while(respuesta=="si"){
    console.log("Dijo sí");
    respuesta=prompt("ingrese un valor");
}


var valor = true;
var respuesta2;
 
while(valor){
    console.log("valor es " + valor);
    respuesta2=prompt("ingrese un valor 1 verdadero 0 falso");
    if(respuesta2 == 1){
        valor = true;
    }      
}
*/
//PUNTO 1
var ciclo1=0;
 
while(ciclo1<5){
    console.log(2);
    ciclo1+=1

}      
//PUNTO 2
var ciclo2=0;
while(ciclo2<8){
    console.log("ha hecho" + ciclo2);
    ciclo2+=1
 }
//PUNTO 3 
 var ciclo3=0;
 while(ciclo3<20){
     console.log(5)
     ciclo3+=2
}
//PUNTO 4 
var ciclo4="seguir";
while(ciclo4 != "OK"){
    console.log("dijo" + ciclo4);
    ciclo4=prompt ("ingrese ok para parar");
   
}
//PUNTO 5 
var ciclo5="seguir";
while(ciclo5 >=0){
    console.log("dijo" + ciclo5);
    ciclo5=prompt ("ingrese un negativo para detenerse");
}
   
var suma=0;
var num1;
var num2;
while (suma <=20) {
    num1= parseInt(prompt("ingrese un valor"))
    num2=parseInt(prompt("ingrese otro valor"))
    suma= num1+num2;
}

