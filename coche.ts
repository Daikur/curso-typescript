interface CocheBase{
	getModelo():string;
	getVelocidad():number;
}

class Coche implements CocheBase{
	public color: string;
	public modelo: string;
	public velocidad: number;

	constructor(modelo = null){
		this.velocidad = 0;
		if(modelo == null){
			this.modelo = "BMW Generico";
		} else {
			this.modelo = modelo;
		}
		this.color = "Blanco";
	}

	public getModelo():string{
		return this.modelo;
	}

	public setModelo(modelo:string){
		this.modelo = modelo;
	}

	public getColor(){
		return this.color;
	}

	public setColor(color:string){
		this.color = color;
	}

	public getVelocidad():number{
		return this.velocidad;
	}


	public acelerar(){
		this.velocidad++;
	}

	public frenar(){
		this.velocidad--;
	}

}

var coche = new Coche("Renault Clio");
var coche_dos = new Coche();
var coche_tres = new Coche();

coche.setColor("ROJO");
coche.acelerar();
coche.acelerar();
coche.acelerar();

coche.frenar();

console.log("El color del coche es: "+coche.getColor());
console.log("La velocidad del coche es: "+coche.getVelocidad());
console.log("El modelo del coche es: "+coche.getModelo());

/*
coche_dos.setColor("AZUL");
coche_tres.setColor("VERDE");

coche.acelerar();
console.log("el color del coche 2 es: "+coche_dos.getColor());
console.log("el color del coche 3 es: "+coche_tres.getColor());
*/