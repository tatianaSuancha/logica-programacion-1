const prompt = require("prompt-sync")();

function ordenarMayorAMenor(lista) {

    let listaOrdenada = [];

    for (let i = 0; i < lista.length; i++) {
        listaOrdenada[i] = lista[i];
    }

    for (let i = 0; i < listaOrdenada.length; i++) {
        for (let j = 0; j < listaOrdenada.length - 1 - i; j++) {
            if (listaOrdenada[j] < listaOrdenada[j + 1]) {
                let temporal = listaOrdenada[j];
                listaOrdenada[j] = listaOrdenada[j + 1];
                listaOrdenada[j + 1] = temporal;
            }
        }
    }

    return listaOrdenada;
}

function mostrarLista(lista) {
    let resultado = "";
    for (let i = 0; i < lista.length; i++) {
        resultado += lista[i];
        if (i < lista.length - 1) {
            resultado += ", ";
        }
    }
    return resultado;
}

function invertirLista(lista) {
    let listaInvertida = [];
    for (let i = lista.length - 1; i >= 0; i--) {
        listaInvertida.push(lista[i]);
    }
    return listaInvertida;
}

let numero1 = Number(prompt("Ingresa el primer número: "));
let numero2 = Number(prompt("Ingresa el segundo número: "));
let numero3 = Number(prompt("Ingresa el tercer número: "));

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {

    console.log("por favor, ingresa solo numeros validos");

} else {

    let numeros = [numero1, numero2, numero3];

    let sonIguales = (numero1 === numero2 && numero2 === numero3);

    let mayorAMenor = ordenarMayorAMenor(numeros);
    let menorAMayor = invertirLista(mayorAMenor);

    let mayor = mayorAMenor[0];
    let medio = mayorAMenor[1];
    let menor = mayorAMenor[2];

    console.log("numeros ingresados: " + mostrarLista(numeros));
    console.log("orden de menor a mayor: " + mostrarLista(menorAMayor));
    console.log("orden de mayor a menor: " + mostrarLista(mayorAMenor));
    console.log("mayor: " + mayor);
    console.log("medio: " + medio);
    console.log("menor: " + menor);

    if (sonIguales) {
        console.log("los tres numeros son iguales");
    }
}