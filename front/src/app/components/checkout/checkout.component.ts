import { Component, OnInit } from '@angular/core';
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

    constructor(private _productosService: ProductosService) { }

    ngOnInit(): void {


        if (sessionStorage.getItem("carrito") != null) {
            this.hayProductos = true
            this.productosCarrito = JSON.parse(sessionStorage.getItem("carrito")!)
            console.log(this.productosCarrito)
            this.productosCarrito.forEach((productoC: any) => {
                this.precioTotal = this.precioTotal + productoC.precio;
                this.contador = productoC.contador
            });
        } else {
            this.hayProductos = false
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


            }

            console.log(sessionStorage.getItem("carrito"));
            // localStorage.setItem('')
        });
    }


}



//

//     constructor(private _productos: ProductosService) {}

//     ngOnInit(): void {
//         this.getProducto(identificador:string)
//     }

//     // getProducto(){
//     // this._productos.getProducto().subscribe((data:any)=> {
//     //   this.item=data
//     // })
// getProducto(identificador:string){
//   this._productos.getProducto(identificador).subscribe(
//     data =>{
//     this.item= data.data
//     console.log(this.item)
//   })
// }

//     }
