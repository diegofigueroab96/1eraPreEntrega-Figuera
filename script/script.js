function negocio() {
    let nombre = prompt("Hola, ¿cual es tu nombre?")
    alert("Hola "+nombre+" bienvenido a nuestro negocio")
    
    let producto = prompt("En nuestro negocio vendemos: carne, pollo y frutas, que te gustaría comprar?")

    if (producto === "carne") {
    let gramosCarne = Number(prompt("cuantos gramos de carne te gustaria?"))
    
    if (gramosCarne >= 0 && gramosCarne < 500) {
        alert("El valor de esa cantidad es de 2000 pesos")
     }

    else if (gramosCarne >=500 && gramosCarne < 1000)
        { alert("El valor de esa cantidad es de 4000 pesos")}

    else if (gramosCarne >=1000 && gramosCarne < 2000)
         { alert("El valor de esa cantidad es de 5000 pesos")}

    else if (gramosCarne >=2000 && gramosCarne <= 10000){
        alert("el precio de esa cantidad es de 10000 pesos")
    }

    else { 
        alert("no vendemos esa cantidad")
    }
}
else if (producto === "pollo") {

let pollo = Number(prompt("El pollo lo vendemos envasado en catidades de diferentes gramos \n1. 500  \n2. 1000 \n3.2000 \n4. 4000 \nDinos con el numero el envase que te gustaría comprar"))

if (pollo===1) {
    alert ("El valor es de 1000 pesos")}

else if (pollo===2){
    alert ("El valor es de 2000 pesos")
}
else if (pollo===3){
    alert ("El valor es de 4000 pesos")
}
else if (pollo===4){
    alert ("El valor es de 8000 pesos")
}
else {
    alert("No tenemos ese producto o esa cantidad.")
}
}

else if (producto ==="frutas") {
    let frutas = prompt("Vendemos: frutilla y mango ¿Cual quieres comprar?")

if (frutas === "frutilla"){
 let cantidadFrutilla = prompt("¿Cuantos gramos de frutilla quieres?")

if (cantidadFrutilla > 0 && cantidadFrutilla < 10000){
    alert("El valor es de 1000 pesos")
}

else {
    alert ("No vendemos esa cantidad")
}

}
if (frutas === "mango"){
    let cantidadMango = prompt("¿Cuantos gramos de mango quieres?")
   
   if (cantidadMango> 0 && cantidadMango < 10000){
       alert("El valor es de 3000 pesos")
   }
   
   else {
       alert ("No vendemos esa cantidad")
   }
}
}
else {
  alert("No vendemos ese producto.")
}
}

negocio()