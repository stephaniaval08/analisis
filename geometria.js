//Integrantes: Valeria Betancourt, sofia gipis, mariana holguin, stephania millan
function suma (num1, num2){ 
    var resultado= num1 + num2; 
    var mensaje = resultado;
    return resultado;
    }  
       function division (num1,num2){ 
        var resultado= num1 / num2; 
        var mensaje= resultado;
        return resultado; 
        } 
        function multiplicacion (num1,num2){
            var resultado = num1 * num2 ; 
            var mensaje= resultado; 
        
        return resultados;
    }
    function potencia(num1, num2){
        var resultado = num1 ** num2;
        var mensaje= resultado;
        return resultado;
        }   

   //punto 3
   function main_geometria(){
    var eleccion=prompt("por favor ingrese la operacion que desee realizar\n 1.area \n 2.perimetro")
   
    var eleccionfigura=promt("escoja su figura \n 1.cuadrado \n 2.circulo")
   var base1=parseFloat(prompt("por favor ingrese el valor de la medida"));
if(eleccion =="area"){
    if(eleccionfigura == "cuadrado"){
    var resultadoMulti= (multiplicacion(base1, base1));
    
    console.log("el area del cuadrado es" + resultadoMulti)}

    else if (eleccionfigura== "circulo"){
var resultadoCircu=potencia (base1,2)
var resultadoCircu2=multiplicacion(resultadoCircu, 3.1416)
console.log("el area del circulo es " + multiplicacion(resultadoCircu2,2))
    }

if (eleccion=="perimetro"){
if(eleccionfigura=="cuadrado"){
var resultadoPeri=(multiplicacion(base1,4)); 
console.log("el perimetro del cuadrado es "+ resultadoPeri)}

else if(eleccionfigura=="circulo"){
    var resultPer=(multiplicacion(base1,2));
    console.log("el perimetro del circulo es " + multiplicacion(resultPer,3,1416))
}

}
}}
