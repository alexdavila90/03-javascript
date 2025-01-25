let arrayColor = ["Amarillo", "Azul", "Rojo"];
console.log(arrayColor);

let arrayMixto = ["Hola mundo", false, NaN, undefined];
console.log(arrayMixto);

let arrayEmpty = [];
console.log(arrayEmpty);

let mynewArray = [];
for (let i = 0; i < 10; i++) {
    mynewArray[i] = i * 2;
}
console.log(mynewArray[5]);

let array1 = ["a", "b", "c"];
let array2 = ["d", "e", "f"];

let array3 = array1.concat(array2);
console.log(array3);

let arrayJoin = new Array("Hola", "Mi", "Nombre", "Es", "Alex");
let myString = arrayJoin.join(" ");
console.log(myString);

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let stringPop = arr1.pop(); //Eliminar el ultimo elemento del array
console.log(stringPop);
console.log(arr1);

arr2 = arr1;
arr2.push(9); //Agregar un elemnto al final del array
console.log(arr2);

arr2.reverse(); //Cambiar el orden del array en sentido contrario
console.log(arr2);

arr2.sort(); //Ordenar de menor a mayor el array
console.log(arr2);

arr3 = ["Juan", "Alvaro", "Zoe", "Carlos", "Anita"];
arr3.sort();
console.log(arr3);

arr2.shift(); //Eliminar el primer elemnto del array
console.log(arr2);

console.log(arr2.indexOf(7));  //Encontrar el indice donde esta el elemento 7
//Si el valor es -1 quiere decir que no existe.

let position = arr2.indexOf(7);
arr2.splice(position, 1);    //Quitar un valor del array de una posicion especifica
console.log(arr2);

arr2.splice(0, 0, "Input");
console.log(arr2);

const months=['January','March','April','June','June'];
months.splice(1, 0,'February'); 
months.splice(4, 0,'May');
months.splice(6, 1,'July');
months.splice(7,0,'August');
console.log(months);


const animals= ["ant","Bison","camel","duck", "elephant"];
console.log(animals.slice(2,4));
