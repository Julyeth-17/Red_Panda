import { Component, ElementRef, OnInit } from '@angular/core';
import { ProductosService } from "../../services/productos.service";
import { Productos } from "../../models/productos";

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {


    productosCarrito: any = [];
    hayProductos!: boolean
    precioTotal: number = 0
    contador: any = []

    constructor(private _productosService: ProductosService, private el: ElementRef) { }
    ngOnInit(): void {

        this.carritoRecorrido()

    }

    carritoRecorrido() {
        if (sessionStorage.getItem("carrito") != null) {
            this.precioTotal = 0
            this.hayProductos = true
            this.productosCarrito = JSON.parse(sessionStorage.getItem("carrito")!)
            console.log(this.productosCarrito)
            this.productosCarrito.forEach((productoC: any) => {
                this.precioTotal = this.precioTotal + (productoC.precio * productoC.contador);
                console.log(this.precioTotal);

                this.contador = productoC.contador
            });
        } else {
            this.hayProductos = false
        }
    }

    quitarProducto(posicionArray: any) {
        console.log(posicionArray)
        if (this.productosCarrito[posicionArray].contador == 1) {
            this.productosCarrito.splice(posicionArray, 1)
        } else {
            this.productosCarrito[posicionArray].contador = this.productosCarrito[posicionArray].contador - 1
        }
        sessionStorage.setItem("carrito", JSON.stringify(this.productosCarrito))

        if (sessionStorage.getItem("carrito") == null || sessionStorage.getItem("carrito") == "[]") {
            sessionStorage.removeItem("carrito")
        }
        this.carritoRecorrido()

    }



    agregarProducto(posicionArray: any) {
        console.log(posicionArray)
        this.productosCarrito[posicionArray].contador = this.productosCarrito[posicionArray].contador + 1
        console.log(this.productosCarrito);
        sessionStorage.setItem("carrito", JSON.stringify(this.productosCarrito))
        this.carritoRecorrido()

    }




}
