export class Detalles{
  _id?: string
  imagen:string
  nombre:string
  descripcion:string
  precio:number
  unidades:number
  disponible:boolean


  constructor(imagen:string, nombre:string, sabor:string, descripcion:string, precio:number, unidades:number, disponible:boolean){

    this.imagen = imagen
      this.nombre = nombre
      this.descripcion = descripcion
      this.precio = precio
      this.unidades = unidades
      this.disponible = disponible

  }
}
