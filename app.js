/* COTIZADOR DE DIVISAS */
// a continuacion se realizara un simulador interactivo de un conversor de divisas ( euro, pesoArg, dolar y sus variantes blue) con lo visto hasta la clase 4.

//variables ( monedas y valor )
const peso = 1;
const dolar = 200;
const dolarBlue = 300;
const euro = 210;
const euroBlue = 310;

// funcion para verificar que en ahorro se tipee solo numeros
function funcionAhorro() {

    let ahorro = Number(prompt("Ingrese sus ahorros en pesos"));

    if (ahorro !== "" || ahorro !== null || ahorro !== NaN) {
        return ahorro
    } else { return 404 }
}

// prompt para que el usuario elija una moneda 
let moneda = prompt("Elige una moneda entre (dolar,dolar blue,euro,euro blue)");

// ciclo while para que solo se puedan elegir las 4 opciones
while (moneda != "dolar" && moneda != "dolar blue" && moneda != "euro" && moneda != "euro blue") {
    moneda = prompt("Elige una moneda entre (dolar,dolar blue,euro,euro blue)");
}

// variables inicializada para darles valor luego
let divisaSeleccionada;
let divisa;

// operadores condicionales que asignan un valor a la variable inicializada anteriormente arriba segun la eleccion y muestran una alerta
if (moneda == "dolar") {
    alert("El valor del dolar oficial es: $" + dolar + " ars");
    divisaSeleccionada = dolar;
    divisa = " dolares"
} else if (moneda == "dolar blue") {
    alert("El valor del dolar blue es: $" + dolarBlue + " ars");
    divisaSeleccionada = dolarBlue;
    divisa = " dolares blue"
} else if (moneda == "euro") {
    alert("El valor del euro oficial es: $" + euro + " ars");
    divisaSeleccionada = euro;
    divisa = " euros"
} else if (moneda == "euro blue") {
    alert("El valor del euro blue es: $" + euro + " ars");
    divisaSeleccionada = euroBlue;
    divisa = " euros blue"
}

let ahorros = funcionAhorro();

if (ahorros == 404) {
    alert("error numero invalido");
} else {
    alert("sus ahorros son " + ahorros / divisaSeleccionada + divisa);
}

console.log(divisaSeleccionada);

