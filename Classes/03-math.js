var myNumber=Math.random();
console.log(myNumber);

myNumber=myNumber*100;
console.log(myNumber);

myNumber=Math.floor(myNumber);
console.log(myNumber);

if(myNumber>50){
    document.getElementById("cuerpo").style.backgroundColor="green";
}
else{
    document.getElementById("cuerpo").style.backgroundColor="red";
}