function suma(parametro1, parametro2) {
    //ejecutar un codigo especifico
    return parametro1 + parametro2
}

const resultado = suma(6, 7);
console.log(resultado);

function sum() {
    let numero1 = document.getElementById(numero1).value;
    let numero2 = document.getElementById(numero2).value;
    console.log(typeof (numero1));
    console.log(numero1, " ", numero2);
    let suma = parseInt(numero1) + parseInt(numero2);
    alert(suma);
}


function add() {  //funcion no utilizada
    let numero1=document.getElementById("numero1");
    let numero2=document.getElementById("numero2");
    return param1 + param2;
}

const add2 = function (param1, param2) {      //función anónima
    return param1 + param2;
}

const add3 = (param1, param2) => {            //función de flecha
    return param1 + param2;
}

const add4 = (param1, param2) => param1 + param2;

