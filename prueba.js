function holaMundo(nombre) {
    return "Hola Mundo!! Soy " + nombre;
}
var nombre = "David Ortega";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
// Variables y tipos
var nombretwo = "David Ortega";
var edad = 20;
var programador = true;
var langs = ["PHP", "JAVASCRIPT", "CSS"];
etiqueta.innerHTML = nombre + " - " + edad;
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4;
    var b = 1;
    console.log("DENTRO DEL IF: " + a_1 + " - " + b);
}
console.log("FUERA DEL IF: " + a + " - " + b);
//FUNCIONES Y TIPADO
function devuelveNumero(num) {
    return "Numero devuelto: " + num;
}
function devuelveString(texto) {
    if (texto === "hola") {
        var num = true;
    }
    else {
        var num = false;
    }
    return num;
}
alert(devuelveNumero(34));
alert(devuelveString("hola"));
