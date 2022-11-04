
/* CALCULADORA DE AHORRO EN DIVISAS EXTRANJERAS/

/ a continuacion se realizara un simulador interactivo de un conversor de divisas ( euro, dolar y sus variantes blue) con lo visto hasta la clase 4. */

//variables ( monedas y valor )
const dolar = 200;
const dolarBlue = 300;
const euro = 250;
const euroBlue = 350;
let divisa;

let nombreUsuario = prompt("Bienvenido a la calculadora de ahorros,por favor ingrese su nombre");

alert("Hola "+ nombreUsuario +" bienvenido a la calculadora de ahorros" );

alert ("A continuacion podras calcular la equivalencia en divisas extranjeras de tus ahorros en pesos argentinos.");

// funcion que verifica si el valor intrudicido es un numero, de lo contrario retorna un error.
function verificaValor(valor) {
    if (isNaN(ahorro) || ahorro == null || ahorro == "") {
        console.log('Not a Number!');
        return "error";
    } else {
        console.log(ahorro);
        return ahorro;
    }
}

//Funcion que recibe el prompt y da inicio a la funcion de verificacion de arriba.
function funcionAhorro() {
    ahorro = prompt("Ingrese sus ahorros en pesos (Ingrese valor numerico sin simbolos)");
    a = verificaValor(ahorro);
    return a;
}

//Funcion flecha para desplegar el menu con las opciones.
const menu = () => {
   return ("Los nombres de las divisas estan representados por numeros del 1 al 4.\n1 = dolar \n2 = dolar blue \n3 = euro \n4 = euro blue \ningrese el numero correspondiente.")
}

// variables que actuan en la funcion de leerMoneda.
let cortarFuncion = true;
let moneda;

//Funcion que recibe el prompt del menu opcional con un ciclo que no deja avanzar si la opcion es incorrecta.
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

// Algoritmo condicional que asignan un valor a la variable inicializada anteriormente arriba segun la eleccion y muestran la alerta adecuada.
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

// algoritmo condicional para realizar el calculo entre el ahorro en pesos y la divisa extranjera.

if (valor == "error") {
    alert("Error, el numero ingresado es invalido");
} else {
    alert("Sus ahorros son " + valor / divisaSeleccionada + " " + divisa);
}

// crear array de objetos y una funcion constructora
// se creara un usuario y los datos se ingresaran en el objeto