import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service'
import { ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

    listaProductos: Productos[] = [];

    constructor(private _productoService: ProductosService) {

    }

    ngOnInit(): void {
        this.traerProductos();
    }

    traerProductos() {
        this._productoService.getProductos().subscribe(data => {
            console.log(data)
            this.listaProductos = data
        }, error => {
            console.log(error)
        })
    }

    eliminarProducto(id: any) {
        Swal.fire({
            title: '¿Desea eliminar el producto?',
            text: 'Tenga en cuenta que esta acción no se puede deshacer',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, deseo eliminar el producto',
        }).then((result) => {
            if (result.isConfirmed) {
                this._productoService.deleteProducto(id).subscribe(data => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Producto eliminado',
                        timer: 2000
                    })
                    this.traerProductos();
                }, error => {
                })
            }
        })
    }

    alerta() {
        Swal.fire({
            title:'¡En construcción!',
            imageUrl: 'https://media2.giphy.com/media/mMjzDtzFdnXaJhGyyx/giphy.gif?cid=ecf05e476i4r7tgzco4e51kp3sulwteqdf50d1dakx7ddml1&ep=v1_gifs_search&rid=giphy.gif&ct=g',
            imageWidth: 300,
            imageHeight: 300
        })
    }

}
