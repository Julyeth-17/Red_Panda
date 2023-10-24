export class Contacto{
  _id?: string
  nombre:string
  correo: string
  inquietud: string


constructor (nombre:string, correo: string, inquietud: string) {
  this.nombre = nombre
  this.correo= correo
  this.inquietud = inquietud
}
}
