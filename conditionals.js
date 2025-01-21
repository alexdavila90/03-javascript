let number = 12;
if (number > 10) {
    //siempre que la funcion se cumple, el codigo se ejecuta.
    console.log("Este numero es mayor a 10");
}
else {
    //el codigo se ejecuta cuando la condicion no se cumple
    console.log("Este numero no cumple la condicion");
}

let edad = 20;
if (edad >= 18) {
    window.alert("Puede entrar al casino");
}
else {
    window.alert("No puede ingresar un menos de edad");
}

let edad2 = 17;
if (edad2 >= 18) {
    window.alert("Debe ir a votar");
} else if (edad2 >= 16 && edad2 < 18) {
    window.alert("Puede votar opcionalmente")
} else if (edad2 >= 12 && edad2 < 16) {
    window.alert("Puede votar opcionalmente acompañado de sus padres")
}else {
    window.alert("Niños no pueden votar")
}

//Operadores lógicos
/*
and   &&
or    ||
not   !
*/

//Operadores de comparacion
/*
Mayor que  >
Menor que  <
Igual      
    debil   ==
    literal ===
Desigual   
    debil   !=
    literal !==
*/


//Operador ternario
let a = 7;
let b = 8;

//codigo normal
/*let esigual=false;
if(a===b){
    esigual=true;
    console.log(esigual);
}else{
    esigual=false;
    console.log(esigual);
}*/

//            condicion    T       F
let esigual = (a === b) ? true : false;
