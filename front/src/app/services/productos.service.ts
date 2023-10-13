import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Productos } from '../models/productos';

@Injectable({
    providedIn: 'root'
})
export class ProductosService {

    url = 'http://localhost:3000/api/v1'

    constructor(private http: HttpClient) { }

    postProducto(parametros: any):Observable<any>{
        return this.http.post(`${this.url}/obtener-productos`, parametros) // paginacion
    }

    getProducto(idProducto:string):Observable<any>{
        return this.http.get(`${this.url}/buscar-productos/${idProducto}`)
    }

    postProductos(producto: Productos):Observable<any>{
        return this.http.post(`${this.url}/crear-producto`, producto)
    }

    putProducto(idProducto:string | null, dataProducto:Productos):Observable<any>{
        return this.http.put(`${this.url}/actualizar-productos/${idProducto}`, dataProducto)
    }

    deleteProducto(idProducto:string):Observable<any>{
        return this.http.delete(`${this.url}/eliminar-productos/${idProducto}`)
    }

}
