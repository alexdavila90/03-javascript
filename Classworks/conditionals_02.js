const testear = () => {
    let numero = document.getElementById("num1").value;
    let residuo = numero % 2;
    if (residuo === 0) {
        window.alert("El número es divisible para 2")
    }
    else {
        window.alert("El número NO es divisible para 2")
    }

}
