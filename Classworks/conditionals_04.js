const validarNumero = () => {
    var numero = parseInt(prompt('Ingresa un número?', '0'));
    if(numero===777){
        let parrafo = document.getElementById("details");
        parrafo.innerHTML="HAZ GANADO $1,000,000.00";
        parrafo.style.color="blue";
        parrafo.style.backgroundColor="yellow";
        parrafo.style.border="solid 5px red"
    }
    else{
        let parrafo = document.getElementById("details");
        parrafo.innerHTML=""; 
        parrafo.style.border=null;
    }
}