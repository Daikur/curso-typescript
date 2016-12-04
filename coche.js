var Coche = (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "BMW Generico";
        }
        else {
            this.modelo = modelo;
        }
        this.color = "Blanco";
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
var coche = new Coche("Renault Clio");
var coche_dos = new Coche();
var coche_tres = new Coche();
coche.setColor("ROJO");
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.frenar();
console.log("El color del coche es: " + coche.getColor());
console.log("La velocidad del coche es: " + coche.getVelocidad());
console.log("El modelo del coche es: " + coche.getModelo());
/*
coche_dos.setColor("AZUL");
coche_tres.setColor("VERDE");

coche.acelerar();
console.log("el color del coche 2 es: "+coche_dos.getColor());
console.log("el color del coche 3 es: "+coche_tres.getColor());
*/ 
