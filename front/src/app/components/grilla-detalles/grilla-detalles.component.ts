import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from 'src/app/models/productos';
import { Routes } from '@angular/router'




@Component({
    selector: 'app-grilla-detalles',
    templateUrl: './grilla-detalles.component.html',
    styleUrls: ['./grilla-detalles.component.css'],
})
export class GrillaDetallesComponent {
    idProducto: string | null
    dataProducto:any = ""
    constructor(private _productosService: ProductosService,  private router: Router,  private idUsuarioRuta: ActivatedRoute ) {
        this.idProducto = this.idUsuarioRuta.snapshot.paramMap.get('id')
    }


    ngOnInit(): void {
        this.obtenerProductos();
    }

    obtenerProductos() {

        if (this.idProducto != null) {
            this._productosService.getProducto(this.idProducto).subscribe(
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



}
