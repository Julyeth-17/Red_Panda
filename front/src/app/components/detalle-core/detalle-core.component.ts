import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms'
import { DetalleCoreService } from 'src/app/services/detalle-core.service';
import { Productos } from 'models/detalle.core';


@Component({
  selector: 'app-detalle-core',
  templateUrl: './detalle-core.component.html',
  styleUrls: ['./detalle-core.component.css']
})
export class DetalleCoreComponent implements OnInit {

DetalleCore: FormGroup;
ListaProductos: Productos[] = []
  constructor(private fb: FormBuilder, _detallesService: DetalleCoreService) {
    this.DetalleCore = this.fb.group({
      imagen:['', [Validators.required]],
      nombre:['', [Validators.required]],
    })
  }

  ngOnInit(): void {

  }

  crearDetalleCore(){
    console.log(this.DetalleCore)
  }

  obtenerDetalleCore(){

  }
}



function showProductDetails(productId: number) {
  // Simula cargar los detalles del producto desde una fuente de datos
  const productDetails = getProductDetails(productId);

  // Redirige a la página de detalles del producto
  window.location.href = `aunnose${productId}`;
}

function getProductDetails(productId: number) {

  return {
      nombre: `${productId}`,
      imagen: `${productId}`,
  };
}
