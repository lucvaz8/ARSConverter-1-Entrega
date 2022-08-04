class divisa {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
    mostrardivisas(){}
}

const divisa1 = new divisa ("Dolar", 121);
const divisa2 = new divisa ("Euro", 125);
const divisa3 = new divisa ("Libra Esterlina", 155);

class volumen{
    constructor (divisa, cantidad){
        this.divisa = divisa;
        this.cantidad = cantidad;
    }
    calcularSubtotal(){
        let subtotal = this.divisa.precio * this.cantidad;
        return subtotal;
    }
    mostrarvolumen (){ }
}

const volumen1 = new volumen (divisa1, 1000);
const volumen2 = new volumen (divisa2, 1050);
const volumen3 = new volumen (divisa3, 1100);


class ordendecompra{
    constructor (fecha, volumen){
        this.fecha = fecha;
        this. volumen = volumen;
    }
    calculartotal (){
        let total = 0;
        for(const totalordendecompra of this.volumen)
        total = total + totalordendecompra.calcularSubtotal();
        return "El total de la orden de compra es de $" + total;

    }
    mostrarordendecompra (){}
}

const array = [];
array.push (volumen1);
array.push (volumen2);
array.push (volumen3);

console.log (array);

const ordendecompra1 = new ordendecompra (new Date(), array);
console.log(ordendecompra1.calculartotal())

let monedas = [{nombre: "Dolar", precio: "121"},{nombre: "Euro", precio: "125"}, {nombre: "Libra Esterlina", precio: "155"}]
let findA = monedas.find((elemento)  => {
    return elemento.nombre === "Dolar"
   })
let findB = monedas.find ((elemento) => monedas.nombre != "Dolar")

//

let nombre = prompt("Bienvenido a ARS Converter. \nIngrese su Nombre y Apellido")
let bienvenida = "Bienvenid@" + " " + nombre +".\nComenzamos?"
alert (bienvenida)

let TipodeCambio = prompt ("Que cotizacion desea calcular? \nDolar \nEuro \nLibra Esterlina");

while (((TipodeCambio != "Dolar") && (TipodeCambio != "Euro") && (TipodeCambio!="Libra Esterlina"))){
    TipodeCambio = prompt("Moneda incorrecta, por favor seleccionar una de las opciones predeterminadas.\nDolar \nEuro \nLibra esterlina");
}
if(TipodeCambio == "Dolar"){
    while (TipodeCambio !=NaN) { 
        TipodeCambio = prompt("Moneda incorrecta, por favor seleccionar una de las opciones predeterminadas.\nDolar \nEuro \nLibra esterlina");
    }
    TipodeCambio = prompt ("Indique la cantidad de pesos que quiere convertir a dolares.");
    alert ("total: USD " + (TipodeCambio * 0.0082).toFixed(2) + ".")

}
if(TipodeCambio == "Euro"){
    TipodeCambio = prompt ("Indique la cantidad de pesos que quiere convertir a euros.");
    alert ("total: EUR " + (TipodeCambio * 0.0077).toFixed(2) + ".")
}
if(TipodeCambio == "Libra Esterlina"){
    TipodeCambio = prompt ("Indique la cantidad de pesos que quiere convertir a libras esterlinas.");
    alert ("total: L " + (TipodeCambio * 0.0065).toFixed(2) + ".")
}

alert ("ARS Converter agradece tu consulta.")

//