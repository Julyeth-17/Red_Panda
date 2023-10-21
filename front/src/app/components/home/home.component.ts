import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';


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

    agregarALCarrito(idProducto: string) {
        this._productosService.getProducto(idProducto).subscribe((data: any) => {
            let productosCarrito: any = []

            if (sessionStorage.getItem("carrito") == null) {
                data.contador = 1
                productosCarrito.push(data)
                sessionStorage.setItem("carrito", JSON.stringify(productosCarrito))
            } else {

                productosCarrito = JSON.parse(sessionStorage.getItem("carrito")!)

                let rectificaProducto = productosCarrito.findIndex((elemento: any) => elemento._id == idProducto)
                if (rectificaProducto == -1) {
                    data.contador = 1
                    productosCarrito.push(data)
                } else {
                    data.contador = productosCarrito[rectificaProducto].contador + 1
                    productosCarrito[rectificaProducto] = data
                }
                sessionStorage.setItem("carrito", JSON.stringify(productosCarrito))
                Swal.fire({
                    icon: 'success',
                    title: 'Producto agregado!',
                    timer: 2000,
                    confirmButtonColor:"#612a20",
                    iconColor: "#612a20"

                })

            }

            console.log(sessionStorage.getItem("carrito"));
            // localStorage.setItem('')
        });
        // this.arrCajasCategoria.push(this.listaProductos[6])
        // this.arrCajasCategoria.push(this.listaProductos[7])
        // this.arrCajasCategoria.push(this.listaProductos[8])
        // break;
    }
}


