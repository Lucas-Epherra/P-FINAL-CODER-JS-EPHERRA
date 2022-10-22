/* COTIZADOR DE DIVISAS */
// a continuacion se realizara un simulador interactivo de un conversor de divisas ( euro, pesoArg, dolar y sus variantes blue) con lo visto hasta la clase 4.

//variables ( monedas y valor )

let peso =1;
let dolar =200;
let dolarBlue =300;
let euro =210;
let euroBlue =310;

 
// funcion para elegir una divisa y ver su valor

function elegirMoneda() { 

let monedaElegida = prompt("Elija una moneda (dolar,dolar blue,euro,euro blue)");

    switch (monedaElegida) {

        case "dolar":
            alert("El valor del dolar oficial es : $" + dolar + " ars");
             monedaElegida = prompt("Elija una moneda (dolar,dolar blue,euro,euro blue)");
             break;

        case "dolar blue":
            alert("El valor del dolar blue es $" + dolarBlue + " ars");
            monedaElegida = prompt("Elija una moneda (dolar,dolar blue,euro,euro blue)");
            break;

        case "euro":
            alert("El valor del euro oficial $" + euro + " ars");
            monedaElegida = prompt("Elija una moneda (dolar,dolar blue,euro,euro blue)");
            break;

        case "euro blue":
            alert("El valor del euro blue $" + euroBlue + " ars");
            monedaElegida = prompt("Elija una moneda (dolar,dolar blue,euro,euro blue)");
            break;

        default:
            alert("Ingrese una moneda valida")
            monedaElegida = prompt("Elija una moneda valida (dolar,dolar blue,euro,euro blue)");
            break;
    }

    monedaElegida = prompt("Elija una moneda (dolar,dolar blue,euro,euro blue)");
 }

elegirMoneda(); 


// funcion para saber a cuanto equivale una divisa de la otra x ejemplo (100 usd blue / 30.000 ars)
/* 
function montoIngresado() {

    let = parseInt(prompt("Ingrese un monto"));


}

montoIngresado(); */