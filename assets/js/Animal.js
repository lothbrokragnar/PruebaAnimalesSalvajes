export default class Animal {
    constructor(nombre, edad, img, comentarios, sonidos) {
        let Nombre = nombre;
        this.getNombre = () => Nombre;

        let Edad = edad;
        this.getEdad = () => Edad;

        let Img = img;
        this.getImg = () => Img;

        let Comentarios = comentarios;
        this.getComentarios = () => Comentarios;

        let Sonidos = sonidos;
        this.getSonidos = () => Sonidos;
    }

    //getters
    get Nombre() {
        return this._getNombre;
    }
    get Edad() {
        return this._getEdad;
    }
    get Img() {
        return this._getImg;
    }
    get Comentarios() {
        return this._getComentarios;
    }
    get Sonidos() {
        return this._getSonidos;
    }

    //setters
    set Comentarios(nuevoComentario) {
        this._getComentarios = nuevoComentario;
    }
}