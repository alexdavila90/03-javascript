const validarSuerte = () => {
    let numero=parseInt(document.getElementById("numSuerte").value);
    if(numero===7){
        window.alert("HAZ GANADO $1,000,000.00")
    }
    else{
        window.alert("Sigue participando")
    }
}