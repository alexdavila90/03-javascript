//Imprimir los numeros del 1 al 10
/*
let elemento='';
for (let index = 0; index < 10; index++) {
    elemento += parseInt(index+1)+" ";
    console.log(elemento);
    document.getElementById("parrafo").innerHTML = elemento;
}*/

const calcularSuma = () => {

    let suma = 0;
    for (let i = 0; i < 5; i++) {
        //console.log(suma);
        let inputData = parseInt(prompt(`Por favor ingresa el ${i + 1} digito`));
        console.log(inputData);
        console.log(typeof (inputData));
        if (isNaN(inputData)) {
            alert("Solo se permiten números enteros, por favor intente de nuevo.")
            i--;
        }
        else {
            suma += inputData;
            console.log(suma);
        }
    }
    document.getElementById("suma").innerHTML = suma;
}