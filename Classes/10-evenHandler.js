const showInitialMessage = () => {
    alert('La página cargó con éxito')
}

let img = document.querySelector("img");
console.log(img);

//onclick
img.onclick = function () {
    img.src = "./images/cotopaxi.jpg"
}

//onmouseover
img.onmouseover = function () {
    img.src = "./images/sangay.jpg"
}

//onmouseout
img.onmouseout = function () {
    img.src = "./images/antisana.jpg"
}

//onblur - pierde el focus un elemnto
const myOnBlur = (obj) => {
    obj.style.background = "orange";
}
//onfocus - input cuando el elemnto esta ahi
const myOnFocus = (obj) => {
    obj.style.background = "blue";
}

const createButtons =(number,color)=>{
    for (let i = 0; i < number; i++) {
        const div=document.createElement("div");    
    }
}

//onchange
//onkeydown - cuando precionamos una tecla
//onkeyup - cuando liberamos un tecla
//onload - cuando la página cargó

