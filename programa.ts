class Programa{
	public nombre:string;
	public version:number;

	setNombre(nombre:string){
		this.nombre = nombre;
	}

	setVersion(version:number){
		this.version = version;
	}

	getNombre(){
		return this.nombre;
	}

	getVersion(){
		return this.version;
	}
}

class EditorVideo extends Programa{
	public timeline:number;

	setTimeline(timeline:number){
		this.timeline = timeline;
	}

	getTimeline(){
		return this.timeline;
	}

	public toString():string{
		return this.nombre + " "+this.version+" "+this.timeline;
	}
}

var editor = new EditorVideo();

editor.setVersion(8);
editor.setNombre("Camtasia Studio");
editor.setTimeline(4000);

console.log(editor.toString());

//Logica del formulario

var programas = [];

function guardar(){
	var nombre:string = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

	var programa = new Programa();
	programa.setNombre(nombre);
	//programa.setVersion(version);

	programas.push(programa);

	var list = "";
	for(var i = 0; i < programas.length; i++){
		list = list+"<li>"+programas[i].getNombre()+"</li>";
	}

	var listado = <HTMLElement> document.getElementById("listado");
	listado.innerHTML = list;

	var nombre:string = (<HTMLInputElement>document.getElementById("nombre")).value = ""; 