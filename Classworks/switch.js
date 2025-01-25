const validarEdad = () => {
    let edad = parseInt(document.getElementById("edad").value);
    console.log(edad);
    switch (true) {
        case (edad >= 18):
            window.alert("Debe ir a votar");
            break;
        case (edad >= 16 && edad < 18):
            window.alert("Puede votar opcionalmente");
            break;
        case (edad < 16 && edad >= 12):
            window.alert("Puede votar opcionalmente acompañado de sus padres");
            break;
        default:
            window.alert("Niños no pueden votar");
            break;
    }
}
