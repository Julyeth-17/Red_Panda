import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from 'src/app/models/productos';
import { Routes } from '@angular/router'
import Swal from 'sweetalert2';

@Component({
    selector: 'app-grilla-detalles',
    templateUrl: './grilla-detalles.component.html',
    styleUrls: ['./grilla-detalles.component.css'],
})
export class GrillaDetallesComponent {
    idProducto: string | null
    dataProducto: any = ""
    constructor(private _productosService: ProductosService, private router: Router, private idUsuarioRuta: ActivatedRoute) {
        this.idProducto = this.idUsuarioRuta.snapshot.paramMap.get('id')
    }

    ngOnInit(): void {
        this.obtenerProductos();
    }

    obtenerProductos() {

        if (this.idProducto != null) {
            this._productosService.getProductoHome(this.idProducto).subscribe(
                (respuestaApi) => {
                    this.dataProducto = respuestaApi
                },
                (error) => {
                    console.log(error);
                }
            );
        } else {
            console.log("productId no encontrado en la URL");
        }
    }
    agregarALCarrito(idProducto: string) {
        this._productosService.getProductoHome(idProducto).subscribe((data: any) => {
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
