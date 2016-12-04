function holaMundo(nombre){
	return "Hola Mundo!! Soy "+nombre;
}

var nombre = "David Ortega";
var resultado = holaMundo(nombre);

var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;


// Variables y tipos
var nombretwo:string = "David Ortega";
var edad:number = 20;
var programador:boolean = true;
var langs:Array<string> = ["PHP","JAVASCRIPT","CSS"];

etiqueta.innerHTML = nombre+ " - "+edad;


var a = 7;
var b = 12;

if(a === 7){
	let a = 4;
	var b = 1;

	console.log("DENTRO DEL IF: "+a+" - "+b);
}

console.log("FUERA DEL IF: "+a+" - "+b);

//FUNCIONES Y TIPADO

function devuelveNumero(num:number):string{
	return "Numero devuelto: "+num;
}

function devuelveString(texto:string):any{
	if(texto === "hola"){
		var num = true;
	}else{
		var num = false;
	}

	return num;
}

alert(devuelveNumero(34));
alert(devuelveString("hola"));

