//Objetos

let Persona = {
    nombre: 'Byron', //Key=nombre Value=Byron
    apellido: 'Realpe',
    edad: 28,
    estadoCivil: 'Soltero',
    estatura: 1.70,
    tieneHijos: true,
    hijos: [
        {
            nombre: "Luis"
        },
        {
            nombre: "Paula"
        }
    ]
}

document.getElementById("output").innerHTML = Persona.edad;
console.log(Persona.hijos);


let carro1 = {
    "motor": 2,
    "marca": "Chevrolet",
    "capacidad": 5,
    "modelo": "sail"
}

let carro2 = {
    "motor": 3,
    "marca": "Chevrolet",
    "capacidad": 12,
    "modelo": "trucker"
}

let carros = [];

carros.push(carro1);
carros.push(carro2);

console.log(carros);