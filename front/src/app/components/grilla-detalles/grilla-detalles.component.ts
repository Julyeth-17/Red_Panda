import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetalleCoreService } from 'src/app/services/detalle-core.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Detalles } from 'models/grilla-detalles';
import { Routes } from '@angular/router'



@Component({
  selector: 'app-grilla-detalles',
  templateUrl: './grilla-detalles.component.html',
  styleUrls: ['./grilla-detalles.component.css'],
})
export class GrillaDetallesComponent implements OnInit {
  GrillaDetalles: FormGroup;
  productDetails: Detalles | null = null;
  listaDetalles: Detalles[] = []

  constructor(
    private fb: FormBuilder,
    private _detallesService: DetalleCoreService,
    private router: Router,
    private idUsuarioRuta: ActivatedRoute
  ) {
    this.GrillaDetalles = this.fb.group({
      _id: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      disponible: ['', [Validators.required]],
      unidades: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.obtenerDetalles();
  }

  obtenerDetalles() {
    const productId = this.idUsuarioRuta.snapshot.params['productId'];// Obtener el productId desde la URL
    this._detallesService.getDetalle(productId).subscribe(
      (respuestaApi) => {
        this.productDetails = respuestaApi;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addToCart(product: Detalles | null) {
    // Agrega la lógica para agregar el producto al carrito aquí.
    // Esto podría implicar almacenar el producto en una variable o enviar los datos al servidor.
    alert(`${product?._id} se agregado al carrito.`);
  }
}

const routes: Routes = [
  // Otras rutas aquí...
  { path: 'producto/:productId', component: GrillaDetallesComponent },
];


