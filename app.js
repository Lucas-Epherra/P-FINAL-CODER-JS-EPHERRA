
/* CALCULADORA DE AHORRO EN DIVISAS EXTRANJERAS/

/ a continuacion se realizara un simulador interactivo de un conversor de divisas ( euro, dolar y sus variantes blue) con lo visto hasta la clase 4. */

//variables ( monedas y valor )
const dolar = 200;
const dolarBlue = 300;
const euro = 250;
const euroBlue = 350;
let divisa;


function verificavalor(valor) {
    if (isNaN(ahorro) || ahorro == null || ahorro == "") {
        console.log('Not a Number!');
        return "error";
    } else {
        console.log(ahorro);
        return ahorro;
    }
}

function funcionAhorro() {
    ahorro = prompt("Ingrese sus ahorros en pesos");
    a = verificavalor(ahorro);
    return a;
}

const menu = () => {
   return ("1=dolar \n 2=dolar blue \n 3=euro \n 4=euro blue \n ingrese el numero correspondiente.")
}

let cortarFuncion = true;
let moneda;

function leerMoneda() {

    while (cortarFuncion == true) {
        moneda = prompt(menu());
        if (moneda < 5 && moneda > 0) {
            cortarFuncion == false;
            return moneda;
        } else {
            alert("el valor es incorrecto")
            continue;
        }
    }
}

divisaSeleccionada = leerMoneda();

console.log(divisaSeleccionada);


// Variables inicializada para darles valor en el algoritmo de abajo
// Algoritmo condicional que asignan un valor a la variable inicializada anteriormente arriba segun la eleccion y muestran la alerta adecuada

switch (Number(divisaSeleccionada)) {

    case 1:

        alert("Usted ha elegido 'dolar', el valor del dolar oficial es de : $" + dolar + " ars");
        divisaSeleccionada = dolar;
        divisa = " dolares"
        break;

    case 2:

        alert("Usted ha elegido 'dolar blue', el valor del dolar blue es de : $" + dolarBlue + " ars");
        divisaSeleccionada = dolarBlue;
        divisa = " dolares blue"
        break;

    case 3:

        alert("Usted ha elegido 'euro', el valor del euro es de : $" + euro + " ars");
        divisaSeleccionada = euro;
        divisa = "euros"
        break;

    case 4:

        alert("usted ha elegido 'euro blue', el valor del euro blue es de : $" + euroBlue + " ars");
        divisaSeleccionada = euroBlue;
        divisa = "euros blue"
        break;

} 



let valor = funcionAhorro();

if (valor == "error") {
    alert("Error, el numero ingresado es invalido");
} else {
    alert("Sus ahorros son " + valor / divisaSeleccionada + " " + divisa);
}