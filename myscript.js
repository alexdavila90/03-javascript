console.log("Hola mundo");

console.log("Hola mundo");
document.getElementById("mensaje").innerHTML = "Párrafo con texto dinámico";

//string
//number
//boolean

const nombre = "Alex Davila";
console.log(nombre);

let a = 10;
let b = 8;
const c = a + b;
console.log(c);
a = -4;
//c=a+b;
console.log(c);

const Persona = {
    name: "Alex",
    age: 35,
    genre: "Masculino",
    married: true
}

console.log(Persona);
console.log(typeof (name));
console.log(typeof (age));

const potencia = 6 ** 2;
console.log(potencia);

let modulo = potencia % 7;
console.log(modulo);

let valor = modulo++;
console.log(valor);

valor += 2;
console.log(valor);
valor--;
console.log(valor);

let numero_4=parseInt("4");
console.log(typeof(numero_4));

console.log(Persona.genre);

//Concatenar
let informacion=Persona.name + valor + Persona.genre;
console.log(informacion);

let info2='Mi nombre es ${Persona.name}';
console.log(info2);
