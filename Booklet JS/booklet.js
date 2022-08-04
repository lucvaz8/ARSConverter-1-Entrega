// Modulo 1 //

// Ej. 1//
/*let nombre = "Homero"
let apellido = "Simpson"
let edad = 39
console.log(nombre,apellido,edad) */

//Ej. 2//
/*const ciudad1 = "Buenos Aires"
const ciudad2 = "New York"
const ciudad3 = "Alaska"
const ciudad4 = "Roma"
const ciudad5 = "Barcelona"
console.log (ciudad1,ciudad2,ciudad3,ciudad4,ciudad5)*/

//Ej. 3//
/*let nombre = "Bart Simpson"
let address = "Evergreen Terr. 742"
let edad = 18
let pais = "USA"

let carnet = " Nombre :" +  nombre + "\n " +"Direccion :" + address + "\n " + "Edad: " + edad + "\n " + "Pais: " + pais;
console.log (carnet)*/

//Ej. 4//
/*let nombre1 = prompt ("Por favor ingresar el nombre de su primer integrante familiar");
let nombre2 = prompt ("Por favor ingresar el nombre de su segundo integrante familiar");
let nombre3 = prompt ("Por favor ingresar el nombre de su tercer integrante familiar");
let nombre4 = prompt ("Por favor ingresar el nombre de su cuarto integrante familiar");

let familia = ("Su familia esta compuesta por: " + nombre1 + " " + nombre2 + " " + nombre3 + " " + nombre4);
alert(familia);*/

//Ej. 5//
/*let precio = prompt ("Ingresar el precio a calcular");
let descuento = prompt("Ingresar el % que desea averiguar");
let porcentaje = precio * (descuento/100);
let resultado = precio - porcentaje;
alert ("total estimado con descuento aplicado: " + resultado); */




//Modulo 2//
//Ej. 1 //
/*let usuario = prompt("Escriba su nombre");
if (usuario == "Lucas"){
    alert ("Fui yo")
}else{
    alert ("No fui yo")
}*/

//Ej. 2//
/* let tecla = prompt ("Presionar una tecla");
if ((tecla === "Y") || (tecla === "y")){
alert ("Correcto")
}else{
alert ("Incorrecto")
} */

//Ej. 3//
/*let Simpson = prompt ("Escoge un numero del 1 al 5 para seleccionar a un integrante de la familia Simpson");
if (Simpson =="1"){
    alert ("Sellecionaste a Homero Simpson");
}
else if (Simpson =="2"){
    alert ("Sellecionaste a Marge Simpson");
}
else if (Simpson =="3"){
    alert ("Sellecionaste a Bart Simpson");
}
else if (Simpson =="4"){
    alert ("Sellecionaste a Lisa Simpson");
}
else if (Simpson =="5"){
    alert ("Sellecionaste a Maggie Simpson");
}else{
alert ("Numero incorrecto");
}*/

//Ej. 4//
/*let presupuesto = prompt ("Ingresar su presupuesto estimado");
if ((presupuesto >= 0) && (presupuesto <= 1000)){
    alert ("Presupuesto bajo");
}else if ((presupuesto >= 1001) && (presupuesto <= 3000)){
    alert ("Presupuesto medio");
}else if(presupuesto > 3000){
    alert ("Presupuesto alto");
}else{
    alert ("Error!");
}*/

//Ej. 5//
/*let producto1 = prompt ("detalle su producto a solicitar");
let producto2 = prompt ("detalle su producto a solicitar");
let producto3 = prompt ("detalle su producto a solicitar");
let producto4 = prompt ("detalle su producto a solicitar");
let carrito = (producto1+ " "+ producto2+ " "+producto3+" "+producto4);
if ((producto1 !="") && (producto2 !="") && (producto3 !="") && (producto4 !="")){
   alert (carrito) 
}else{
    alert ("Error!")
}*/



//Modulo 3//

//Ej.1//
/*let numero = prompt ("Ingresar numero");
let texto = prompt ("Ingresar texto");
for (index = 0; index < numero; index ++){
    alert (texto)
}*/

//Ej. 2//
/*let numero = prompt ("Detallar el numero a repetir");
for (index = 1; index < numero; index ++){
    if (index > 4){
        break;
    }
    alert ("lado");
}*/

//Ej. 3//
/*let alumnos = " ";
for (index =0; index < 10; index ++ ){
    alumnos += prompt ("Ingresar nombre del alumno.") + "\n ";
}
alert (alumnos);*/

//Ej.4//
/*let entrada = prompt ("Ingresa tu nombre");
let ingresados = " ";
while (entrada !="Voldemort"){
    ingresados += entrada + "\n ";
    entrada = prompt ("Ingresa tu nombre.");
}
alert (ingresados);*/

//Ej. 5//
let compra = prompt ("Ingrese un numero del 1 al 4 para su compra.");
let carrito = " ";
while (compra !="ESC"){
    switch (compra) {
        case "1":
            alert ("Haz elegido tomate");
            break;
        case "2":
            alert ("Haz elegido papa");
            break;
        case "3":
            alert ("Haz elegido carne");
            break;
        case "4":
            alert ("Haz elegido pollo");
            break;    
        default:
            alert ("Numero incorrecto.")
            break;
    }
    carrito += compra +  "\n ";
    compra = prompt ("Ingrese un numero del 1 al 4 para su compra");   
}
alert(carrito);

