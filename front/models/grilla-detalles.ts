export class Detalles{
  _id?: string
  imagen:string
  nombre:string
  descripcion:string
  precio:number



  constructor(imagen:string, nombre:string, sabor:string, descripcion:string, precio:number){

    this.imagen = imagen
      this.nombre = nombre
      this.descripcion = descripcion
      this.precio = precio
  }
}
