export class Usuario {

    _id?: string
    nombre: string
    apellido: string
    email: string
    password: string
    ciudad: string
    telefono: number
    postal: number
    newsletter: boolean
    condiciones: boolean

    constructor(nombre: string, apellido: string, email: string, password: string, ciudad: string, telefono: number, postal: number, newsletter: boolean, condiciones: boolean) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.postal = postal;
        this.newsletter = newsletter;
        this.condiciones = condiciones;
    }

}
