export class Productos {

    _id?: string
    nombre: string
    imagen: string
    descripcion: string
    precio: number
    disponible: boolean
    unidades: number

    constructor(nombre: string, imagen: string, descripcion: string, precio: number, disponible: boolean, unidades: number) {

        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
        this.disponible = disponible;
        this.unidades = unidades;

    }

}
