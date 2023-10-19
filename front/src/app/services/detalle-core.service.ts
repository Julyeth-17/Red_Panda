import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleCoreService {

  url = 'http://localhost:4000/api/v1'

  constructor(private http: HttpClient) { }

  getDetalles(): Observable<any> {
    return this.http.get(`${this.url}/obtener-detalle`)
  }


  getDetalle(id: string): Observable<any> {
    return this.http.get(`${this.url}/buscar-detalle/${id}`)
  }

}
