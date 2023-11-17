export class Cliente {

    _id?: string
    nombre: string
    email: string
    password: string
    pago: number
    ciudad: string
    telefono: number
    postal: number
    direccion: string

    constructor(nombre: string, email: string, password: string, pago:number, ciudad: string, telefono: number, postal: number, direccion: string ) {

        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.pago = pago;
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.postal = postal;
        this.direccion = direccion;
    }

}
