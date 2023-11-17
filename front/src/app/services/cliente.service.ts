import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    url = 'http://localhost:3000/api'

    constructor(private http: HttpClient) { }

    getClientes(): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        return this.http.get(`${this.url}/obtener-clientes`, { headers })
    }

    getCliente(idCliente: string): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        return this.http.get(`${this.url}/obtener-cliente/${idCliente}`, { headers })
    }

    postCliente(cliente: Usuario): Observable<any> {
        return this.http.post(`${this.url}/crear-cliente`, cliente)
    }

    putCliente(idCliente: string | null, dataCliente: Usuario): Observable<any> {
        return this.http.put(`${this.url}/actualizar-cliente/${idCliente}`, dataCliente)
    }

    deleteCliente(idCliente: string): Observable<any> {
        return this.http.delete(`${this.url}/eliminar-cliente/${idCliente}`)
    }

    postIngresoCliente(dataLogin: object): Observable<any> {
        return this.http.post(`${this.url}/registro-cliente`, dataLogin)
    }

    estaLogueado() {
        // if(sessionStorage.getItem('token') != null){
        //     return true
        // } else {
        //     return false}

        return (sessionStorage.getItem('token') != null) ? true : false
    }


}
