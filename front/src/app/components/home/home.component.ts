import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    listaProductos: Productos[] = []
    arrCajasCategoria: any = []


    constructor(private _productosService: ProductosService) { }

    ngOnInit(): void {
        this.obtenerProductos()
    }


    obtenerProductos() {
        this._productosService.getProductos().subscribe(respuestaApi => {
            this.listaProductos = respuestaApi
            console.log(this.listaProductos)
            this.cajasPorCategoria(1)
        }, error => {
            console.log(error)
        })


    }

    cajasPorCategoria(numeroCaja: number) {
        this.arrCajasCategoria = []
        switch (numeroCaja) {
            case 1:
                this.arrCajasCategoria.push(this.listaProductos[0])
                this.arrCajasCategoria.push(this.listaProductos[1])
                this.arrCajasCategoria.push(this.listaProductos[2])
                break;
            case 2:
                this.arrCajasCategoria.push(this.listaProductos[3])
                this.arrCajasCategoria.push(this.listaProductos[4])
                this.arrCajasCategoria.push(this.listaProductos[5])
                break;
            default:
                this.arrCajasCategoria.push(this.listaProductos[6])
                this.arrCajasCategoria.push(this.listaProductos[7])
                this.arrCajasCategoria.push(this.listaProductos[8])
                break;
        }
    }

}
