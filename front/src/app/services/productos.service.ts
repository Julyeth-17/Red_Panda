import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Productos } from '../models/productos';

@Injectable({
    providedIn: 'root'
})
export class ProductosService {

    url = 'http://localhost:3000/api'

    constructor(private http: HttpClient) { }


    getProductos(): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        return this.http.get(`${this.url}/obtener-productos`, {headers})
    }

    getProducto(idProducto:string):Observable<any>{
        return this.http.get(`${this.url}/obtener-producto/${idProducto}`)
    }

    postProducto(producto: Productos):Observable<any>{
        return this.http.post(`${this.url}/crear-producto`, producto)
    }

    putProducto(idProducto:string | null, dataProducto:Productos):Observable<any>{
        return this.http.put(`${this.url}/actualizar-productos/${idProducto}`, dataProducto)
    }

    deleteProducto(idProducto:string):Observable<any>{
        return this.http.delete(`${this.url}/eliminar-productos/${idProducto}`)
    }

    addToCard(idProducto:string){
      // return this.http.post( `${this.url}/crear-producto/${idProducto}`)
    }
}
