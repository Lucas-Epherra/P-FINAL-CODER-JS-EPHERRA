/* COTIZADOR DE DIVISAS */
// a continuacion se realizara un simulador interactivo de un conversor de divisas ( euro, pesoArg, dolar y sus variantes blue) con lo visto hasta la clase 4.

//variables ( monedas y valor )


let peso = 1;
let dolar = 200;
let dolarBlue = 300;
let euro = 210;
let euroBlue = 310;

// variable para resultado 

let resultado = 0;

function elegirMoneda() {

let monedaElegida = prompt("Elija una moneda");
    

    while (monedaElegida != "ESC") {

        switch (monedaElegida) {

            case dolarBlue:
                alert("dolarBlue");
                break;

            case dolar:
                alert("dolar");
                break;

            case euroBlue:
                alert("euroBlue");
                break;

            case euro:
                alert("euro");
                break;
                
            default:
                alert("Elije una divisa valida (dolar,dolarBlue,euro,euroBlue)");
                break;
        }
    }

}

elegirMoneda();


function montoIngresado() {

    let = parseInt(prompt("Ingrese un monto"));


}

montoIngresado();