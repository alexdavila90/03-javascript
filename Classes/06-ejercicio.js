const calcularTabla = () => {
    let resultado = 0;
    for (let i = 0; i < 10; i++) {
        console.log("Tabla del " + (i + 1));
        for (let j = 0; j < 10; j++) {
            resultado = (i + 1) * (j + 1);
            console.log((i + 1) + "x" + (j + 1) + "=" + resultado);
        }
    }
}