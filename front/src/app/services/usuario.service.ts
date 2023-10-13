import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
    providedIn: 'root'
})
export class RegistroService {

    url = 'http://localhost:3000/api/v1'

    constructor(private http: HttpClient) { }

    postUsuarios(parametros: any):Observable<any>{
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        return this.http.post(`${this.url}/obtener-usuarios`, {parametros}, {headers})
    }

    getUsuario(idUsuario:string):Observable<any>{
        const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`)
        return this.http.get(`${this.url}/obtener-usuario/${idUsuario}`, {headers})
    }

    postUsuario(usuario: Usuario):Observable<any>{
        return this.http.post(`${this.url}/crear-usuario`, usuario)
    }

    putUsuario(idUsuario: string | null, dataUsuario: Usuario):Observable<any>{
        return this.http.put(`${this.url}/actualizar-usuario/${idUsuario}`, dataUsuario)
    }

    deleteUsuario(idUsuario:string):Observable<any>{
        return this.http.delete(`${this.url}/eliminar-usuario/${idUsuario}`)
    }

    postIngresoUsuario(dataLogin:object):Observable<any>{
        return this.http.post(`${this.url}/ingreso`, dataLogin)
    }

    estaLogueado(){
        // if(sessionStorage.getItem('token') != null){
        //     return true
        // } else {
        //     return false}

        return (sessionStorage.getItem('token') != null) ? true : false
    }


}
