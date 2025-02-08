//destructores de datos
//array

let myArray = ["Alex", "Davila", 35];
let [nombre, apellido, edad] = myArray;

console.log(myArray);
console.log(nombre, apellido, edad);

let myArray2 = [1, 2, 3, 4, 5];
let [num1, num2, num3, num4, num5] = myArray2;

console.log(myArray2);
console.log(num1, num2, num3, num4, num5);

const myFunction = () => {
    let a, b;
    a = 5;
    b = "ABC";
    return [a, b]
}

const [a, b] = myFunction();
console.log(a, b);

const arrayPadre = [[1, 2, 3], [4, 5, 6]];
const [fila1, fila2] = arrayPadre;
console.log(fila1, fila2);

//Objetos
const user = {
    id: 42,
    isVerified: true,
    userName: "adavila",
    email: "adavila@mail.com",
    telefonos: [
        "0995565585", "0925556665"
    ]
};

const { id, isVerified, userName, email, telefonos } = user;
const [telefono1, telefono2] = telefonos;
console.log(id, userName, telefono2);

const o = {
    p: 42,
    q: true
};
const { p, q } = o;
console.log(p, q);

const obj2 = {
    x: 3,
    y: 6,
    z: 9
};
const { x, y, z } = obj2;
console.log(z, y, x);

const user2 = {
    idcard: 30,
    displayName: "Raz",
    fullName: {
        firstName: "Mike",
        lastName: "Laris"
    }

};

const { idcard, displayName, fullName } = user2;
const { firstName, lastName } = fullName;
console.log(idcard, firstName, lastName);


//Operador Spread (...)
let arr = [30, 40, 50];

//añadir 10,20
let newArr = arr.unshift(20);
let newArr2 = arr.unshift(30);
console.log(arr);

let newArr3 = [10, 20, arr[0], arr[1], arr[2]];
console.log(newArr3);
//-------------
let newArr4 = [10, 20, ...arr];
console.log(newArr4);

let arr2 = [60, 70, 80];
console.log(arr.concat(arr2));

let arr3 = [90, 100, 110];
let nArr = [...arr2, ...arr3];
console.log(nArr);

//Spread con strings
let strContinental = "Europe";
let letter = [...strContinental, " ", "and Asia"];
console.log(letter);

//spread con objetos
const persona = {
    nombre: "Alex",
    apellido: "Davila",
    tieneHijos: false
}

const newPerson = {
    ...persona,
    edad: 28,
    email: "alexd@mail.com"
}

console.log(newPerson);

const copyPerson = { ...persona };
console.log(copyPerson);

newPerson2 = persona;
persona.nombre = "Patricio";
console.log(newPerson2, persona);


//Parametro REST
//rest siempre va al final de los parámetros
//sirve para poner una cantidad ilimitada de parámetros

const foo = (param1, param2, ...rest) => {
    console.log(param1);
    console.log(param2);
    console.log(rest);
}

foo("hola", "mundo", "blue", "yellow", true, 1, 2, 3, "green");

//Coalescencia nula ??
persona.nombre=null;
const edadPersona=persona.nombre;
const defaultValue = edadPersona ?? 'No tiene nombre';
console.log(defaultValue);

//3.12 Data Estructure pag.27
let vara=8;
let varb=4;
console.log(vara>varb&&"verdadero");  //cumple cuando el resultado de la condición es true
console.log(vara<varb||"verdadero");  //cumple cuando el resultado de la condición es false
