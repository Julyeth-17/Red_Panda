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
export class GrillaDetallesComponent implements OnInit {
    GrillaDetalles: FormGroup;
    productDetails: Productos | null = null;
    listaProductos: Productos[] = []

    constructor(
        private fb: FormBuilder,
        private _productosService: ProductosService,
        private router: Router,
        private idUsuarioRuta: ActivatedRoute
    ) {
        this.GrillaDetalles = this.fb.group({
            _id: ['', [Validators.required]],
            imagen: ['', [Validators.required]],
            nombre: ['', [Validators.required]],
            descripcion: ['', [Validators.required]],
            precio: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
        this.obtenerProductos();
    }

    obtenerProductos() {

        this.productDetails = {

        };

        const productId = this.productDetails.snapshot.params['productId']; // Obtener el productId desde la URL

        if (productId) {
            this._productosService.getProductos(productId).subscribe(
                (respuestaApi) => {
                    this.productDetails = respuestaApi;
                },
                (error) => {
                    console.log(error);
                }
            );
        } else {
            console.log("productId no encontrado en la URL");
        }
    }


const routes: Routes = [

    { path: 'producto/:productId', component: GrillaDetallesComponent },
];

}
