/* COTIZADOR DE DIVISAS */
// a continuacion se realizara un simulador interactivo de un conversor de divisas ( euro, pesoArg, dolar y sus variantes blue) con lo visto hasta la clase 4.

//variables ( monedas y valor )

let pesoArgentino = 1;
let dolarOficial = 200;
let dolarBlue = 300;
let euroOficial = 210;
let euroBlue = 310;


function elegirMoneda(val1, val2, val3, val4, val5) {

    let monedaElegida = prompt("Elija una moneda");

    if (monedaElegida == "")  {

        alert ("No elegiste un tipo de moneda valido");

    } else {

        prompt ("")

        val1 = pesoArgentino;
        val2 = dolarOficial;
        val3 = dolarBlue;
        val4 = euroOficial;
        val5 = euroBlue;
    }

}

elegirMoneda();


function montoIngresado() {

    let = parseInt(prompt("Ingrese un monto"));


}

montoIngresado();