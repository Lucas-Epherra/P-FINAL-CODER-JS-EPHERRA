/* COTIZADOR DE DIVISAS */
// a continuacion se realizara un simulador interactivo de un conversor de divisas ( euro, pesoArg, dolar y sus variantes blue) con lo visto hasta la clase 4.

//variables ( monedas y valor )

let peso = 1;
let dolar = 200;
let dolarBlue = 300;
let euro = 210;
let euroBlue = 310;


// funcion para elegir una divisa y ver su valor

function elegirMoneda() {

    let monedaElegida = prompt("Elija una moneda (dolar,dolar blue,euro,euro blue)");

    if (monedaElegida == "dolar") {

        monedaElegida = dolar;
        alert("El valor del dolar oficial es : $" + monedaElegida + " ars");

    } else if (monedaElegida == "dolar blue") {

        let monedaElegida = prompt("Elija una moneda (dolar,dolar blue,euro,euro blue)");
        monedaElegida = dolarBlue;
        alert("El valor del dolar blue es $" + monedaElegida + " ars");

    } else if (monedaElegida == "euro") {

        let monedaElegida = prompt("Elija una moneda (dolar,dolar blue,euro,euro blue)");
        monedaElegida = euro;
        alert("El valor del euro es $" + monedaElegida + " ars");

    } else if (monedaElegida == "euro blue") {

        let monedaElegida = prompt("Elija una moneda (dolar,dolar blue,euro,euro blue)");
        monedaElegida = euroBlue;
        alert("El valor del euro blue es $" + monedaElegida + " ars");

    } else if (monedaElegida != "euro","dolar","dolar blue","euro blue") {
        monedaElegida = peso ;
        prompt ("Elija una moneda valida(dolar,dolar blue,euro,euro blue)");
    }
}

elegirMoneda();

console.log(monedaElegida);


// funcion para saber a cuanto equivale una divisa de la otra x ejemplo (100 usd blue / 30.000 ars)
/* 
function montoIngresado() {

    let = parseInt(prompt("Ingrese un monto"));


}

montoIngresado(); */