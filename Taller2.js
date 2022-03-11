//archivo de practica y prueba javascript 
//Taller 2
//fecha9/03/22
//realizado por: Valeria y Stephania
var areaCuadrado;
var areaCuadrado=prompt("ingrese la medida de un lado del cubo");
var areaCuadrado= areaCuadrado**2;
console.log("el area del cuadrado es", areaCuadrado);

var volumenCuadrado;
var volumenCuadrado=prompt("ingrese la medida de un otro lado del cubo");
var volumenCuadrado=volumenCuadrado**3;
console.log("el volumen del cubo es",volumenCuadrado); 

var rectanguloB;
var rectanguloB=prompt("ingrese la base del rectangulo");
var rectanguloH;
var rectanguloH=prompt("ingrese la altura del rectangulo");
var areaRectangulo=rectanguloB*rectanguloH;
console.log("el area del rectangulo es", areaRectangulo);

var ladoR1;
var ladoR1=prompt("ingrese la medida de un lateral");
var ladoR2;
var ladoR2=prompt("ingrese la medida superior del rectangulo");
var perimetro;
perimetro=(ladoR1+ladoR2+ladoR1+ladoR2)//ladoR1+ladoR2+ladoR1+ladoR2;
console.log("el perimetro del rectangulo es", perimetro);

var areacirculo;
var volumenEsfera;
var diametro=prompt("ingrese el diametro");
diametro=2*Math.PI;
areacirculo=prompt("ingrese el area del circulo");
volumenEsfera=prompt("ingrese el volumen de la esfera");
areacirculo=Math.PI*(diametro/2)**2
volumenEsfera=4/3*Math.PI*(diametro/2)**3

var base1=prompt("por favor ingrese la base1");
var base2=prompt("por favor ingrese la base2");
var h=prompt("por favor ingrese el valor de h");
var area;
area=0.5*base1+base2*h;
console.log("el area del trapezoide es",area);

var ancho=prompt("ingrese ancho de una piscina");
var largo=prompt("ingrese largo de una piscina");
var profundo=prompt("ingrese profundidad de una piscina");
var volumen=largo*ancho*profundo;
console.log("la profundidad de la piscina es",volumen);

var alto=prompt("ingrese alto del muro");
var ancho=prompt("ingrese el ancho de un muro");
var valor=ancho*alto*22000;
console.log("se debe pagar al pintor",valor);

var kilometros
var centimetro=prompt("ingrese la cantidad que quiere convertir");
kilometros= centimetro/100000;
console.log("la longitud en km es",kilometros);

var litro
var decilitros=prompt("ingrese el volumen que quiere convertir");
litro=decilitros/10;
console.log("el volumen es",litro);

var gramos
var microgramos=prompt("ingrese cantidad de masa que desea convertir");
gramos=microgramos/1000;
console.log("la masa es",gramos);

var milimetros
var kilometros=prompt("ingrese una distancia que desea convertir");
milimetros=kilometros*1000000;
console.log("la distacia es",milimetros);





























